import regeneratorRuntime from "regenerator-runtime";

const hitAPI = async (cityName, option = 'imperial') => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e6cbc5ee156d425e407a2fa455be867e&units=${option}`, {mode: 'cors'});
    console.log(response);
    const json = await response.json();
    console.log(json);
};

hitAPI('los angeles');



// use units: metric = Celcius, Imperial = "farenheit"

// weather.main -- Clouds
// weather.description -- "broken clouds"
// main.temp
// main.feels_like
// main.temp_min
// main.temp_max
// main.humidity

// wind.speed (metric = meters/sec, imperial = mph), wind.deg
// clouds.all = cloudiness %

// sys.country = US
// name = "New York"

// high/low, wind, humidity, cloudiness %