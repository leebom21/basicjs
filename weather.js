
const COORDS = 'coords';

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    
}


function handleGeoSucces(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
   const coordsObj = {
    latitude, // latitude: latitude,
    longitude // longitude: longitude
   };
   saveCoords(coordsObj);
}

function handleGeoError() {
    console.log('Cant access geo location' );
}

//좌표 요청 함수
function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords() {
    const loadedCords = localStorage.getItem(COORDS); 
    if(loadedCords === null) {
        askForCoords();

    }else {
        // getWeather
    }
}


function init() {
    loadCoords();
}

init();