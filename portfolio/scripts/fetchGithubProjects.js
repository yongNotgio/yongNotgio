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
const FALLBACK_PINNED_REPOS = new Set([
  'unblot',
  'logsync',
  'night_walkers_app',
  'wvsu-lf',
  'diatrack',
  'diatrack1',
]);

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

async function fetchPinnedRepoNamesWithGraphQL() {
  if (!token) return null;

  const query = `
    query($login: String!) {
      user(login: $login) {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
            }
          }
        }
      }
    }
  `;

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.github+json',
    },
    body: JSON.stringify({ query, variables: { login: username } }),
  });

  if (!res.ok) return null;

  const json = await res.json();
  const nodes = json?.data?.user?.pinnedItems?.nodes;
  if (!Array.isArray(nodes)) return null;

  const names = nodes.map((n) => (n?.name || '').toLowerCase()).filter(Boolean);
  return names.length > 0 ? new Set(names) : null;
}

async function fetchPinnedRepoNamesFromProfilePage() {
  const res = await fetch(`https://github.com/${username}`, {
    headers: {
      Accept: 'text/html',
      'User-Agent': 'portfolio-fetch-script',
    },
  });

  if (!res.ok) return null;

  const html = await res.text();
  const sectionMatch = html.match(/id="js-pinned-items-reorder-container"[\s\S]*?<\/ol>/i);
  if (!sectionMatch) return null;

  const pinnedSection = sectionMatch[0];
  const repoLinkRegex = new RegExp(`href="/${username}/([^"/]+)"`, 'gi');
  const names = new Set();
  let match;

  while ((match = repoLinkRegex.exec(pinnedSection)) !== null) {
    if (match[1]) names.add(match[1].toLowerCase());
  }

  return names.size > 0 ? names : null;
}

async function fetchPinnedRepoNames() {
  const fromGraphQL = await fetchPinnedRepoNamesWithGraphQL();
  if (fromGraphQL && fromGraphQL.size > 0) return fromGraphQL;

  const fromProfilePage = await fetchPinnedRepoNamesFromProfilePage();
  if (fromProfilePage && fromProfilePage.size > 0) return fromProfilePage;

  return FALLBACK_PINNED_REPOS;
}

function guessCategory(name, desc, language) {
  const text = `${name} ${desc || ''}`.toLowerCase();
  const normalizedLanguage = (language || '').toLowerCase();

  const mobileLanguages = new Set(['dart', 'kotlin', 'swift', 'objective-c']);
  const webLanguages = new Set([
    'javascript',
    'typescript',
    'html',
    'css',
    'php',
    'vue',
    'svelte',
    'tsx',
    'jsx',
  ]);

  let platformCategory = 'Web App';
  if (mobileLanguages.has(normalizedLanguage)) {
    platformCategory = 'Mobile';
  } else if (webLanguages.has(normalizedLanguage)) {
    platformCategory = 'Web App';
  } else if (/(flutter|android|ios|mobile)/.test(text)) {
    platformCategory = 'Mobile';
  }

  const categories = [platformCategory];
  if (/(tensorflow|ml|machine learning|ai\b|pytorch|model|keras|opencv|xai)/.test(text)) {
    categories.push('AI/ML');
  }

  return categories;
}

function toTitle(str) {
  return str.replace(/[-_]/g, ' ').replace(/\b\w/g, (s) => s.toUpperCase());
}

function buildProjectImage(repo) {
  if (repo?.owner?.login && repo?.name) {
    const tokenPart = repo?.id || 1;
    return `https://opengraph.githubassets.com/${tokenPart}/${repo.owner.login}/${repo.name}`;
  }
  return repo?.owner?.avatar_url || '/placeholder-project.jpg';
}

(async () => {
  try {
    const repos = await fetchRepos();
    const pinnedRepoNames = await fetchPinnedRepoNames();

    const filtered = repos
      .filter((r) => !r.archived)
      .filter((r) => pinnedRepoNames.has((r?.name || '').toLowerCase()))
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    if (filtered.length === 0) {
      throw new Error('No repositories were found from GitHub API results.');
    }

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
        image: buildProjectImage(r),
        githubAvatar: r?.owner?.avatar_url || '',
      };
    });

    const outPath = path.resolve('src', 'data', 'projectsData.auto.js');
    const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};\n`;
    await fs.writeFile(outPath, fileContent, 'utf8');
    console.log(`Wrote ${projects.length} projects to ${outPath}`);
    console.log(`Source: GitHub pinned repositories only (${username}).`);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
})();
