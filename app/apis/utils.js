// Please do not use my API key from weatherbit
const apiKey = "0fa36275dc8b47a887a6626c23e707ab";
const baseURL = "https://api.weatherbit.io/v2.0/current";


function getLocation() {
    let latitude, longitude;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        });
    } else {
        throw new Error("Geolocation is not supported by this browser");
    }

    return { lat: latitude, long: longitude };
}

export function getCurrentWeather(lat = 0, long = 0) {
    if (lat === 0 && long === 0) {
        const { lat, long } = getLocation();
    }
    const url = `${baseURL}?lat=${lat}&lon=${long}&key=${apiKey}`;
    // return fetch(url).then(data => data.json()).then(result => result.data[0]);
    return Promise.resolve({
        "wind_cdir": "NW", "rh": 55, "pod": "d", "lon": -122.1951, "pres": 999.5, "timezone": "America\/Los_Angeles", "ob_time": "2022-09-02 21:38", "country_code": "US", "clouds": 0, "ts": 1662154735, "solar_rad": 759, "state_code": "WA",
        "city_name": "Oskams Corner", "wind_spd": 1.44558, "slp": 1006.24, "wind_cdir_full": "northwest", "sunrise": "13:29", "app_temp": 26.2, "dni": 875.39, "vis": 16, "sources": ["rtma"], "h_angle": 12.9, "dewpt": 16.9, "snow": 0,
        "aqi": 27, "dhi": 111.93, "wind_dir": 311, "elev_angle": 48.35, "ghi": 758.95, "precip": 0, "sunset": "02:47", "lat": 47.7331, "uv": 6.27329, "datetime": "2022-09-02:21", "temp": 26.1,
        "weather": { "icon": "c01d", "code": 800, "description": "Clear sky" }, "station": "D3422"
    });
}



























/*

Current weather api and response:

https://api.weatherbit.io/v2.0/current?lat=47.7331456&lon=-122.1951488&key=0fa36275dc8b47a887a6626c23e707ab

{"data":[{"wind_cdir":"NW","rh":55,"pod":"d","lon":-122.1951,"pres":999.5,"timezone":"America\/Los_Angeles","ob_time":"2022-09-02 21:38","country_code":"US","clouds":0,"ts":1662154735,"solar_rad":759,"state_code":"WA",
"city_name":"Oskams Corner","wind_spd":1.44558,"slp":1006.24,"wind_cdir_full":"northwest","sunrise":"13:29","app_temp":26.2,"dni":875.39,"vis":16,"sources":["rtma"],"h_angle":12.9,"dewpt":16.9,"snow":0,
"aqi":27,"dhi":111.93,"wind_dir":311,"elev_angle":48.35,"ghi":758.95,"precip":0,"sunset":"02:47","lat":47.7331,"uv":6.27329,"datetime":"2022-09-02:21","temp":26.1,
"weather":{"icon":"c01d","code":800,"description":"Clear sky"},"station":"D3422"}],"count":1}
*/