//requires
const express = (require('express'));
const bodyParser = (require.urlencoded({extended:true}));
//globals
const PORT= 5000;
//uses
app.use(express.static('server/public'));
//spin up server
app.listen()