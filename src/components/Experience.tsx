import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

interface ExperienceItemProps {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
  index: number;
}

function ExperienceItem({
  period,
  title,
  company,
  companyUrl,
  description,
  technologies,
  index,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative p-6 rounded-lg hover:bg-slate-800/50 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-32 mb-4 md:mb-0">
          <p className="text-sm text-slate-400 uppercase tracking-wider">
            {period}
          </p>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors">
              {title} · {company}
            </h3>
            {companyUrl && (
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          <p className="text-slate-300 mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const experiences = [
    {
      period: "2022 — 2023",
      title: "Professional Valorant Player",
      company: "Talon Esports",
      companyUrl: "https://www.vlr.gg/player/7391/gnaru",
      description:
        "Aaron “gnaru” Bonaobra is a Filipino professional Valorant player known for competing in the competitive Philippine and Southeast Asian scene. He began his competitive journey in early 2021, representing teams such as Bestial Esports, 717 Monster Esports, Talon Esports, and ZOL Esports, showcasing versatility across multiple rosters. With consistent participation in VCT Challengers events, your most notable result came with ZOL Esports, securing a 3rd-place finish at the VCT 2023 Philippines Stage 2 Challengers. Over your career, you’ve competed in numerous tournaments, earning prize winnings and establishing yourself as a dedicated presence in the pro scene.",
      technologies: [
        "Collaboration",
        "Strong Work Ethic",
        "Open Mindedness",
        "Communication",
      ],
    },
  ];

  return (
    <section id="experience" className="mb-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl mb-12 sticky top-0 bg-slate-900/80 backdrop-blur-sm py-4 z-10"
      >
        {" "}
      </motion.h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceItem key={index} {...exp} index={index} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-12"
      >
        <a
          href="https://drive.google.com/file/d/1wSPNeRyyIpHWFXwPZsWCDOsvgFBzABDx/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group"
        >
          View Full Resume
          <ExternalLink
            size={16}
            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
          />
        </a>
      </motion.div>
    </section>
  );
}