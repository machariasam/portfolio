import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Briefcase, GraduationCap, Code, Server, Shield, User, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-scroll';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Modal from './components/Modal';
import './i18n';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="container mx-auto px-6 py-8">
        <About />
        <Skills />
        <Experience />
        <Projects setSelectedProject={setSelectedProject} setModalOpen={setModalOpen} />
        <Blog />
        <Contact />
      </main>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProject && (
          <div>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <p className="mb-4">{selectedProject.details}</p>
            <div className="flex flex-wrap gap-2">
              {selectedProject.technologies.map((tech: string, index: number) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default App;