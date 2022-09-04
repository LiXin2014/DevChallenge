// Please do not use my API key from weatherbit
const apiKey = "0fa36275dc8b47a887a6626c23e707ab";
const baseURL = "https://api.weatherbit.io/v2.0/";


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

function getMonth(monthNumber) {
    switch(monthNumber) {
        case 1:
            return "Jan";
        case 2:
            return "Feb";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "Aug";
        case 9:
            return "Sept";
        case 10:
            return "Oct";
        case 11:
            return "Nov";
        case 12:
            return "Dec";
    }
}

function getDay(dayNumber) {
    switch(dayNumber) {
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Web";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        case 7:
            return "Sun";
    }
}

export function getCurrentWeather(lat = 0, long = 0) {
    if (lat === 0 && long === 0) {
        const { lat, long } = getLocation();
    }
    const url = `${baseURL}/current?lat=${lat}&lon=${long}&key=${apiKey}`;
    //return fetch(url).then(data => data.json()).then(result => result.data[0]);
    return Promise.resolve({
        "wind_cdir": "NW", "rh": 55, "pod": "d", "lon": -122.1951, "pres": 999.5, "timezone": "America\/Los_Angeles", "ob_time": "2022-09-02 21:38", "country_code": "US", "clouds": 0, "ts": 1662154735, "solar_rad": 759, "state_code": "WA",
        "city_name": "Oskams Corner", "wind_spd": 1.44558, "slp": 1006.24, "wind_cdir_full": "northwest", "sunrise": "13:29", "app_temp": 26.2, "dni": 875.39, "vis": 16, "sources": ["rtma"], "h_angle": 12.9, "dewpt": 16.9, "snow": 0,
        "aqi": 27, "dhi": 111.93, "wind_dir": 311, "elev_angle": 48.35, "ghi": 758.95, "precip": 0, "sunset": "02:47", "lat": 47.7331, "uv": 6.27329, "datetime": "2022-09-02:21", "temp": 26.1,
        "weather": { "icon": "c01d", "code": 800, "description": "Clear sky" }, "station": "D3422"
    }); 
}

