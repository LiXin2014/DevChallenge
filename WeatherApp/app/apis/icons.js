import clear from '../images/Clear.png';
import heavySnow from '../images/Hail.png';
import snow from '../images/Snow.png';
import lightCloud from '../images/LightCloud.png';
import heavyCloud from '../images/HeavyCloud.png';
import lightRain from '../images/LightRain.png';
import heavyRain from '../images/HeavyRain.png';
import shower from '../images/Shower.png';
import sleet from '../images/Sleet.png';
import thunderstorm from '../images/Thunderstorm.png';

export function getWeatherIcon(code) {
    switch (code) {
        case 800: // clear
            return clear;
        case 602:  // heavy snow
            return heavySnow;
        case 601: // snow
        case 600:
        case 623:
            return snow;
        case 801:
        case 802:
            return lightCloud;
        case 803:
        case 804:
            return heavyCloud;
        case 500:
        case 501:
        case 300:
        case 301:
        case 302:
            return lightRain;
        case 502:
        case 522:
        case 511:
        case 621:
        case 622:
            return heavyRain;
        case 520:
        case 521:
            return shower;
        case 610:
        case 611:
        case 612:
            return sleet;
        case 200:
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
        case 233:
            return thunderstorm;
        default:
            console.log(`${code} can not be found`);
            return clear;
    }
}