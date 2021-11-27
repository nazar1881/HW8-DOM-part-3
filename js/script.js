console.log('Задание №4. Усложненный вариант:');
function printNumber(a, b) {
    if (a > b) {
        console.log(a);
        a -= 1;
        printNumber(a, b);   
    } else if (a < b) {
        console.log(a);
        a += 1;
        printNumber(a, b);
    } else {
        console.log(a);
        return;
    }
}
printNumber(10, 1);

//Second task

let clock = document.getElementById("clock");
let formatWithSeconds  = true;
let switchBtn = document.getElementById('switch-format');

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds(); 

    return [hours, minutes, seconds];
}

function toggleFormat() {
    formatWithSeconds = !formatWithSeconds;
}

switchBtn.addEventListener('click', function(){
    toggleFormat();
});

function getFormattedTime() {
    let time = getTime();
    let hours = time[0];
    let minutes = time[1];
    let seconds = time[2];

    if(hours < 10){hours = "0"+ hours;}
    if(minutes < 10){minutes = "0"+ minutes;}
    if(seconds < 10){seconds = "0"+ seconds;}
    
    return formatWithSeconds ? `${hours}:${minutes}:${seconds}` :`${hours}:${minutes}`;
}
function clockTimer() {
    clock.innerText = getFormattedTime();
}
clockTimer();
setInterval(clockTimer, 250);




