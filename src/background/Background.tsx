import './Background.css'
import {image} from '../config/constant/image.ts'


//change directory case
interface BackgroundProps{
    id: number
}

function Background({ id } : BackgroundProps) {

    if (id === 800)
        return (<img src={image.clearSky} alt="" />);
    else {
        const i: number = firstDigit(id);
        switch (i) {
            case 2:
                return (<img src={image.thunderstrom} alt="" />);
                break;
            case 3:
                return (<img src={image.drizzle} alt="" />);
                break;
            case 5:
                return (<img src={image.rain} alt="" />);
                break;
            case 6:
                return (<img src={image.snow} alt="" />);
                break;
            case 7:
                return (<img src={image.haze} alt="" />);
                break;
            case 8:
                return (<img src={image.clouds} alt="" />);
                break;
            default:
                return (<img src={image.defaultImage} alt="" />);
        }
    }
}

export default Background

function firstDigit(n: number) {
    while (n > 10) {
        n /= 10;
    }
    return Math.floor(n);
}
