import { useEffect, useState } from 'react'
import './Body.css'
import Background from '../background/Background';
import bs from 'bikram-sambat';

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

    const [cityName, setCityName] = useState<string | null>('Kathmandu');
    const [temp, setTemp] = useState<number | null>();
    const [description, setDescription] = useState<string | null>();
    const [weatherId, setWeatherID] = useState<number>(0);
    const [divBackGroundColor, setDivBackGroundColor] = useState<string | null>();
    const [loading, setLoading] = useState<true | false | null>();
    const [fiveDays, setFiveDays] = useState<WeatherDays[]>([]);

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
                setDescription(data.list[0].weather[0].description.toUpperCase());
                setLoading(false);
                setFiveDays(data.list.slice(1, 6));
                // setFiveDays(data.list);
                console.log(bs.toBik_euro('2024-05-12'));
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
    const date: Date = new Date


    return (
        <div className='main-body' style={{ backgroundColor: divBackGroundColor ?? "" }}>
            <Background id={weatherId} />
            {/* <div className="main-body-heading">

            </div> */}
            <div className="city-display">
                <p id='city-name-display'>{!loading ? cityName : "Loading"}</p>
            </div>
            <div className="hero">
                <p id='date realdate'>{bs.toBik_euro(date.toJSON().split('T')[0])}</p>
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
                <button onClick={() => setCityName('Kathmandu')}>Kathmandu</button>
                <button onClick={() => setCityName('Pokhara')}>Pokhara</button>
                <button onClick={() => setCityName('Dhangadhi')}>Dhangadhi</button>
                <button onClick={() => setCityName('Surkhet')}>Surkhet</button>
            </div>

            <div className="result-display">
                {!loading ? <>
                    <div><p id='temp'>{temp ? `${temp}K` : 'Error!'}</p></div>
                    <div><p id='desc'>{description ? description : 'Error!'}</p></div>
                    </>
                    : "Loading"}

            </div>

            <div className="future-display">
                {!loading ? (
                    fiveDays.map((day, index) => (
                        <div className='future-time'>
                            <div key={index}>
                                {/* Render content for each day */}
                                {/* <p>{day.dt_txt.slice(' ')[1]}</p> */}
                                <p>{day.dt_txt.split(' ')[1]}</p>
                                <p>{day.main.temp}K</p>
                                <p>{day.weather[0].description.toUpperCase()}</p>
                            </div>
                        </div>
                    ))
                ) : "Loading"}
            </div>
        </div>
    )
}

export default Body