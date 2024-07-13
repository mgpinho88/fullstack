// The h1 should start with the text "Enter Your Username" (I've done that for you, already in the markup)
const header = document.querySelector("h1");
const input = document.querySelector("#username");
const initialString = header.innerText;

// Whenever an input event is fired on the <input> element, update the <h1> so that it displays "Welcome, " plus the current value from the text input.  Take a look at the gif below to see how it should work.
input.addEventListener('input', (e) => {
    e.preventDefault();
    header.innerText = `Welcome, ${ input.value }`;
    // If the <input> goes back to being empty, update the <h1> so that it once again says "Enter Your Username"
    if (input.value === 0) {
        header.innerText = initialString;
    }
});


