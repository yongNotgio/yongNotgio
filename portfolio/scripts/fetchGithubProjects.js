#!/usr/bin/env node
// Fetch GitHub repos and generate a projects data file for the portfolio
// Usage:
//   node scripts/fetchGithubProjects.js <github-username>
// Optionally set GITHUB_TOKEN env var for higher rate limits or private repo access

import fs from 'fs/promises';
import path from 'path';
import process from 'process';

const [, , username] = process.argv;
if (!username) {
  console.error('Usage: node scripts/fetchGithubProjects.js <github-username>');
  process.exit(1);
}

const token = process.env.GITHUB_TOKEN;
const apiUrl = `https://api.github.com/users/${username}/repos?per_page=100&type=owner`;

async function fetchRepos() {
  const headers = {
    Accept: 'application/vnd.github.v3+json',
  };
  if (token) headers.Authorization = `token ${token}`;

  const res = await fetch(apiUrl, { headers });
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

function guessCategory(name, desc, language) {
  const text = `${name} ${desc || ''} ${language || ''}`.toLowerCase();
  if (/(flutter|android|ios|mobile)/.test(text)) return ['Mobile', 'Web Apps'];
  if (/(tensorflow|ml|machine|ai|pytorch|model|keras)/.test(text)) return ['AI/ML', 'Web Apps'];
  return ['Web Apps'];
}

function toTitle(str) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, (s) => s.toUpperCase());
}

(async () => {
  try {
    const repos = await fetchRepos();
    const filtered = repos
      .filter((r) => !r.fork && !r.archived)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    const projects = filtered.map((r, i) => {
      const title = toTitle(r.name);
      const desc = r.description || '';
      const language = r.language || '';
      return {
        id: i + 1,
        title,
        category: guessCategory(r.name, desc, language),
        tags: [language || 'JavaScript'],
        description: desc,
        awards: [],
        liveUrl: r.homepage || '#',
        githubUrl: r.html_url,
        image: '/placeholder-project.jpg',
      };
    });

    const outPath = path.resolve('src', 'data', 'projectsData.auto.js');
    const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;
    await fs.writeFile(outPath, fileContent, 'utf8');
    console.log(`Wrote ${projects.length} projects to ${outPath}`);
    console.log('Open src/data/projectsData.auto.js to review and merge into your main data file.');
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
