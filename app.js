const express = require("express");
const post = require("./data/pizzas");
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.json('Hello');
});

//nella route bacheca abbiamo come risposta un json che ha come parametri post e la lunghezza
app.get('/bacheca', (req, res) => {
    res.json({
        posts: post.data,
        length: post.data.length,
    })

});

app.listen(port, () => {
    console.log("Server on");
});

