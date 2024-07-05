// Promt the user for a maximum number they wish to guess between and store it in a variable
let range = parseInt(prompt("What is the highest number you'd like to guess?"));
let message = `Please guess a number between 1 and ${ range } or enter (q)uit to end the game`;

// Check if the number input is a number - if the input is not a number parseInt will return NaN
while (!range || range <= 0) {
    range = parseInt(prompt("Please enter a valid number."));
}
// Create a random number for the user to guess
let number = Math.floor(Math.random() * range) + 1;
let input = prompt( message );
let attempts = 1;
console.log(number);

// Start Guessing
while (true) {
    if (parseInt(input) === number) {
        prompt(`Congratulations! Your guess correctly after ${ attempts } attempts.\nThe number chosen was in fact ${ input }.`);
        break;
    } else if (input.toLowerCase() === 'q' || input.toLowerCase() === 'quit') {
        prompt(`You chose to quit the game after ${ attempts } attempts, sorry to see you go`);
        break;
    } else if(parseInt(input) > number) {
        input = prompt(`${ input } is too high, please guess a lower number.\n${ message }`);
    } else if (parseInt(input) < number) {
        input = prompt(`${ input } is too low, please guess a higher number.\n${ message }`);
    } else {
        input = prompt(`${ input } is invalid, please enter a number between 0 and ${ range }\n${ message }`);
    }
    attempts++;
}
