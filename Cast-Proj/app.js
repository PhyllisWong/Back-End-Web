const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

// FIXME: This json object is not quite working yet
module.exports = (app) => {
  // Data JSON object
  const castData = {
    {
      id: 1,
      title: 'Under The Dress',
      cast: {
        Ellis: 'Marlyn Monroe',
        Jared: 'Brad Pitt',
        Eric: 'Matt Damon'
      }
    },

    {
      id: 2,
      title: 'Game of Thrones',
      cast: {
        Targaeryan: 'Dani',
        Snow: 'Joe',
        Stark: 'Ansel',
        Lanister: 'Kendra'
      }
    },

    {
      id: 3,
      title: 'Breaking Bad',
      cast: {
        Jessie: 'Aaron Paul',
        White: 'Brian Cramson',
        Saul: 'Bob Odenkirk'
      }
    }

  };
  // Routes
  // Root route
  app.get('/', (req, res) => {
    // let id = req.params.id;
    res.json(castData)
  });




  app.get('/cast/:id', (req, res) => {
    // console.log(castData.one);
    let id = req.params.id;
    // console.log(castData.one)

    console.log(castData.id)
    res.json(castData.id)
  })
}

// app.listen(port, () => {
//   console.log('Listening on 3000');
// })
