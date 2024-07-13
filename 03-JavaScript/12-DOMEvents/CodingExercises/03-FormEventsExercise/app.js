// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector("#list");

// Listen for the form submission
form.addEventListener('submit', (e) => {
    // When the form is submitted, prevent the default behavior
    e.preventDefault();
    // Grab the quantity input value and the product input value
    let quantity = document.querySelector("#qty").value;
    let product = document.querySelector("#product").value;
    // Create a new <li> element.  
    // Set the text on the new <li> to include the quantity and product name from the form.
    const li = document.createElement("li");
    li.innerText = `${ quantity } ${ product }`
    // Append the new <li> to the <ul> on the page
    ul.append(li);
    // Reset the inputs
    form.reset();
});
