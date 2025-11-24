const timeElement = document.getElementById('time');

function getTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    return `${hours}:${minutes}`;
}

export function renderClock() {
    return timeElement.textContent = getTime();
}

export function updateClock() {
   setInterval(renderClock, 1000);
}


