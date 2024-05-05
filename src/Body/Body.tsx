import { useEffect, useState } from 'react'
import './Body.css'
import Background from '../background/Background';

const Body = () => {

    const [cityName, setCityName] = useState<String | null>('Kathmandu');
    const [temp, setTemp] = useState<Number | null>();
    const [description, setDescription] = useState<String | null>();
    const [weatherId, setWeatherID] = useState<Number | null>();
    const [divBackGroundColor, setDivBackGroundColor] = useState<String | null>();
    const [loading, setLoading] = useState<true | false | null>();

    useEffect(() => {
        // console.log("Only fetch ")
        // console.log(
        //     fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)

        // )
        // console.log("After using then once")
        // console.log(
        //     fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)
        //     .then((res) => {
        //         return res.json();
        //       })
        // )

        // console.log("After using then twice")
        // console.log(
        //     fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)
        //         .then((res) => {
        //             return res.json();
        //         })
        //         .then((data) => {
        //             setDivBackGroundColor(null);
        //             console.log('printing data');
        //             setTemp(data.main.temp);
        //             setWeatherID(data.weather[0].id);
        //             setDescription(data.weather[0].description.toUpperCase());
        //         })
        //         .catch(() => {
        //             setCityName('Something Went Wrong');
        //             setTemp(0);
        //             setDescription('');
        //             setDivBackGroundColor('red');
        //         })
        // )

        setLoading(true);
        fetch(`${import.meta.env.VITE_APP_WEATHER_URL}${cityName}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setDivBackGroundColor(null);
                console.log('printing data');
                setTemp(data.main.temp);
                setWeatherID(data.weather[0].id);
                setDescription(data.weather[0].description.toUpperCase());
                setLoading(false);
            })
            .catch(() => {
                setCityName('Something Went Wrong');
                setTemp(0);
                setDescription('');
                setDivBackGroundColor('red');
                setLoading(false);
            })
        console.log(cityName)
    }, [cityName])


    return (
        <div className='main-body' style={{ backgroundColor: divBackGroundColor }}>
            <Background id={weatherId} />
            <div className="city-display">
                {!loading ? cityName : "Loading"}
            </div>
            <input name="city"
                placeholder='City Name Please'
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        let city = e.target.value;
                        setCityName(city.charAt(0).toUpperCase() + city.slice(1));
                        e.target.value = '';
                    }
                }} />
            <div className="city-name">
                <button onClick={() => setCityName('Kathmandu')}>Kathmandu</button>
                <button onClick={() => setCityName('Pokhara')}>Pokhara</button>
                <button onClick={() => setCityName('Dhangadhi')}>Dhangadhi</button>
                <button onClick={() => setCityName('Surkhet')}>Surkhet</button>
            </div>

            <div className="result-display">
                {!loading ? <>
                    <p>{temp ? `${temp}K` : 'Error!'}</p>
                    <p>{description ? description : 'Error!'}</p></>
                    : "Loading"}

            </div>
        </div>
    )
}

export default Body