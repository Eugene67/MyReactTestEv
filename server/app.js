import express from 'express';
const app = express();

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./employee.json', 'utf8'));
var str = JSON.stringify(obj);
app.get('/', (req, res) =>
{res.send('str')});

const server = app.listen(8080, () =>
{console.log('Server is app and running on port 8080')});