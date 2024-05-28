let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let currentTime = new Date();

let hr = currentTime.getHours();
hr.innerHTML = currentTime.getHours();
let minu = currentTime.getMinutes();
min.innerHTML = currentTime.getMinutes();
let secu = currentTime.getSeconds();
sec.innerHTML = currentTime.getSeconds();