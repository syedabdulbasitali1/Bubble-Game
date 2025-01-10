let hitRn = 0;
let timer = 60;
let score = 0;
let clickedBubble;
function runTimer() {
    let timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector(".timer").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector(".section").innerHTML = `<h1>GAME OVER</h1> <h3>Your Score is: ${score}</h3>`;
        }
    }, 1000);
}
function makeBubble() {
    let clutter = "";

    for (let i = 0; i < 160; i++) {
        let random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }
    let section = document.querySelector(".section");
    section.innerHTML = clutter;
}
function getNewHit() {
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector(".hit").textContent = hitRn;
}
function increaseScore() {
    score += 10;
    document.querySelector(".score").textContent = score;
}

document.querySelector(".section").addEventListener("click", (details) => {
    clickedBubble = Number(details.target.textContent);
    if (clickedBubble === hitRn) {
        increaseScore();
        getNewHit();
        makeBubble();
    }
});


getNewHit();
makeBubble();
runTimer();
