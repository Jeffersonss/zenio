import { renderClock, updateClock } from './clock/clock.js';
import { renderDate } from './clock/date.js';
import { renderWeather } from './weather/weather.js';

document.addEventListener('DOMContentLoaded', async () => {
    renderClock();
    updateClock();

    renderDate();
    renderWeather();
});
