const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOUR CODE GOES HERE:
// This can be done in a single line as such:
document.querySelectorAll("h1 span").forEach((span, i) => span.style.color = colors[i]);