export function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            resolve({ lat, lon });
        }, (error) => {
            reject(new Error('Não foi possível obter a localização.'));
        });
    });
}
