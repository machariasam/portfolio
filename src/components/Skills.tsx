import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SkillCardProps {
  icon: React.ElementType;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, skills }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <Icon className="w-8 h-8 text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <ul className="list-disc list-inside">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </motion.div>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();

  const skills = [
    { icon: Code, title: 'Programming', skills: ['Python', 'Bash', 'PowerShell'] },
    { icon: Server, title: 'Infrastructure', skills: ['AWS', 'Azure', 'Google Cloud'] },
    { icon: Shield, title: 'Security', skills: ['Firewall Management', 'SSL/TLS', 'System Hardening'] },
  ];

  return (
    <section id="skills" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('skills')}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} {...skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;