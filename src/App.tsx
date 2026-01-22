import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Github, Linkedin, Mail, Youtube } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/arnthegreat",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aaron-bonaobra-7a043428b/",
      label: "LinkedIn",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@gnaruvlr",
      label: "YouTube",
    },
    {
      icon: Mail,
      href: "aaronbonaobra@gmail.com",
      label: "Email",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row md:gap-48">
          {/* Left Sidebar - Fixed on Desktop */}
          <aside className="md:sticky md:top-0 md:h-screen md:w-2/5 lg:w-1/3 py-12 md:py-24 flex flex-col justify-between md:-ml-8">
            <div>
              <div className="mb-12 md:mb-16">
                <h1 className="text-4xl md:text-5xl mb-4">
                  Aaron Bonaobra
                </h1>
                <p className="text-xl text-slate-400">
                  Fresh Graduate IT Student
                </p>
                <p className="text-slate-400 mt-4">
                  A hard working and aspiring software/web
                  developer
                </p>
              </div>
              <Navigation />
            </div>

            {/* Social Links at Bottom */}
            <div className="hidden md:flex gap-5">
              {socialLinks.map(
                ({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </a>
                ),
              )}
            </div>
          </aside>

          {/* Right Content - Scrollable */}
          <main className="md:w-3/5 lg:w-2/3 py-12 md:py-24">
            <Hero />
            <Experience />
            <Projects />
            <Contact />
          </main>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      {/* Cursor Glow Effect */}
      <div
        className="fixed pointer-events-none z-50 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          background:
            "radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 40%, transparent 70%)",
        }}
      />
    </div>
  );
}