# Loops Exercises
## JavaScript Guessing Game
Time to practice loops in JavaScript. Write a guessing game where a number is randomly generated and stored in a variable. Prompt the user to guess the number. The user should input a number to the promot and using JavaScript you should validate that the user has properly entered a valid number. Some things to note
1. The game does not end until the user guesses the correct number
2. The input must be a VALID number. What makes the number valid:
    * The number is a whole number greater than zero (no negative)
    * The user input cannot be a string or letter

## ToDo List Practice
Your goal is to write a program that will store a "To Do" list. This list will store a users input of list of things they want to accomplish. Your program should handle the following:
* "new" - This option will prompt the user to add a new item to the user's "To Dos"
* "list" - This options will list out all the user's "To Do" items as a list in the console
* "delete" - This option will promt the user for which item they would like to delete
* "quit" - This option will end the program from continuing to run 

## 01 :: Our First For Loop Practice
Please use a for loop to print out the classic chorus lyrics of "I'm Blue" by [Eiffel 65](https://www.youtube.com/watch?v=BinWA0EenDY).  **Use a for loop to print out the string `"Da ba dee da ba daa"` exactly 6 times.  No more, and no less.**

## 02 :: More For Loops Practice
Let's try writing a for loop that counts down, rather than up. Please write a for loop that prints the following numbers (in this order):
```JavaScript
25
20
15
10
5
0
```

## 03 :: Iterating Arrays Exercise
I've provided you with an array of strings called `people`. Loop over the `people` array with a for loop, **printing out each name in uppercase letters**.  Your result should look something like:
```JavaScript
SCOOBY
VELMA
DAPHNE
SHAGGY
FRED
Hint: use i from your loop as an array index!
```

## 04 :: For...Of Practice
Let's practice using `for...of`. I've provided you with an array called `numbers`.  Please use a `for...of` loop to loop over it, and print out the square of each value (the number multiplied by itself).

NOTES:
1. Udemy's coding exercise platform does NOT support the `**` operator.
2. You could accomplish this by using a `while` loop or a `for` loop, but please use a `for...of` loop! Unfortunately, I can't enforce the type of loop you use, but please I'm begging you to use a `for...of`.  I will hunt you down if you don't.  Thank you and have a great day!

Your output should look like this:
```JavaScript
1
4
9
16
25
36
49
64
81
```