const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");


    function getTime() {  //현재시간얻기
        const date = new Date();
        const minutes = date.getMinutes();
        const hours = date.getHours();
        const seconds = date.getSeconds();
        clockTitle.innerText = `${
            hours < 10 ? `0${hours}` : hours
        }:${minutes < 10 ? `0${minutes}`: minutes
        }:${ seconds < 10 ? `0${seconds}` :  seconds 
        } `; //만약 초가 10보다 작으면  0+초를 리턴 하고 아니면 초를 리턴
    }

function init() {
 getTime();
 setInterval(getTime, 1000);
}

init();