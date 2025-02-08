const express = require('express');
const app = express();
const port = 3000;

// updating index.js
app.use(express.static('public'));

// adding route to handle post request
app.use(express.json());

app.use((req, res, next) => {
    console.log(`From middleware: ${req.method} ${req.url}`);
    next();
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('Something broke!');
})

app.post('/submit', (req, res) => {
    const data = req.body;
    res.send(`Data received: ${JSON.stringify(data)}`);
})

// handle item submissions
app.post('/items', (req, res) => {
    const item = req.body.item;
    items.push(item);
    res.send(`Item added: ${item}`);
})

app.get('/', (req, res) =>{
    res.send('Hello, World!');
});

// adding about route
app.get('/about', (req, res) => {
    res.send('About Page');
});

const items = ['Orange', 'Banana', 'Mango'];

app.get('/items', (req, res) => {
    res.send(items);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

