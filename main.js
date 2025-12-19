

// Zählvariable für die verstrichene Zeit (in Sekunden)
let counter = 0;

// Funktion, die jede Sekunde aufgerufen wird
function increaseCounter() {

    // HTML-Element mit der ID "timer" holen
    let timer = document.querySelector('#timer');

    // Zähler um 1 erhöhen
    counter = counter + 1;

    // Aktuellen Wert im HTML anzeigen
    timer.textContent = counter;
}

// Ruft die Funktion jede Sekunde (1000 ms) auf
setInterval(increaseCounter, 1000);
