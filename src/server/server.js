const express= require('express');
const lowdb = require('lowdb');
const routes = require('./routes/routes.js');

const app = express();

const port = process.env.PORT || 3000;

routes.react(app);

app.listen(port);

console.log('Server Running.');

