// Change the value of num, so that "YOU GOT ME!" prints out
// const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 
const num = 102;
// DO NOT TOUCH ANYTHING BELOW (please) 
if(num <= 100) { // "true" for any value less than or eaqual to 100 - should evaluate to false to go to next block
    if(num >= 50) {
        console.log("HEY!");
    }
} else {
    if (num < 103) {// "true" for any value greater than 103 - should evaluate to true to enter block
        if(num % 2 === 0){ // "true" for any even number - input an even number to enter block
            console.log("YOU GOT ME!"); // GOAL! -> number should be 102 to get here
        }
    }
}