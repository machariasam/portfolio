import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, technologies, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
    onClick={onClick}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{description}</p>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

interface ProjectsProps {
  setSelectedProject: (project: any) => void;
  setModalOpen: (isOpen: boolean) => void;
}

const Projects: React.FC<ProjectsProps> = ({ setSelectedProject, setModalOpen }) => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'Cloud Migration Project',
      description: 'Led the migration of on-premises infrastructure to AWS, resulting in 30% cost savings and improved scalability.',
      technologies: ['AWS', 'Docker', 'Terraform'],
      details: 'This project involved migrating a complex on-premises infrastructure to AWS. Key challenges included ensuring data integrity during migration, minimizing downtime, and optimizing cloud resources for cost-effectiveness. The solution implemented Docker containers for application portability and Terraform for infrastructure as code, enabling easy replication and management of the cloud environment.'
    },
    {
      title: 'Security Automation Framework',
      description: 'Developed a custom security automation framework to streamline vulnerability assessments and patch management.',
      technologies: ['Python', 'Ansible', 'Jenkins'],
      details: 'The Security Automation Framework was designed to address the growing complexity of managing security across multiple systems. It integrates vulnerability scanners, automates patch deployment, and provides comprehensive reporting. The use of Ansible for configuration management and Jenkins for CI/CD pipelines ensures consistent and rapid security updates across the entire infrastructure.'
    },
  ];

  return (
    <section id="projects" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('projects')}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            onClick={() => {
              setSelectedProject(project);
              setModalOpen(true);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;