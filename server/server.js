//requires
const express = (require('express'));
const app = express();
const bodyParser = (require('body-parser'));
//routers
const messages = require('./modules/routes/messages')

//uses
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/messages', messages);
//globals
const PORT= 5000;

//spin up server
app.listen(PORT, ()=>{
    console.log('Server is up on: ', PORT);
    
})

