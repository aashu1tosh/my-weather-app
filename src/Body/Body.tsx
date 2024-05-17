import { useContext, useEffect, useState } from 'react'
import './Body.css'
import Background from '../background/Background';
import { LanguageContext } from '@context/Language';
import { weatherLabel } from '@data/language'

import { englishNumToNepaliNum } from '@data/number';

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

enum temperatureUnit {
    C = "°C",
    F = "°F",
    K = "K"
}

const Body = () => {

    const [cityName, setCityName] = useState<string>('Kathmandu');
    const [temp, setTemp] = useState<number>(0);
    const [description, setDescription] = useState<string>('404');
    const [weatherId, setWeatherID] = useState<number>(0);
    const [divBackGroundColor, setDivBackGroundColor] = useState<string | null>();
    const [loading, setLoading] = useState<true | false | null>();
    const [fiveDays, setFiveDays] = useState<WeatherDays[]>([]);
    const [tempUnit, setTempUnit] = useState<temperatureUnit>(temperatureUnit.K);

    const { language, } = useContext(LanguageContext);

    const handleSelectChange = (event: any) => {
        console.log("Event triggered")
        const unit = event.target.value;
        // Convert to celcius
        if ((unit as temperatureUnit) === temperatureUnit.C) {
            if (tempUnit === temperatureUnit.K) {
                console.log("change to celcius from kelvin");
                setTemp(prevTemp => Number((prevTemp - 273).toFixed(2)));
                setTempUnit(temperatureUnit.C)
            }
            if (tempUnit === temperatureUnit.F) {
                console.log("change to celcius from farenheit");
                setTemp(prevTemp => Number(((prevTemp - 32) * 5 / 9).toFixed(2)))
                setTempUnit(temperatureUnit.C)
            }
        }
        // Convert to Farenheit
        if ((unit as temperatureUnit) === temperatureUnit.F) {
            if (tempUnit === temperatureUnit.K) {
                console.log("change to fareheint from kelvin");
                setTemp(prevTemp => Number(((prevTemp - 273.15) * 9 / 5 + 32).toFixed(2)));
                setTempUnit(temperatureUnit.F)
                //(0K − 273.15) × 9/5 + 32 
            }
            if (tempUnit === temperatureUnit.C) {
                console.log("change to farenheit from celcius");
                setTemp(prevTemp => Number(((prevTemp * 9 / 5) + 32).toFixed(2)));
                setTempUnit(temperatureUnit.F);
                // (0°C × 9/5) + 32
            }
        }
        // Convert to Kelvin
        if ((unit as temperatureUnit) === temperatureUnit.K) {
            if (tempUnit === temperatureUnit.C) {
                console.log("change to kelvin from celcius");
                setTemp(prevTemp => Number((prevTemp + 273.15).toFixed(2)));
                setTempUnit(temperatureUnit.K);
                // 0°C + 273.15

            }
            if (tempUnit === temperatureUnit.F) {
                console.log("change to kelvin from farenheit");
                setTemp(prevTemp => Number(((prevTemp - 32) * 5 / 9 + 273.15).toFixed(2)));
                setTempUnit(temperatureUnit.K);
                // (32°F − 32) × 5/9 + 273.15
            }
        }
    }

    useEffect(() => {
        setLoading(true);
        fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDivBackGroundColor(null);
                setTemp(data.list[0].main.temp);
                const selectValue = document.getElementById("temperature");
                console.log(selectValue)
                selectValue.value = 'K'
                setTempUnit(temperatureUnit.K)
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
                <select name="tempUnit" id="temperature" onChange={handleSelectChange}>
                    <option value="K">Kelvin</option>
                    <option value="°C">Celcius</option>
                    <option value="°F">Farenheit</option>
                </select>
                {!loading ? <>
                    <div><p id='temp'>{temp ? (
                        `${englishNumToNepaliNum(String(temp), language)} ${tempUnit}`
                    ) : 'Error!'}</p></div>
                    <div><p id='desc'>{weatherLabel[description] ? weatherLabel[description][language] : description}</p></div>
                </>
                    : "Loading"}

            </div>

            {/* <div className="future-display">
                {!loading ? (
                    fiveDays.map((day, index) => (
                        <div className='future-time' key={index}>
                            <div>
                                <p>{
                                    `${englishNumToNepaliNum(day.dt_txt.split(' ')[1], language)}`
                                }</p>

                                <p>{
                                    `${englishNumToNepaliNum(String(temp), language)}${tempUnit}`
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
            </div> */}


            <div className="future-display">
                {
                    fiveDays.map((day, index) => (
                        <div className='future-time' key={index}>
                                <div>
                                    <p>{
                                        `${englishNumToNepaliNum(day.dt_txt.split(' ')[1], language)}`
                                    }</p>

                                    <p>{
                                        `${englishNumToNepaliNum(String(temp), language)}${tempUnit}`
                                    }</p>
                                    <p>{
                                        weatherLabel[day.weather[0].description.replace(' ', '_')] ?
                                            weatherLabel[day.weather[0].description.replace(' ', '_')][language] :
                                            day.weather[0].description.replace(' ', '_')
                                    }</p>
                                </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Body