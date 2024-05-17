import { useContext } from 'react'
import './Footer.css'
import { weatherLabel } from '../data/language'
import { LanguageContext } from '../context/Language'

const Footer = () => {
  const { language } = useContext(LanguageContext);
  return (
    <div className='footer'>
        {weatherLabel.footer[language]}
    </div>
  )
}

export default Footer