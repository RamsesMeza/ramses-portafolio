import React from 'react';
import { useLanguage } from '../contexts/LanguageProvider';

const ToggleLanguage: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="bg-[#106399] hover:bg-[#106399] hover:opacity-50 text-white px-3 py-2 rounded-md transition-colors cursor-pointer text-sm font-semibold"
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};

export default ToggleLanguage;