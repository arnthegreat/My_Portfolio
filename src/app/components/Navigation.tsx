import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Twitter, FileText } from 'lucide-react';

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-col gap-6">
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`text-left transition-all duration-300 relative group ${
              activeSection === item.id
                ? 'text-white'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`h-px transition-all duration-300 ${
                  activeSection === item.id
                    ? 'w-16 bg-white'
                    : 'w-8 bg-slate-400 group-hover:w-16 group-hover:bg-white'
                }`}
              />
              <span className="text-xs tracking-widest">{item.label}</span>
            </div>
          </button>
        ))}
        
        {/* Resume Link */}
        <a
          href="https://raw.githubusercontent.com/arnthegreat/My_Resume/abd5e1abf094f912d6a6e54077a678ef2b6232ca/Bonaobra_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-left transition-all duration-300 relative group text-slate-400 hover:text-white"
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-slate-400 transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
            <span className="text-xs tracking-widest flex items-center gap-2">
              RESUME
              <FileText size={14} />
            </span>
          </div>
        </a>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden fixed top-6 right-6 z-50 p-2 rounded-lg bg-slate-800/50 backdrop-blur-sm text-white"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md flex items-center justify-center">
          <nav className="flex flex-col gap-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-center text-xl tracking-widest transition-colors ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Resume Link Mobile */}
            <a
              href="https://raw.githubusercontent.com/arnthegreat/My_Resume/abd5e1abf094f912d6a6e54077a678ef2b6232ca/Bonaobra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-xl tracking-widest text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2"
            >
              RESUME
              <FileText size={20} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}