const clock = document.querySelector(".clock");
clock.addEventListener("load",tick);
function tick() {
    let now = new Date();
    let hour = now.getHours();
    let min = now.getMinutes();
    let seconds = now.getSeconds();
    let html =` <span>${hour} :</span>
    <span>${min} :</span>
    <span>${seconds} </span>`;
    clock.innerHTML = html;
};
setInterval(tick,1000);