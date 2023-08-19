const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    console.log(req.body)

    const feeling = req.body.feeling
    const understanding =  req.body.understanding
    const support = req.body.support
    const comments = req.body.comments

    const queryText = `INSERT INTO "feedback" 
                    ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;

    const queryParams = [feeling,  understanding, support, comments]

    pool.query(queryText,queryParams)
        .then((result) => {
            console.log('Hey from the post')
            res.sendStatus(201)
        }).catch((error) => {
            console.log('Error with the POST', error)
            res.sendStatus(500)
        })
})

module.exports = router;