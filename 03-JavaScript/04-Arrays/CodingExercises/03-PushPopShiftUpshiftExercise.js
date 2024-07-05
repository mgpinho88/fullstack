const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:
// Remove the first element, "The Moon", from the `planets` array.  The moon is not a planet!
planets.shift();
// Add in "Saturn" at the very end of the `planets` array
planets.push("Saturn");
// Add "Mercury" as the first element in the `planets` array.
planets.unshift("Mercury");