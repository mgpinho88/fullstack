// const mystery = ''; //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE
const mystery = 'P7mystery';


// LEAVE THIS CODE ALONE! (pretty please)
// If statement must evaluate to true to enter block to print line to console
// "mystry[0]" -> the first index of mystry should evaluate to 'P' -> must be a capital
// the length of "mystery" should be greater than 5 characters long
// "mystery.index('7')" is searching the string for the character 7
//   -> if the result is NOT -1; in other word we need to include "7" in the mystery string
if(mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1){
    console.log("YOU GOT IT!!!"); // GOAL -> Print this line
}