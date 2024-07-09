# Basics Exercises
## 01 :: Map Practice
It's time to get practice with the map method!

Define a variable named `firstNames` and assign it to the result of mapping over the existing array, `fullNames`, so that `firstNames` contains only the first names of the Harry Potter characters from the `fullNames` array.

e.g.,
```JavaScript
console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']
```

**Please note:**
* The `fullNames` array is an array of objects with each object containing properties for the first and last names of each character. You may need to click the "Reset code" link if you do not see the `fullNames` array pre-loaded into the exercise's `index.js` file.
* This exercise has been updated, you may see Q&A threads from this lecture that relate to the original exercise which no longer exists. They can be ignored.

## 02 :: Arrow Function Exercise
Write an **arrow function expression** called `greet`.  It should accept a single string argument, representing a person's name.  It should return a greeting string as shown below:

`greet("Hagrid")` should return this string: `Hey Hagrid! `
`greet("Luna")` should return this string: `Hey Luna!`

**Be sure to use arrow function syntax!**

## 03 :: Filter Exercise
Let's get some practice using the filter method. Write a function called `validUserNames` that accepts an array of usernames (strings).  **It should return a new array, containing only the usernames that are less than 10 characters**. For example:
```JavaScript
validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);
// => ["mark", "carrie98", "MoanaFan"]
```

**Note:** The syntax for this solution might be a little strange to you at this point in the course because it requires you to write the code, that you just learned in the previous lecture, inside of a function. e.g.,
```JavaScript
function validUserNames(usernames) {
  // your code here
}
```

or if you want to get fancy with an arrow function:
```JavaScript
const validUserNames = usernames => // your code here;
```

There is no need to define an actual array of usernames, that part is done for you behind the scenes.

## 04 :: Some/Every Exercise
Define a function called `allEvens` that accepts a single array of numbers.  **If the array contains all even numbers, return `true`;  otherwise, return `false`**.  Use some or every to help you do this!  (only one of them is actually useful here)
```JavaScript
allEvens([2,4,6,8]) //true
allEvens([1,4,6,8]) //false
allEvens([1,2,3]) //false
```