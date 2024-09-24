function clock(){
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    let period = 'AM';


    if(hours >= 12){
        period =  'PM'
    }

    hours = hours > 12 ? hours % 12 : hours;

    if(hours < 10){
        hours = '0' + hours;
    }

    if(minutes < 10){
        minutes = '0' + minutes;
    }
    

    if(seconds < 10){
        seconds = '0' + seconds;
    }
    
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;   


}    
let updateClock = setInterval(clock ,1000);


let today = new Date();

let dayNumber = today.getDate();
let year = today.getFullYear();
let dayName = today.toLocaleString("default" , {weekday: "long"});
let monthName = today.toLocaleString("default" , {weekday: "short"});


document.querySelector('.month-name').innerHTML = monthName;
document.querySelector('.day-name').innerHTML = dayName;
document.querySelector('.year').innerHTML = year;
document.querySelector('.day-number').innerHTML = dayNumber;