import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "about": "About Me",
          "skills": "Skills",
          "experience": "Work Experience",
          "education": "Education & Certifications",
          "projects": "Projects",
          "blog": "Blog",
          "contact": "Contact Me",
        }
      },
      fr: {
        translation: {
          "about": "À propos de moi",
          "skills": "Compétences",
          "experience": "Expérience professionnelle",
          "education": "Éducation et certifications",
          "projects": "Projets",
          "blog": "Blog",
          "contact": "Contactez-moi",
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;