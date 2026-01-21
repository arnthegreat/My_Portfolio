import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  liveUrl,
  githubUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-lg overflow-hidden bg-slate-800/50 hover:bg-slate-800/80 transition-all duration-300"
    >
      <div className="flex flex-col md:flex-row">
        {imageUrl && (
          <div className="md:w-1/3 overflow-hidden">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div
          className={`p-6 ${imageUrl ? "md:w-2/3" : "w-full"} flex flex-col`}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl text-white group-hover:text-cyan-400 transition-colors">
              {title}
            </h3>
            <div className="flex gap-3">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={20} />
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          <p className="text-slate-300 mb-4 flex-1">
            {description}
          </p>
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

export function Projects() {
  const projects = [
    {
      title:
        "eKahera: A Web-Based Store Management Platform with Self Checkout for MSMEs in Albay",
      description:
        "Built a POS and inventory management system designed to streamline the sales and inventory processes of Micro, Small, and Medium Enterprises (MSMEs) in Albay.",
      technologies: [
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Supabase(BaaS)",
      ],
      imageUrl:
        "https://lh3.googleusercontent.com/d/1v6ZfZXweUcuGNpktXQUrx3berWtiNWsc",
      liveUrl: "https://www.ekahera.online/",
      githubUrl: "https://github.com/arnthegreat/eKahera",
    },
    {
      title: "DormMs",
      description:
        "DormMs is a mobile application designed to help dormitory landlords efficiently manage their properties. It allows landlords to review and track reports, monitor tenant payments, manage tenant information, and oversee maintenance requests in one centralized platform.",
      technologies: [
        "JavaScript",
        "ReactNative",
        "Tailwind CSS",
      ],
      imageUrl: "",
      liveUrl: "",
      githubUrl:
        "https://github.com/arnthegreat/Dorm-ManagementSystem",
    },
    {
      title: "E-Merch",
      description:
        "It is a mobile application designed for college-based organizations, particularly the College of Science, to market and sell their merchandise products. The application functions similarly to an e-commerce platform, allowing organizations to showcase their products, manage listings, and reach students and supporters more effectively.",
      technologies: [
        "ReactNative",
        "JavaScript",
        "Tailwind CSS",
      ],
      imageUrl: "",
      liveUrl: "",
      githubUrl: "https://github.com/arnthegreat/Merch-App",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl mb-12"
      >
        Featured Projects
      </motion.h2>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            {...project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}