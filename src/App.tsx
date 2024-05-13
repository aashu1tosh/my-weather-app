import { useState } from 'react'
import Header from './Header/Header'
import './App.css'
import Body from './Body/Body'
import Footer from './Footer/Footer'
import { LanguageProvider } from './context/Language.tsx';

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Body />
      </LanguageProvider>
      <Footer />
    </>
  );
};

export default App
