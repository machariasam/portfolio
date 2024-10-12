import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, period, responsibilities }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6"
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{company} | {period}</p>
    <ul className="list-disc list-inside">
      {responsibilities.map((responsibility, index) => (
        <li key={index}>{responsibility}</li>
      ))}
    </ul>
  </motion.div>
);

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences = [
    {
      title: 'Systems Administrator',
      company: 'Kenya Education Network Trust (KENET)',
      period: 'January 2022 - Present',
      responsibilities: [
        'Deployed and managed educational roaming Wi-Fi (eduroam) across institutions',
        'Implemented eduroam integrations with various databases and directories',
        'Managed internal Microsoft ERP cluster and assisted with cloud infrastructure',
      ],
    },
    {
      title: 'SAP Administrator',
      company: 'Optica Ltd',
      period: 'August 2021 - December 2021',
      responsibilities: [
        'Administered SAP HANA, managing users and permissions',
        'Managed system performance and upgrades',
        'Provided technical support to SAP HANA users',
      ],
    },
  ];

  return (
    <section id="experience" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('experience')}
      </motion.h2>
      {experiences.map((experience, index) => (
        <ExperienceCard key={index} {...experience} />
      ))}
    </section>
  );
};

export default Experience;