// Copied from Express "Hello World" example on expressjs.com
const express = require('express');
const app = express();
const port = 3000;


// Default code from Express
// req = an incoming (req)uest from the "client"
// res = an outgoing (res)ponse from the "server"
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
// Routing
// route to /cat -> respond with "meow"
app.get('/cat', (req, res) => {
    res.send("meow");
    console.log(`Your req triggered a res\nreq: ${ req.baseUrl }\nres:${ res }`);
})

// route to /dog -> respond with "woof"
app.get('/dog', (req, res) => {
    res.send("woof");
    console.log(`Your req triggered a res\nreq: ${ req }\nres:${ res }`);
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})