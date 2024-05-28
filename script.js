const element =
document.getElementById('ct');
setInterval(() => {
    element.innerText = new Date().toLocaleTimeString();
}, 1000);