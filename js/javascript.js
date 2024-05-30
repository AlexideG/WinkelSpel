// constanten
const koopGoederen = document.getElementById("supplies");
// chat gpt, prompt: kan jij stap voor stap uitleggen hoe ik een horizontale bar
// kan maken die langzaam naar beneden gaat, en als je op een knop drukt
// dat de bar weer vol is?
const progressBar = document.getElementById('progress-bar');
const resetButton = document.getElementById('supplies');
//tot hierboven

// chat gpt, prompt: User
// hoe voeg ik in html/css/javascript een score toe die elke 2 seconden met 15 omhoog gaat?
const scoreElement = document.getElementById('score');
//tot hierboven

//chat gpt, prompt: how do i add to the code that 
//the first thing you see is a prompt to name your 
//store, and after you named it you can see it at the top of the screen
const storeNameButton = document.getElementById("storeName");
const storeNameDisplay = document.getElementById("storeNameDisplay");
//tot hierboven

const modal = document.getElementById("modal");
//Pakt een random geluid uit deze lijst
const HornSound = [
    new Audio("audio/buysupplies.mp3"),
    new Audio("audio/buysupplies2.mp3"),
    new Audio("audio/buysupplies3.mp3"),
    new Audio("audio/buysupplies4.mp3")
]
const yourStore = document.getElementById("YourStore")

// lets
// chat gpt, prompt: kan jij stap voor stap uitleggen hoe ik een horizontale bar
// kan maken die langzaam naar beneden gaat, en als je op een knop drukt
// dat de bar weer vol is?
let width = 100;
// tot hierboven

// chat gpt, prompt: User
// hoe voeg ik in html/css/javascript een score toe die elke 2 seconden met 15 omhoog gaat?
let score = 0;
// tot hierboven

// functions
function inkopen() {
    RandomHorn();//speelt een random toeter sound effect van HornSound
    if (score >= 40) {
        score -= 40;
        scoreElement.textContent = score;
        showModal(); // zorgt ervoor dat de modal wordt laten zien
    } else {
        alert('Niet genoeg punten om in te kopen!'); //melding als je te weinig geld hebt
    }
}

function RandomHorn(){
    const randomIndex = Math.floor(Math.random() * HornSound.length);
    const randomHorn = HornSound [randomIndex];
    randomHorn.play();
} // de functie zodat er random een toeter sound effect wordt gekozen

//chat gpt, prompt: how do i add to the code that 
//the first thing you see is a prompt to name your 
//store, and after you named it you can see it at the top of the screen
// Prompt for store name on page load
window.onload = function() {
    userName = prompt("What is your store called?");
    if (userName) {
        storeNameDisplay.textContent = userName;
    } else {
        storeNameDisplay.textContent = "Unnamed Store";
    }
    // tot hierboven
}

// chat gpt, prompt: User
// hoe voeg ik in html/css/javascript een score toe die elke 2 seconden met 15 omhoog gaat?
function updateScore() {
    if (width > 0){
        score += 15;
        scoreElement.textContent = score;
    }

}
setInterval(updateScore, 2000);
// tot hierboven


//chat gpt, prompt: how do i add to the code that the 
//first thing you see is a prompt to name your store, 
//and after you named it you can see it at the top of the screen
function logInput() {
    userName = nameInput.value;
    storeNameDisplay.textContent = userName;
}
// tot hierboven



// chat gpt, prompt: kan jij stap voor stap uitleggen hoe ik een horizontale bar
// kan maken die langzaam naar beneden gaat, en als je op een knop drukt
// dat de bar weer vol is?
function decreaseProgress() {
    if (width > 0) {
        width -= 5;
        progressBar.style.width = width + '%';
    }
    if (width == 0){
        yourStore.src = "images/storel.jpg"
    }
}
// tot hierboven


//chat gpt, prompt: Can you now add that when you press the button ''buy supplies'' the screen goes 
//a little dark for 6 seconds and text appears
//saying, ''supplies being delivered'' and that after 6 seconds it disapeares
function showModal() {
    modal.style.display = 'flex';
    setTimeout(function() {
        modal.style.display = 'none';
    }, 5000);
}
// Tot hierboven


// event listeners
koopGoederen.addEventListener("click", inkopen);

// chat gpt, prompt: kan jij stap voor stap uitleggen hoe ik een horizontale bar
// kan maken die langzaam naar beneden gaat, en als je op een knop drukt
// dat de bar weer vol is?
setInterval(decreaseProgress, 2000); // Decrease progress every 2000ms

resetButton.addEventListener('click', function() {
    width = 100;
    progressBar.style.width = width + '%';
});
// tot hierboven
