import { LanguageEnum } from '@type/global.types';
import React, { createContext, useState } from 'react';

interface LanguageContextType {
  language: LanguageEnum;
  changeLanguage: (newLanguage: LanguageEnum) => void;
}

interface ReactChildren {
  children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextType>({
  language: LanguageEnum.en,
  changeLanguage: () => { }

});




export const LanguageProvider: React.FC<ReactChildren> = ({ children }) => {
  // const [language, setLanguage] = useState<string>('en');
  const [language, setLanguage] = useState<LanguageEnum>((localStorage.getItem('preferred_language') as LanguageEnum) || LanguageEnum.en);

  const changeLanguage = (newLanguage: LanguageEnum) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred_language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
