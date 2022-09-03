import clear from '../images/Clear.png';

export function getWeatherIcon(code) {
    switch (code) {
        case 800: // clear
            return clear;
            break;
        case 602:  // heavy snow
            return "../images/Hail.png";
            break;
        case 601: // snow
        case 600:
        case 623:
            return "../images/Snow.png";
            break;
        case 801:
        case 802:
            return "../images/LightCloud.png";
            break;
        case 803:
        case 804:
            return "../images/HeavyCloud.png";
            break;
        case 500:
        case 501:
        case 300:
        case 301:
        case 302:
            return "../images/LightRain.png";
            break;
        case 502:
        case 522:
        case 511:
        case 621:
        case 622:
            return "../images/HeavyRain.png";
            break;
        case 520:
        case 521:
            return "../images/Shower.png";
            break;
        case 610:
        case 611:
        case 612:
            return "../images/Sleet.png";
            break;
        case 200:
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
        case 233:
            return "../images/Thunderstorm.png";
            break;
        default:
            console.log(`${code} can not be found`);
            return "../images/Clear.png";
    }
}