import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-lg sticky top-0 z-40">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold"
          >
            Samuel K. Macharia
          </motion.h1>
          <div className="flex items-center space-x-4">
            <select onChange={(e) => changeLanguage(e.target.value)} className="bg-gray-200 dark:bg-gray-700 rounded">
              <option value="en">English</option>
              <option value="fr">Français</option>
            </select>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex space-x-4 justify-center">
            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('about')}</Link></li>
            <li><Link to="skills" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('skills')}</Link></li>
            <li><Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('experience')}</Link></li>
            <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('projects')}</Link></li>
            <li><Link to="blog" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('blog')}</Link></li>
            <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-500">{t('contact')}</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;