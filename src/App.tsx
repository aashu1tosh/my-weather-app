import Header from './Header/Header'
import './App.css'
import Body from './Body/Body'
import Footer from './Footer/Footer'

import { LanguageProvider } from './context/Language'


function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Body />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App
