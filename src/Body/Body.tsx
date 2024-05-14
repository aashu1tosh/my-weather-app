import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Background from '../background/Background';
import { LanguageContext } from '../context/Language';
import { weatherLabel } from '../data/language'

import { englishNumToNepaliNum } from '../data/number';

interface WeatherDays {
    list: {
        main: {
            temp: number;
        };
        weather: {
            id: number;
            main: string;
            description: string;
        }[];
    }[];

}

const Body = () => {

    const [cityName, setCityName] = useState<string>('Kathmandu');
    const [temp, setTemp] = useState<number | null>();
    const [description, setDescription] = useState<string>('404');
    const [weatherId, setWeatherID] = useState<number>(0);
    const [divBackGroundColor, setDivBackGroundColor] = useState<string | null>();
    const [loading, setLoading] = useState<true | false | null>();
    const [fiveDays, setFiveDays] = useState<WeatherDays[]>([]);

    const { language, } = useContext(LanguageContext);

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDivBackGroundColor(null);
                setTemp(data.list[0].main.temp);
                setWeatherID(data.list[0].weather[0].id);
                setDescription(data.list[0].weather[0].description.replace(' ', '_'));
                setLoading(false);
                setFiveDays(data.list.slice(1, 6));
            })
            .catch(() => {
                setCityName('Something Went Wrong');
                setTemp(0);
                setDescription('');
                setDivBackGroundColor('red');
                setLoading(false);

            })
        // console.log(cityName)
    }, [cityName])

    return (
        <div className='main-body' style={{ backgroundColor: divBackGroundColor ?? "" }}>
            <Background id={weatherId} />
            {/* <div className="main-body-heading">

            </div> */}
            <div className="city-display">
                {/* <p id='city-name-display'>{!loading ? cityName : "Loading"}</p> */}
                <p id='city-name-display'>
                    {!loading ? (weatherLabel[cityName] ? weatherLabel[cityName][language] : cityName) : "Loading"}
                </p>
            </div>

            <div className="hero">
                <p id='date realdate'>{weatherLabel.date[language]}</p>
            </div>
            <input name="city"
                placeholder='City Name Please'
                onKeyDown={(e: any) => {
                    if (e.key === "Enter") {
                        const city: string = e.target.value;
                        setCityName(city.charAt(0).toUpperCase() + city.slice(1));
                        e.target.value = '';
                    }
                }} />
            <div className="city-name">
                <button onClick={() => setCityName('Kathmandu')}> {weatherLabel.Kathmandu[language]} </button>
                <button onClick={() => setCityName('Pokhara')}> {weatherLabel.Pokhara[language]} </button>
                <button onClick={() => setCityName('Dhangadhi')}> {weatherLabel.Dhangadhi[language]} </button>
                <button onClick={() => setCityName('Surkhet')}> {weatherLabel.Surkhet[language]} </button>
            </div>

            <div className="result-display">
                {!loading ? <>
                    {/* <div><p id='temp'>{temp ? `${temp}K` : 'Error!'}</p></div> */}
                    <div><p id='temp'>{temp ? (
                        language === 'en' ? `${temp}K` : `${englishNumToNepaliNum(String(temp))}K`
                    ) : 'Error!'}</p></div>
                    <div><p id='desc'>{weatherLabel[description] ? weatherLabel[description][language] : description}</p></div>
                </>
                    : "Loading"}

            </div>

            <div className="future-display">
                {!loading ? (
                    fiveDays.map((day, index) => (
                        <div className='future-time'>
                            <div key={index}>

                                {/* <p>{day.dt_txt.split(' ')[1]}</p> */}
                                <p>{
                                    language === 'en' ? `${day.dt_txt.split(' ')[1]}` : `${englishNumToNepaliNum(day.dt_txt.split(' ')[1])}`
                                }</p>

                                <p>{
                                    language === 'en' ? `${day.main.temp}K` : `${englishNumToNepaliNum(String(temp))}K`
                                }</p>
                                <p>{
                                    weatherLabel[day.weather[0].description.replace(' ', '_')] ?
                                        weatherLabel[day.weather[0].description.replace(' ', '_')][language] :
                                        day.weather[0].description.replace(' ', '_')
                                }</p>
                            </div>
                        </div>
                    ))
                ) : "Loading"}
            </div>
        </div>
    )
}

export default Body