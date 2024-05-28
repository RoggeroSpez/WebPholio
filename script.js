const element =
document.getElementById("time");

setInteval(() => {
    let date = new Date();
    element.innerHTML = date.toLocaleTimeString();
}, 1000);