export function getForcasts(lat = 0, long = 0) {
    if (lat === 0 && long === 0) {
        const { lat, long } = getLocation();
    }
    const url = `${baseURL}/forecast/daily?lat=${lat}&lon=${long}&key=${apiKey}`;
    //return fetch(url).then(data => data.json()).then(result => result.data);

    const result = {"data":[{"moonrise_ts":1662242698,"wind_cdir":"SSE","rh":79,"pres":1006.3,"high_temp":23.5,"sunset_ts":1662259458,"ozone":286.1,"moon_phase":0.559914,"wind_gust_spd":2.8,"snow_depth":0,"clouds":53,"ts":1662231660,"sunrise_ts":1662211760,"app_min_temp":12.3,"wind_spd":1.4,"pop":20,"wind_cdir_full":"south-southeast","moon_phase_lunation":0.26,"slp":1018,"app_max_temp":20,"valid_date":"2022-09-03","vis":18.337,"snow":0,"dewpt":14.1,"uv":0,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":162,"max_dhi":null,"clouds_hi":19,"precip":0.019989,"low_temp":12.4,"max_temp":20,"moonset_ts":1662272127,"datetime":"2022-09-03","temp":17.8,"min_temp":12.3,"clouds_mid":0,"clouds_low":49},{"moonrise_ts":1662333582,"wind_cdir":"S","rh":72,"pres":1006.4,"high_temp":24.2,"sunset_ts":1662345738,"ozone":289.4,"moon_phase":0.675511,"wind_gust_spd":6.4,"snow_depth":0,"clouds":32,"ts":1662274860,"sunrise_ts":1662298239,"app_min_temp":12.4,"wind_spd":3.5,"pop":20,"wind_cdir_full":"south","moon_phase_lunation":0.29,"slp":1016.8,"app_max_temp":24.1,"valid_date":"2022-09-04","vis":21.176,"snow":0,"dewpt":12.2,"uv":6.1,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"wind_dir":178,"max_dhi":null,"clouds_hi":33,"precip":0.0219879,"low_temp":13.5,"max_temp":24.2,"moonset_ts":1662275230,"datetime":"2022-09-04","temp":17.4,"min_temp":12.4,"clouds_mid":0,"clouds_low":28},{"moonrise_ts":1662419982,"wind_cdir":"S","rh":66,"pres":1012.3,"high_temp":21.4,"sunset_ts":1662432019,"ozone":290.1,"moon_phase":0.783524,"wind_gust_spd":5.4,"snow_depth":0,"clouds":36,"ts":1662361260,"sunrise_ts":1662384719,"app_min_temp":13.2,"wind_spd":2.7,"pop":20,"wind_cdir_full":"south","moon_phase_lunation":0.33,"slp":1020.7,"app_max_temp":20.6,"valid_date":"2022-09-05","vis":21.073,"snow":0,"dewpt":9.8,"uv":5.5,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"wind_dir":187,"max_dhi":null,"clouds_hi":0,"precip":0.00999451,"low_temp":8.7,"max_temp":21.4,"moonset_ts":1662365635,"datetime":"2022-09-05","temp":16.7,"min_temp":13.2,"clouds_mid":0,"clouds_low":36},{"moonrise_ts":1662510245,"wind_cdir":"SSE","rh":64,"pres":1007.1,"high_temp":24.8,"sunset_ts":1662518298,"ozone":280.3,"moon_phase":0.876003,"wind_gust_spd":4.4,"snow_depth":0,"clouds":6,"ts":1662447660,"sunrise_ts":1662471199,"app_min_temp":8.8,"wind_spd":2.4,"pop":0,"wind_cdir_full":"south-southeast","moon_phase_lunation":0.36,"slp":1015.8,"app_max_temp":23.9,"valid_date":"2022-09-06","vis":24.12,"snow":0,"dewpt":8.4,"uv":6,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"wind_dir":157,"max_dhi":null,"clouds_hi":1,"precip":0,"low_temp":12,"max_temp":24.8,"moonset_ts":1662456766,"datetime":"2022-09-06","temp":16.3,"min_temp":8.7,"clouds_mid":0,"clouds_low":6},{"moonrise_ts":1662599692,"wind_cdir":"S","rh":54,"pres":1003.2,"high_temp":29.6,"sunset_ts":1662604577,"ozone":272.6,"moon_phase":0.945606,"wind_gust_spd":2,"snow_depth":0,"clouds":54,"ts":1662534060,"sunrise_ts":1662557679,"app_min_temp":12,"wind_spd":1.6,"pop":0,"wind_cdir_full":"south","moon_phase_lunation":0.39,"slp":1012.4,"app_max_temp":27.9,"valid_date":"2022-09-07","vis":24.128,"snow":0,"dewpt":8.3,"uv":5.8,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":190,"max_dhi":null,"clouds_hi":26,"precip":0,"low_temp":11.7,"max_temp":29.6,"moonset_ts":1662548243,"datetime":"2022-09-07","temp":18.9,"min_temp":12,"clouds_mid":52,"clouds_low":0},{"moonrise_ts":1662688386,"wind_cdir":"SE","rh":62,"pres":1003.3,"high_temp":25.7,"sunset_ts":1662690856,"ozone":269.9,"moon_phase":0.987139,"wind_gust_spd":1.3,"snow_depth":0,"clouds":64,"ts":1662620460,"sunrise_ts":1662644159,"app_min_temp":12,"wind_spd":1.2,"pop":0,"wind_cdir_full":"southeast","moon_phase_lunation":0.43,"slp":1012.5,"app_max_temp":24.4,"valid_date":"2022-09-08","vis":24.128,"snow":0,"dewpt":8.4,"uv":6.1,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":125,"max_dhi":null,"clouds_hi":27,"precip":0,"low_temp":11.5,"max_temp":25.7,"moonset_ts":1662639729,"datetime":"2022-09-08","temp":16,"min_temp":11.7,"clouds_mid":64,"clouds_low":0},{"moonrise_ts":1662776526,"wind_cdir":"SSE","rh":86,"pres":998.3,"high_temp":20.3,"sunset_ts":1662777135,"ozone":296.1,"moon_phase":0.99841,"wind_gust_spd":7,"snow_depth":0,"clouds":67,"ts":1662706860,"sunrise_ts":1662730638,"app_min_temp":11.6,"wind_spd":3.1,"pop":65,"wind_cdir_full":"south-southeast","moon_phase_lunation":0.46,"slp":1007.3,"app_max_temp":18.4,"valid_date":"2022-09-09","vis":22.301,"snow":0,"dewpt":12.2,"uv":6.1,"weather":{"icon":"r02d","code":501,"description":"Moderate rain"},"wind_dir":168,"max_dhi":null,"clouds_hi":2,"precip":5.75,"low_temp":13.3,"max_temp":20.3,"moonset_ts":1662731054,"datetime":"2022-09-09","temp":14.7,"min_temp":11.5,"clouds_mid":51,"clouds_low":38},{"moonrise_ts":1662864310,"wind_cdir":"SE","rh":67,"pres":1002.7,"high_temp":22.8,"sunset_ts":1662863413,"ozone":288,"moon_phase":0.980226,"wind_gust_spd":7.6,"snow_depth":0,"clouds":63,"ts":1662793260,"sunrise_ts":1662817118,"app_min_temp":12.3,"wind_spd":3.5,"pop":10,"wind_cdir_full":"southeast","moon_phase_lunation":0.5,"slp":1011.8,"app_max_temp":22,"valid_date":"2022-09-10","vis":24.128,"snow":0,"dewpt":9.9,"uv":6,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":131,"max_dhi":null,"clouds_hi":2,"precip":0.3125,"low_temp":9.4,"max_temp":22.8,"moonset_ts":1662822189,"datetime":"2022-09-10","temp":16.9,"min_temp":12.3,"clouds_mid":2,"clouds_low":63},{"moonrise_ts":1662951885,"wind_cdir":"SE","rh":68,"pres":1002.9,"high_temp":23.2,"sunset_ts":1662949691,"ozone":293.8,"moon_phase":0.935842,"wind_gust_spd":2.9,"snow_depth":0,"clouds":44,"ts":1662879660,"sunrise_ts":1662903598,"app_min_temp":9.4,"wind_spd":1.5,"pop":0,"wind_cdir_full":"southeast","moon_phase_lunation":0.53,"slp":1012.1,"app_max_temp":21.6,"valid_date":"2022-09-11","vis":24.128,"snow":0,"dewpt":7.6,"uv":5.9,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":145,"max_dhi":null,"clouds_hi":3,"precip":0,"low_temp":8.6,"max_temp":23.2,"moonset_ts":1662913172,"datetime":"2022-09-11","temp":14.3,"min_temp":9.4,"clouds_mid":1,"clouds_low":43},{"moonrise_ts":1663039364,"wind_cdir":"SSE","rh":77,"pres":1000.1,"high_temp":20,"sunset_ts":1663035969,"ozone":297.5,"moon_phase":0.870103,"wind_gust_spd":5.9,"snow_depth":0,"clouds":63,"ts":1662966060,"sunrise_ts":1662990078,"app_min_temp":8.7,"wind_spd":2.5,"pop":10,"wind_cdir_full":"south-southeast","moon_phase_lunation":0.56,"slp":1009.3,"app_max_temp":18.1,"valid_date":"2022-09-12","vis":24.128,"snow":0,"dewpt":9,"uv":5.9,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":166,"max_dhi":null,"clouds_hi":6,"precip":0.25,"low_temp":12.3,"max_temp":20,"moonset_ts":1663004054,"datetime":"2022-09-12","temp":13.3,"min_temp":8.5,"clouds_mid":13,"clouds_low":63},{"moonrise_ts":1663126833,"wind_cdir":"S","rh":81,"pres":998.4,"high_temp":19.7,"sunset_ts":1663122246,"ozone":306,"moon_phase":0.788513,"wind_gust_spd":5.9,"snow_depth":0,"clouds":69,"ts":1663052460,"sunrise_ts":1663076557,"app_min_temp":12.2,"wind_spd":2.6,"pop":20,"wind_cdir_full":"south","moon_phase_lunation":0.6,"slp":1007.6,"app_max_temp":18.2,"valid_date":"2022-09-13","vis":24.128,"snow":0,"dewpt":10.6,"uv":5.8,"weather":{"icon":"c03d","code":803,"description":"Broken clouds"},"wind_dir":169,"max_dhi":null,"clouds_hi":40,"precip":0.5,"low_temp":15.1,"max_temp":19.7,"moonset_ts":1663094861,"datetime":"2022-09-13","temp":14.2,"min_temp":11.3,"clouds_mid":20,"clouds_low":64},{"moonrise_ts":1663214374,"wind_cdir":"S","rh":75,"pres":997.8,"high_temp":17.9,"sunset_ts":1663208524,"ozone":325.8,"moon_phase":0.696451,"wind_gust_spd":8.5,"snow_depth":0,"clouds":53,"ts":1663138860,"sunrise_ts":1663163037,"app_min_temp":11.9,"wind_spd":3.7,"pop":75,"wind_cdir_full":"south","moon_phase_lunation":0.63,"slp":1007.3,"app_max_temp":14.8,"valid_date":"2022-09-14","vis":24.128,"snow":0,"dewpt":8.8,"uv":5.7,"weather":{"icon":"r01d","code":500,"description":"Light rain"},"wind_dir":176,"max_dhi":null,"clouds_hi":3,"precip":6.625,"low_temp":11.9,"max_temp":17.9,"moonset_ts":1663185572,"datetime":"2022-09-14","temp":13.4,"min_temp":10.3,"clouds_mid":53,"clouds_low":9},{"moonrise_ts":1663302075,"wind_cdir":"SE","rh":92,"pres":1006,"high_temp":12.9,"sunset_ts":1663294801,"ozone":319.9,"moon_phase":0.598705,"wind_gust_spd":3.4,"snow_depth":0,"clouds":92,"ts":1663225260,"sunrise_ts":1663249517,"app_min_temp":11.5,"wind_spd":1.7,"pop":60,"wind_cdir_full":"southeast","moon_phase_lunation":0.66,"slp":1015.5,"app_max_temp":11.6,"valid_date":"2022-09-15","vis":24.128,"snow":0,"dewpt":10.2,"uv":5.6,"weather":{"icon":"r04d","code":520,"description":"Light shower rain"},"wind_dir":128,"max_dhi":null,"clouds_hi":3,"precip":2.8125,"low_temp":10.2,"max_temp":12.9,"moonset_ts":1663276102,"datetime":"2022-09-15","temp":11.5,"min_temp":10.2,"clouds_mid":43,"clouds_low":92},{"moonrise_ts":1663390036,"wind_cdir":"ESE","rh":83,"pres":1012.5,"high_temp":20.6,"sunset_ts":1663381078,"ozone":292.9,"moon_phase":0.499317,"wind_gust_spd":2.2,"snow_depth":0,"clouds":35,"ts":1663311660,"sunrise_ts":1663335997,"app_min_temp":10.9,"wind_spd":1.4,"pop":15,"wind_cdir_full":"east-southeast","moon_phase_lunation":0.7,"slp":1022,"app_max_temp":13.8,"valid_date":"2022-09-16","vis":24.128,"snow":0,"dewpt":9.5,"uv":5.6,"weather":{"icon":"c02d","code":802,"description":"Scattered clouds"},"wind_dir":107,"max_dhi":null,"clouds_hi":61,"precip":0.5625,"low_temp":10.8,"max_temp":20.6,"moonset_ts":1663366306,"datetime":"2022-09-16","temp":12.4,"min_temp":10.8,"clouds_mid":4,"clouds_low":35},{"moonrise_ts":1663478374,"wind_cdir":"W","rh":64,"pres":1007,"high_temp":23,"sunset_ts":1663467355,"ozone":296.6,"moon_phase":0.401654,"wind_gust_spd":1.5,"snow_depth":0,"clouds":16,"ts":1663398060,"sunrise_ts":1663422478,"app_min_temp":13.3,"wind_spd":1.2,"pop":0,"wind_cdir_full":"west","moon_phase_lunation":0.73,"slp":1016.3,"app_max_temp":18.8,"valid_date":"2022-09-17","vis":24.128,"snow":0,"dewpt":9.2,"uv":5.5,"weather":{"icon":"c02d","code":801,"description":"Few clouds"},"wind_dir":273,"max_dhi":null,"clouds_hi":48,"precip":0,"low_temp":13.1,"max_temp":23,"moonset_ts":1663456029,"datetime":"2022-09-17","temp":16.4,"min_temp":9.8,"clouds_mid":2,"clouds_low":14},{"moonrise_ts":1663567201,"wind_cdir":"NNW","rh":92,"pres":1005.5,"high_temp":15.5,"sunset_ts":1663553632,"ozone":301.6,"moon_phase":0.308608,"wind_gust_spd":3.6,"snow_depth":0,"clouds":100,"ts":1663484460,"sunrise_ts":1663508958,"app_min_temp":13.3,"wind_spd":1.4,"pop":25,"wind_cdir_full":"north-northwest","moon_phase_lunation":0.77,"slp":1014.8,"app_max_temp":13.8,"valid_date":"2022-09-18","vis":23.896,"snow":0,"dewpt":12.1,"uv":5.4,"weather":{"icon":"c04d","code":804,"description":"Overcast clouds"},"wind_dir":329,"max_dhi":null,"clouds_hi":50,"precip":0.75,"low_temp":13.2,"max_temp":15.5,"moonset_ts":1663545184,"datetime":"2022-09-18","temp":13.5,"min_temp":12.8,"clouds_mid":39,"clouds_low":100}],"city_name":"Oskams Corner","lon":-122.1951,"timezone":"America\/Los_Angeles","lat":47.7331,"country_code":"US","state_code":"WA"};
   
    return Promise.resolve(result);
}

