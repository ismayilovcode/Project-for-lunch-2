let count = 0;
let timer;
let Counting = document.getElementById("Couting");
function timecount() {
  count++;
  Counting.innerHTML = count;
}
function Start() {
  timer = setInterval(timecount, 1000);
}
function Stop() {
  clearInterval(timer);
}
function Reset() {
  clearInterval(timer);
  Counting.innerHTML = "0";
  count = 0;
}
