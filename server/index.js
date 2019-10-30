const express = require('express');
const path = require('path');

const app = express();
const fs = require('fs');
// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    let list = JSON.parse(fs.readFileSync("json/employee-details.json"));
  //  let student = (rawdata);
    res.json(list);
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);