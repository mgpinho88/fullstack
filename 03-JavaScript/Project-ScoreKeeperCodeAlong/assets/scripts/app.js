// Create variables for player 1
const p1 = document.querySelector("#p1");
const p1Btn = document.querySelector("#p1Button");

// Create variables for player 2
const p2 = document.querySelector("#p2");
const p2Btn = document.querySelector("#p2Button");

// Create a variable that will be used to reset the score
const reset = document.querySelector("#reset");
const selectScore = document.querySelector("#winningScore");

let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let gameOver = false;

p1Btn.addEventListener('click', () => {
    if (!gameOver) {
        if (p1Score < winningScore) {
            p1Score++;
            p1.innerText = p1Score
        }
        if (p1Score === winningScore) {
            gameOver = true;
        }
    }
});

p2Btn.addEventListener('click', () => {
    if (!gameOver) {
        if (p2Score < winningScore) {
            p2Score++;
            p2.innerText = p2Score
        }
        if (p2Score === winningScore) {
            gameOver = true;
        }
    }
});

const scoreReset = () => {
    gameOver = false;
    [ p1Score, p1.innerHTML, p2Score, p2.innerHTML] = [ 0, 0, 0, 0 ];
}

reset.addEventListener('click', scoreReset);

selectScore.addEventListener('change', function() {
    winningScore = this.value;
    scoreReset();
});

