let score0 = document.getElementById("score--0");
let score1 = document.getElementById("score--1");
let btnroll = document.getElementById("btn--roll");
let dice = document.getElementById("dice");
let current0 = document.getElementById("current--0");
let current1 = document.getElementById("current--1");
let restart = document.getElementById("restart");

let currentvalue, activeplayer, score, playing;

function gamestarter() {
    currentvalue = 0;
    activeplayer=0; 
    score=[0,0];
    playing=true;
    score0.textContent = 0;
    score1.textContent = 0;
    dice.classList.add("hidden");
    current0.textContent= 0;
    current1.textContent= 0;
}

gamestarter();

function switchplayer() {
    document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove("player--active");
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    currentvalue = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activeplayer}`).classList.toggle("player--active");

}

btnroll.addEventListener("click", () => {
    if (playing) {
        let randomdice = Math.trunc(Math.random() * 6 + 1);
        dice.classList.remove("hidden");
        dice.src = `dice-${randomdice}.png`;

        if(randomdice !== 1) {
            console.log(randomdice);
            currentvalue +=randomdice;
            document.getElementById(
                `current--${activeplayer}`
            ).textContent = currentvalue;
        } else {
          switchplayer();
        }
    }
});

btnHold.addEventListener("click", ()=> {
    score[activeplayer] += currentvalue;
    if(score[activeplayer] >= 50) {
        playing = false;
        dice.classList.add("hidden");
        document.querySelector(`.player--${activeplayer}`).classList.remove("player--active");
        document.querySelector(`.player--${activeplayer}`).classList.add("player--winner");
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
    } else {
        document.getElementById(`score--${activeplayer}`).textContent = score[activeplayer];
        switchplayer();
    }
});
restart.addEventListener("click", () => {

    document.querySelector(`.player--${activeplayer}`).classList.remove("player--winner");
    document.querySelector(`.player--0`).classList.add("player--active");
    gamestarter();
});

