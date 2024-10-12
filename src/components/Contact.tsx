import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { t } = useTranslation();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically send this data to a server
    alert('Message sent successfully!');
  };

  return (
    <section id="contact" className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-6"
      >
        {t('contact')}
      </motion.h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border rounded"
          />
          {errors.name && <span className="text-red-500">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })}
            className="w-full p-2 border rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            {...register('message', { required: 'Message is required' })}
            className="w-full p-2 border rounded"
            rows={4}
          ></textarea>
          {errors.message && <span className="text-red-500">{errors.message.message}</span>}
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;