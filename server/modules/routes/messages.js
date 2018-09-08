const express = require('express');
const router = express.Router();

let messages =[];

router.get('/', (req,res) => {
    console.log('/messages GET router hit');
    res.send(messages);    
})//end GET call
router.post('/', (req,res) => {
    console.log('/messages POST router hit', req.body);
    messages.push(req.body);
    res.sendStatus(200);    
})//end POST call

module.exports = router;
