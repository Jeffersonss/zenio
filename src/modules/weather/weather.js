const API_KEY = '29a9417254736a0b3b8ae55f381aa16a';
import { getLocation } from './getlocation.js'
import { capitalizeText } from '../../utils/capitalizeText.js';

const weatherElement = document.querySelector('#temperature');
const descriptionElement = document.querySelector('#description');
const iconElement = document.querySelector('#icon');

async function getWeather( { lat, lon } ) {

    try {
        const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=pt_br`);
        const response = await data.json();
        console.log(response);
      
        return {
            temperature: Math.round(response.main.temp),
            description: response.weather[0].description,
            icon: response.weather[0].icon
        }

    } catch (error) {
        alert('Não foi possível obter os dados do clima.');
    }

}

export async function renderWeather() {
    
    const location = await getLocation();
    
    const weather = await getWeather  ({
        lat: location.lat,
        lon: location.lon
    });

    weatherElement.textContent = `${weather.temperature}°`;
    descriptionElement.textContent = capitalizeText(weather.description);
    iconElement.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
}  