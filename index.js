let count = 0;
let timer;

function timecount(){
    count++;
    CountQueuingStrategy.innerHTML = count;
}
function Star(){
    timer = setInterval(timecount,500)
}
function Stop(){
    clearInterval(timer)
}
function Reset(){
    clearInterval(timer);
    CountQueuingStrategy.innerHTML = "0";
    count = 0;
}