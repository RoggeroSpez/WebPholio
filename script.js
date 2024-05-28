const element =
document.getElementById("time");

setInterval(() => {
    element.innerText = 
    new Date().toLocaleTimeString();
}, 1000);