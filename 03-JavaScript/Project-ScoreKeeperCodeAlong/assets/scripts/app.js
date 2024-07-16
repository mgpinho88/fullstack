// Create variables for player 1
const p1 =  {
    score : 0,
    display : document.querySelector("#p1"),
    button : document.querySelector("#p1Button")
}

// Create variables for player 2
const p2 = {
    score : 0,
    display : document.querySelector("#p2"),
    button : document.querySelector("#p2Button")
}

// Create a variable that will be used to reset the score
const reset = document.querySelector("#reset");
const selectScore = document.querySelector("#selectScore");

// Winning conditions for ping pong are best 2 of 3
let winningScore = 2;
let gameOver = false;

const update = (player, opponent) => {
    if (!gameOver) {
        if (player.score < winningScore) {
            player.score++;
            player.display.innerText = player.score;
            if (player.score === winningScore) {
                gameOver = true;
                player.display.classList.add("has-text-success");
                player.button.disabled = true;
                opponent.display.classList.add("has-text-danger");
                opponent.button.disabled = true;
            }
        }
    }
}


p1.button.addEventListener('click', () => update(p1, p2));

p2.button.addEventListener('click', () => update(p2, p1));

const scoreReset = () => {
    gameOver = false;
    [ p1.score, p1.display.innerHTML, p2.score, p2.display.innerHTML ] = [ 0, 0, 0, 0 ];
    p1.display.classList.remove("has-text-success", "has-text-danger");
    p2.display.classList.remove("has-text-success", "has-text-danger");
}

reset.addEventListener('click', scoreReset);

selectScore.addEventListener('change', () => {
    winningScore = Math.ceil(parseInt(selectScore.value) / 2);
    scoreReset();
});

