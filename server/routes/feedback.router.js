const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req,res) => {
    console.log('this is:', req.body)

    const feeling = req.body.feelingReducers
    const understanding =  req.body.understandingReducers
    const support = req.body.supportReducers
    const comments = req.body.feedbackReducers

    const queryText = `INSERT INTO "feedback" 
                    ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4);`;

    const queryParams = [feeling,  understanding, support, comments]

    console.log('this is params:', queryParams)

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