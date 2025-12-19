

let counter = 0;

function increaseCounter() {
    let timer = document.querySelector('#timer');
    counter=counter + 1;
    timer.textContent = counter;

}
setInterval(increaseCounter, 1000);
