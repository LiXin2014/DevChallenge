import clear from '../images/Clear.png';

export function getWeatherIcon(code) {
    switch (code) {
        case 800: // clear
            return clear;
        case 602:  // heavy snow
            return "../images/Hail.png";
        case 601: // snow
        case 600:
        case 623:
            return "../images/Snow.png";
        case 801:
        case 802:
            return "../images/LightCloud.png";
        case 803:
        case 804:
            return "../images/HeavyCloud.png";
        case 500:
        case 501:
        case 300:
        case 301:
        case 302:
            return "../images/LightRain.png";
        case 502:
        case 522:
        case 511:
        case 621:
        case 622:
            return "../images/HeavyRain.png";
        case 520:
        case 521:
            return "../images/Shower.png";
        case 610:
        case 611:
        case 612:
            return "../images/Sleet.png";
        case 200:
        case 201:
        case 202:
        case 230:
        case 231:
        case 232:
        case 233:
            return "../images/Thunderstorm.png";
        default:
            console.log(`${code} can not be found`);
            return "../images/Clear.png";
    }
}