# Connecting Express to a Mongo Database
### Quick Note
As noted in the base reop, these projects are derived from the Colt Steele web developer boot camp. One notable difference between the course and this project is that here we are using `"type": "module"` in our `package.json` since this is more in line with modern applications. The code is now written with `import` statements rather than the `require()` function, thus making this application more asynchronous. 

## Getting Started
In this sample project, we will be creating the backend component of a store using MongoDB as our database and express as our server. In this `readme.md` we will go step-by-step to create the server and connections to MongoDB. We will be using express, ejs, and mongoose in this project. In the terminal navigate to or create a directory for the project. Once in the directory run the command:
```Bash
npm init
``` 
Followed by:
```Bash
npm install express ejs mongoose
```

## Step 1 :: Basic Setup
Using what we've learned about Express and Mongoose we can combine the two and create some routes to our database. For this course, we are using MongoDB.
The entry point in our application will be index.js and in this directory, we begin by requiring Express and setup our paths. 


```JavaScript
// This is the "Hello World" example provided by Express
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
 res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```

Similarly, we will need to connect to our MongoDB using Mongoose.
```JavaScript
const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/<DB_Name>")
```

If setup correctly you should be able to run `npm start` and if you have any logs they should at this point appear in the terminal.

## Step 2 :: Creating Our Models
Our model will be a representation of our data in MongoDB. To begin you will want to create a new JavaScript file called `product.js` which will be used to model the products in our database. We will also establish a connection to the database in `product.js` then create a `seeds.js` file which we will use to populate our database with test data.
1. Create the file `product.js` and import Mongo into the project. Since `index.js` has the connection there is no need to add that connection here BUT you will need to use mongoose so `require('mongoose')` is still necessary. Additionally, you will need to create a schema for the DB and export the file so that it can be used elsewhere in your project. 

```JavaScript
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price: Number,
    category: String
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
```
Now that our schema is established you will want to create a file that will seed some data. In this example, we've created `seeds.js` as that file to populate MongoDB with some dummy
