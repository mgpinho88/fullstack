// Copied from Express "Hello World" example on expressjs.com
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// For more information on templating engines with express please see documentation
// https://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'ejs');
// Set the path so that you can start the application outside of it's main directory
app.set('path', path.join(__dirname, '/views'));

// Generate view and pass a random number to simulate data being passed into your into your HTML
app.get('/random', (req, res) => {
    // Generate a common number to be passed into your page
    const rand = Math.floor(Math.random()*10) +1;
    res.render('decision-making', { rand });
})


// Be sure to render your home page
app.get('/', (req, res) => {
    res.render('home');
   });


// Assign the port this app is listening on
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})