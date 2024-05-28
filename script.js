const element =
document.getElementById("time");

setInteval(() => {
    const date = new Date();
    element.innerHTML = date.toLocaleTimeString();
}, 1000);