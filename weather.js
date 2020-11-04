const weather = document.querySelector(".js-weather");


const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";
const COORDS = "coords";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY }&units=metric`
    ).then(function(response){    //서버로부터 데이터가 들어올때까지 기다렸!!!!!
        return response.json()  //대기상태
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperature} @ ${place}`;
    })
}

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
   getWeather(latitude, longitude);
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
        const parseCoords = JSON.parse(loadedCords);
       getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init() {
    loadCoords();
}

init();