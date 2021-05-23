const express = require('express');
const pool = require('../modules/pool');


const router = express.Router();



// POST
router.put('/', (req, res, next) => {
    pool
    .query(`UPDATE timer SET timerData=$1 WHERE id=1;`, [req.body])
    .then((results) => {
      res.send(results.rows);
    }).catch(err => {
      res.sendStatus(500);
      console.log('Error in GET /timer', err);

    })
});


// GET
router.get('/', (req, res) => {
    pool
      .query(`SELECT * FROM "timer" WHERE id=1;`)
      .then((results) => {
        res.send(results.rows);
      }).catch(err => {
        res.sendStatus(500);
        console.log('Error in GET /timer', err);
  
      })
  });