const express = require('express');
const app = express();

// Data JSON object
const castData = {
  title: 'Under The Dress',
  cast: {
    Ellis: 'Marlyn Monroe',
    Jared: 'Brad Pitt',
    Eric: 'Matt Damon'
  },
  title: 'Game of Thrones',
  cast: {
    Targaeryan: 'Dani',
    Snow: 'Joe',
    Stark: 'Ansel',
    Lanister: 'Kendra'
  },
  title: 'Breaking Bad',
  cast: {
    Jessie: 'Aaron Paul',
    White: 'Brian Cramson',
    Saul: 'Bob Odenkirk'
  }
}

// Routes
// Root route
app.get('/', (req, res) => {
  // console.log(castData)
  res.json(castData['title']);
});

app.listen(3000, () => {
  console.log('Listening on 3000');
})
