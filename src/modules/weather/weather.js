const API_KEY = '29a9417254736a0b3b8ae55f381aa16a';
import { getLocation, getCityName } from './getlocation.js'
import { capitalizeText } from '../../utils/capitalizeText.js';

const weatherElement = document.querySelector('#temperature');
const descriptionElement = document.querySelector('#description');
const iconElement = document.querySelector('#icon');
const cityElement = document.querySelector('#city');

async function getWeather( { city } ) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`);
        const data = await response.json();
              
        return {
            temperature: Math.round(data.main.temp),
            description: data.weather[0].description,
            icon: data.weather[0].icon
        }

    } catch (error) {
        alert('Não foi possível obter os dados do clima.');
    }

}

export async function renderWeather() {
    
    const location = await getLocation();
    const cityName = await getCityName(location.lat, location.lon);

    const weather = await getWeather  ({
        city: cityName
    });

    weatherElement.textContent = `${weather.temperature}°`;
    descriptionElement.textContent = capitalizeText(weather.description);
    iconElement.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
    cityElement.textContent = cityName;
  
}  

