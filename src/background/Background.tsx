import './Background.css'
import thunderstrom from '../assets/thunderstrom.webp'
import clearSky from '../assets/clearSky.avif'
import defaultImage from '../assets/default.jpg'
import drizzle from '../assets/drizzle.avif'
import rain from '../assets/rain.avif'
import snow from '../assets/snow.avif'
import haze from '../assets/haze.avif'
import clouds from '../assets/clouds.avif'


//change directory case
interface BackgroundProps{
    id: number
}

function Background({ id } : BackgroundProps) {

    if (id === 800)
        return (<img src={clearSky} alt="" />);
    else {
        let i: number = firstDigit(id);
        switch (i) {
            case 2:
                return (<img src={thunderstrom} alt="" />);
                break;
            case 3:
                return (<img src={drizzle} alt="" />);
                break;
            case 5:
                return (<img src={rain} alt="" />);
                break;
            case 6:
                return (<img src={snow} alt="" />);
                break;
            case 7:
                return (<img src={haze} alt="" />);
                break;
            case 8:
                return (<img src={clouds} alt="" />);
                break;
            default:
                return (<img src={defaultImage} alt="" />);
        }
    }
}

export default Background

function firstDigit(n: number) {
    console.log(`firstDigit called ${n}`)
    while (n > 10) {
        n /= 10;
    }
    return Math.floor(n);
}
