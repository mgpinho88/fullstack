const message = `What would you like to do
    Enter \"new\" todo for a new todo
    Enter \"list\" to list out your todos
    Enter \"delete\" to remove a todo from the list
    Enter \"quit\" to exit the program`;

let quit = false;
const todos = [];
// Create an action variable but do not yet assign it so anything. This will happen inside the loop 
let action;

// Start Guessing
while (!quit) {
    action = prompt(message).toLowerCase().trim();
    console.log(`Start of loop.\nAction selected is "${ action }"`);
    if (action === "new") {
        todos.push(prompt("What would you like to add to your todo list?"));
    } else if (action === "list") {
        console.log("*".repeat(10))
        // Using a for loop will take up 3 lines of code
        // for(let todo of todos) {            
        //     console.log(`${ todos.indexOf(todo) } : ${ todo }`);
        // }
        // You can use forEach method of the array to log the results
        todos.forEach((todo, i) => console.log(`${ i }: ${ todo }`));
        console.log("*".repeat(10))
    } else if (action === "delete") {
        let index = prompt("Enter the number that corresponds to the action you wish to remove from your list.");
        if (parseInt(index) >= 0 && parseInt(index) <= todos.length) {
            todos.splice(index, 1);
        } else {
            alert("You did not input a valid index. Please list out your todos and input a number from the list!")
        }
    } else if (action === "quit") {
        quit = true;
        alert("You chose to quit. Go accomplish your todos and have a wonderful day!")
    } else {
        alert("Please select a valid option from the list.")
    }
}
