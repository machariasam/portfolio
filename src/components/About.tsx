import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('about')}
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center md:items-start bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <img
          src="https://www.internetsociety.org/wp-content/uploads/2024/07/Samuel-Macharia-headshot-150x150.jpg"
          alt="Samuel K. Macharia"
          className="w-48 h-48 rounded-full mb-4 md:mr-6 object-cover"
        />
        <div>
          <p className="text-lg mb-4">
            A results-driven systems engineer proficient in configuring, deploying, monitoring and
            administering critical networks and systems infrastructure. My expertise spans from
            mail servers and webservers to DNS servers and Firewalls, covering both public and
            private cloud stacks.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <p><User className="inline mr-2" /> samkinuthia017@gmail.com</p>
            <p><Briefcase className="inline mr-2" /> Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;