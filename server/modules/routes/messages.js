const express = require('express');
const router = express.Router();

let messages =[{from: 'Daniel', text: 'Making it happen.'}];

router.get('/', (req,res) => {
    console.log('/messages GET router hit');
    res.send(messages);    
})//end GET call
router.post('/', (req,res) => {
    console.log('/messages POST router hit');
    res.send('Whack messages');    
})//end POST call

module.exports = router;
