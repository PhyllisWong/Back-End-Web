const express = require('express');
const app = express();

// Genres hardcoded data
genres = [
    {
        id: 0,
        title: 'Horror'
    },
    {
        id: 1,
        title: 'Romance'
    },
    {
        id: 2,
        title: 'Comedy'
    },
    {
        id: 3,
        title: 'Action'
    }
]

app.get('/genres', (req, res) => {
    res.json(genres)
})

app.get('/genres/:genre', (req, res, next) => {
    let genre = req.params.genre;
    res.json(genres[genre].title)
})

require('../app.js')(app);

// Server
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
