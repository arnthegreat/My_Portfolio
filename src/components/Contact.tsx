import { motion } from "motion/react";
import { Mail, Github, Linkedin, Youtube } from "lucide-react";

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "aaronbonaobra@gmail.com",
      href: "mailto:aaron@bonaobra.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@arnthegreat",
      href: "https://github.com/arnthegreat",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Aaron Bonaobra",
      href: "https://www.linkedin.com/in/aaron-bonaobra-7a043428b/",
    },
    {
      icon: Youtube,
      label: "YouTube",
      value: "@gnaruvlr",
      href: "https://www.youtube.com/@gnaruvlr",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 flex flex-col justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl mb-8">
          Let's Work Together
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl">
          I'm always interested in hearing about new projects
          and opportunities. Whether you have a question or just
          want to say hi, feel free to reach out!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
      >
        {contactMethods.map(
          ({ icon: Icon, label, value, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target={
                href.startsWith("http") ? "_blank" : undefined
              }
              rel={
                href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.1,
              }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300 group"
            >
              <div className="p-3 rounded-lg bg-cyan-400/10 text-cyan-400 group-hover:bg-cyan-400/20 transition-colors">
                <Icon size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">
                  {label}
                </p>
                <p className="text-white">{value}</p>
              </div>
            </motion.a>
          ),
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-slate-400 pt-12 border-t border-slate-800"
      >
        <p>
          Built with React + Typescript and Vite + Tailwind CSS
          + Motion.
        </p>
      </motion.div>
    </section>
  );
}