const API_KEY = '875b7b6e343e3759ca3d01a958c4a3b8'
const lat = 38.945882;
const lon = -92.329435;
const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
// use ``not single qoutes ''


const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');  // Get hours in 24-hour format
const minutes = now.getMinutes().toString().padStart(2, '0');  // Get minutes and pad with zero if needed
const currentTime = `${hours}.${minutes}`;
console.log(currentTime);


async function loadTemperature() {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        document.getElementById("temperature").innerHTML = data['main']['temp'] +'F';
        document.getElementById("description").innerHTML = data['weather'][0]['description'];
        document.getElementById("wind").innerHTML = data['wind']['speed'] + 'MPH';
        document.getElementById("city").innerHTML = data['name'];
        if (data['weather'][0]['description'] == 'clear sky'){
            if (currentTime > 17.20 || currentTime < 7){
                document.getElementById("weather-icon").src = 'images/clear_sky_day.svg';
            } else{
                document.getElementById("weather-icon").src = 'images/clear_sky_day.svg';
            }
        }   else if(data['waeather'][0]['description'] == 'cloudy'){

            if (currentTime > 17.20 || currentTime < 7){
                document.getElementById("weather-icon").src = 'images/cloudy_day.svg';
            } else{
                document.getElementById("weather-icon").src = 'images/cloudy_day.svg';
            }
        }

    } catch {

    }
}
loadTemperature();