export function getCurrentDate() {
    const currentDate = new Date();
    const date = currentDate.getDate();
    const month = getMonth(currentDate.getMonth() + 1);
    const day = getDay(currentDate.getDay());
    return `${day}, ${date} ${month}`;
}



























/*

Current weather api and response:

https://api.weatherbit.io/v2.0/current?lat=47.7331456&lon=-122.1951488&key=0fa36275dc8b47a887a6626c23e707ab

{"data":[{"wind_cdir":"NW","rh":55,"pod":"d","lon":-122.1951,"pres":999.5,"timezone":"America\/Los_Angeles","ob_time":"2022-09-02 21:38","country_code":"US","clouds":0,"ts":1662154735,"solar_rad":759,"state_code":"WA",
"city_name":"Oskams Corner","wind_spd":1.44558,"slp":1006.24,"wind_cdir_full":"northwest","sunrise":"13:29","app_temp":26.2,"dni":875.39,"vis":16,"sources":["rtma"],"h_angle":12.9,"dewpt":16.9,"snow":0,
"aqi":27,"dhi":111.93,"wind_dir":311,"elev_angle":48.35,"ghi":758.95,"precip":0,"sunset":"02:47","lat":47.7331,"uv":6.27329,"datetime":"2022-09-02:21","temp":26.1,
"weather":{"icon":"c01d","code":800,"description":"Clear sky"},"station":"D3422"}],"count":1}
*/