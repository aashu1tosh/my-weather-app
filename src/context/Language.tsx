import React, { createContext, useState } from 'react';

interface LanguageContextType {
  language: string;
  changeLanguage: (newLanguage: string) => void;
}

interface ReactChildren {
    children: React.ReactNode
}

export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    changeLanguage: () => { }

});



// Create a provider component
export const LanguageProvider: React.FC<ReactChildren> = ({ children }) => {
  // const [language, setLanguage] = useState<string>('en');
  const [language, setLanguage] = useState<string>(() => {
    const preferredLanguage = localStorage.getItem('preferred_language');
    if (preferredLanguage !== null) {
      return preferredLanguage;
    } else {
      return 'en';
    }
  });
  
  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    localStorage.setItem('preferred_language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
