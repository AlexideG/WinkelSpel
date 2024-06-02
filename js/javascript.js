// constanten
const koopGoederen = document.getElementById("supplies");
const progressBar = document.querySelector("#progress-bar");
const resetButton = document.getElementById("supplies");
const scoreElement = document.getElementById("score");
const storeNameButton = document.getElementById("storeName");
const storeNameDisplay = document.getElementById("storeNameDisplay");

const modal = document.getElementById("modal");
//in de les met groepje
//Pakt een random geluid uit deze lijst
const hornSound = [
    new Audio("audio/buysupplies.mp3"), //https://www.youtube.com/watch?v=iFPBhBRMyfw
    new Audio("audio/buysupplies2.mp3"), //https://www.youtube.com/watch?v=1YZpolqB6Us
    new Audio("audio/buysupplies3.mp3"), //https://www.youtube.com/watch?v=Zgn_IFQj2aY
    new Audio("audio/buysupplies4.mp3") //https://www.youtube.com/watch?v=tYbGdBTMZ_s
]
const yourStore = document.getElementById("YourStore")

// lets
let width = 100;
let score = 0;

// functions
function inkopen() { //De knop om supplies te kopen
    randomHorn();//speelt een random toeter sound effect van hornSound
    if (score >= 40) { // checken of geld boven prijs is
        score -= 40; // 40 van geld af
        scoreElement.textContent = score;
        showModal(); // zorgt ervoor dat de modal wordt laten zien als er op de knop geklikt wordt
    } else {
        alert('You broke as hell!'); //melding als je te weinig geld hebt
    }
}
// Hulp van Mart
function randomHorn(){ // kiest een random toeter geluid van de 4
    const randomIndex = Math.floor(Math.random() * hornSound.length); // de wiskunde om een random toeter te kiezen
    const randomHorn = hornSound [randomIndex];
    randomHorn.play(); //zorgt ervoor dat de toeter af kan spelen
} // de functie zodat er random een toeter sound effect wordt gekozen


window.onload = function() { //zorgt dat de pop up komt om je winkel een naam te geven als je de website opstart
    userName = prompt("What is your store called?"); //De vraag die hij stelt
    if (userName) {
        storeNameDisplay.textContent = userName; // zorgt ervoor dat de naam van de store laten zien wordt
    } else {
        storeNameDisplay.textContent = "Unnamed Store"; // Als er niks wordt ingevuld
    }
    // tot hierboven
}

// chat gpt, prompt:
// hoe voeg ik in html/css/javascript een score toe die elke 2 seconden met 15 omhoog gaat?
function updateScore() { // zorgt dat de score met 15 omhoog gaat
    if (width > 0){ // zolang de breedte van de progressbar groter is dan nul komt er score bij
        score += 15; // zorgt dat er plus 15 bij gaat
        scoreElement.textContent = score; // De score wordt weergegeven
    }

}
setInterval(updateScore, 2000); // elke 2 seconden gaat er 15 bij
// tot hierboven

// chat gpt, prompt: kan jij stap voor stap uitleggen hoe ik een horizontale bar
// kan maken die langzaam naar beneden gaat, en als je op een knop drukt
// dat de bar weer vol is?
function decreaseProgress() { // zorgt dat de progress bar naar benden gaat
    if (width > 0) { // het blijft naar benden gaan, totdat de width kleiner is dan nul
        width -= 5; // zorgt dat de bar met 5% naar beneden gaat
        progressBar.style.width = width + '%'; // dit update de stijl van de bar zodat je kan zien dat hij met 5 naar beneden gaat
    }
    if (width == 0){ // als width nul is dan veranderd het plaatje naar storel 
        yourStore.src = "images/storel.jpg" //https://depositphotos.com/illustrations/abandoned.html
    }
}
// tot hierboven

function showModal() { // zorgt ervoor dat er een overlay op het scherm komt die 5 seconden duurt en daarna weggaat
    modal.style.display = "flex"; //zorgt dat het een overlay wordt
    setTimeout(function() { //zorgt dat de functie maar voor een bepaalde tijd wordt uitgevoerd
        modal.style.display = 'none'; //dit zorgt ervoor de de modal ook weer weggaat
    }, 5000); //het duurt 5 seconden
}


// event listeners
koopGoederen.addEventListener("click", inkopen); //als er geklikt wordt, dan wordt de inkopen functie uitgevoerd
setInterval(decreaseProgress, 2000); // zorgt ervoor dat decreaseProgress elke 2 seconden gebeurd
resetButton.addEventListener('click', function() { // als je op de knop klikt dan vult de bar weer vol naar 100%
    width = 100;
    progressBar.style.width = width + '%';
});

