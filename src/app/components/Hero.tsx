import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="about" className="mb-8">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-4 text-slate-300"
        >
          <p>
            A Bachelor of Science in Information Technology
            graduating student, aspiring Frontend Developer with
            a strong sense of responsibility, open-mindedness,
            and excellent collaboration skills. Experienced in
            working under pressure and in team-oriented
            environments through my background as a former
            International Professional Esports Player, where
            discipline, strategic thinking, and communication
            were essential. Passionate and continuously learning
            modern web technologies, and contributing value to
            an IT team. A swimming and fitness enthusiast who
            maintains focus, consistency, and a strong work
            ethic.
          </p>
          <p>
            I build accessible, pixel-perfect digital
            experiences for the web. With a passion for crafting
            elegant solutions, I specialize in creating
            applications that not only look great but are
            meticulously built for performance and usability.
          </p>
          <p>
            Currently, I'm focused on building innovative web
            applications that blend thoughtful design with
            robust engineering. My expertise spans the full
            stack, with a particular emphasis on modern
            JavaScript frameworks and responsive design
            patterns.
          </p>
          <p>
            When I'm not coding, you can find me exploring new
            technologies, contributing to open-source projects,
            or sharing knowledge with the developer community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}