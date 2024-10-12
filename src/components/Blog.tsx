import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BlogPostProps {
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt, link }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{date}</p>
    <p className="mb-4">{excerpt}</p>
    <a href={link} className="text-blue-500 hover:underline">Read more <ChevronRight className="inline" /></a>
  </div>
);

const Blog: React.FC = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: 'The Future of Cloud Computing: Trends to Watch',
      date: 'May 15, 2024',
      excerpt: 'Explore emerging trends in cloud computing, including edge computing, serverless architectures, and AI-driven cloud management.',
      link: 'https://www.knowledgehut.com/blog/cloud-computing/cloud-computing-future'
    },
    {
      title: 'Implementing Zero Trust Security in Modern Networks',
      date: 'April 2, 2024',
      excerpt: 'Learn about the principles of Zero Trust security and how to implement this model in your organization\'s network infrastructure.',
      link: 'https://www.paloaltonetworks.com/cyberpedia/what-is-a-zero-trust-architecture'
    },
  ];

  return (
    <section id="blog" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('blog')}
      </motion.h2>
      {blogPosts.map((post, index) => (
        <BlogPost key={index} {...post} />
      ))}
    </section>
  );
};

export default Blog;