// Imports to make this an express project
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';

// Because we are making this a module the 'require()' for improrts does not work
// Use the url and path from the imports above
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
    console.log(`Application has started on port ${port}`);
})