export function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            resolve({ lat, lon });
        }, (error) => {
            reject(new Error('Não foi possível obter a localização.'));
            console.log(error)
        });
    });
}

export async function getCityName(lat, lon) {
    const response = await fetch(`https://geocode.maps.co/reverse?lat=${lat}&lon=${lon}&api_key=6924db2a85f7d019602781gdc542a86`);
    const data = await response.json();

    return data.address.city;
}
