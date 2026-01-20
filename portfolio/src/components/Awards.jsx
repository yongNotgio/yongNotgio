import { motion } from 'framer-motion';

const awards = [
  { title: 'National Champion - PSC X 2025', org: 'Philippine Statistics Authority', year: '2025' },
  { title: 'Regional Champion - AI.deas for Impact', org: 'DICT Region VI', year: '2025' },
  { title: 'Champion - WestNovation 2025', org: 'West Visayas State University', year: '2025' },
  { title: 'First Runner-Up - National AI Fest', org: 'National AI Initiative', year: '2024' },
];

function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            My <span>Achievements</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                {index < awards.length - 1 && (
                  <div className="w-0.5 flex-1 bg-darkBorder mt-2" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-xs text-textMuted uppercase tracking-wider">{award.year}</span>
                <h3 className="text-lg font-semibold text-accent mt-1">{award.title}</h3>
                <p className="text-textMuted text-sm mt-1">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
