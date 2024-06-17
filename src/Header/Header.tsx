import { NP, US } from 'country-flag-icons/react/3x2';
import { useContext, useEffect, useState } from 'react';
import { IoSunny } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import './Header.css';

import { LanguageEnum } from '@type/global.types';
import { LanguageContext } from '../context/Language';
import { weatherLabel } from '../data/language';


function Header() {

    const [darkTheme, setDarkTheme] = useState<boolean>(() => {
        const darkThemePreference = localStorage.getItem('darkTheme');
        if (darkThemePreference === 'dark') {
            return true;
        } else if (darkThemePreference === 'light') {
            return false;
        } else {
            const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
            return prefersDark;
        }
    });

    // const [lang, setLang] = useState<string>('en');
    const { language, changeLanguage } = useContext(LanguageContext);

    const languageChange = () => {

        if (language === LanguageEnum.en) {
            changeLanguage(LanguageEnum.ne);
            console.log("Language changed to nepali");
        } else {
            changeLanguage(LanguageEnum.en)
            console.log("Language changed to english");
        }
    }

    useEffect(() => {
        const root = document.documentElement;
        if (darkTheme) {
            root.style.setProperty('--primary-color', '#242424'); // Default color scheme
            root.style.setProperty('--secondary-color', 'rgba(255, 255, 255, 0.87)');
            localStorage.setItem('darkTheme', 'dark');
        } else {
            root.style.setProperty('--primary-color', 'rgba(255, 255, 255, 0.87)');
            root.style.setProperty('--secondary-color', '#242424');
            localStorage.setItem('darkTheme', 'light')
        }
    }, [darkTheme]);

    return (
        <div className='heading'>
            <h1>
                <span style={{ float: 'left' }} onClick={
                    languageChange
                }>
                    {language === 'en' ? <NP className="flag-icon flag-icon-us" /> : <US className="flag-icon flag-icon-us" />}
                </span>
                {weatherLabel.title[language]}
                <span style={{ float: 'right' }} onClick={() => { setDarkTheme((prev) => !prev) }}>
                    {darkTheme ? <span><IoSunny size={25} /></span> : <MdDarkMode size={25} />}
                </span>
            </h1>





        </div>
    )
}

export default Header
