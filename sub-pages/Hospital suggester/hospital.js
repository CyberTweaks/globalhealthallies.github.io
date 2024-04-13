function redirectToNearestHospital() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const url = `https://www.google.com/maps/search/hospitals/@${lat},${lng},15z`;
            window.location.href = url;
        }, () => {
            alert('Geolocation is not supported by your browser');
        });
    } else {
        alert('Geolocation is not supported by your browser');
    }
}