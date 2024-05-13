import { useEffect, useState } from 'react';
import './Header.css'
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";

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

    useEffect(() => {
        const root = document.documentElement;
        if (darkTheme) {
            root.style.setProperty('--primary-color', '#242424'); // Default color scheme
            root.style.setProperty('--secondary-color', 'rgba(255, 255, 255, 0.87)');
            localStorage.setItem('darkTheme', 'dark');
        } else {
            root.style.setProperty('--primary-color', 'rgba(255, 255, 255, 0.87)'); // New color scheme
            root.style.setProperty('--secondary-color', '#242424'); // New color scheme
            localStorage.setItem('darkTheme', 'light')
        }
    }, [darkTheme]);

    return (
        <div className='heading'>
            <h1>Weather Application <span style={{float: 'right'}} onClick={() => { setDarkTheme((prev) => !prev) }}>
                {darkTheme ? <span><IoSunny /></span> : <MdDarkMode />}
            </span></h1>


        </div>
    )
}

export default Header
