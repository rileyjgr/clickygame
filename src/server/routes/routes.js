const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

module.exports = {
    react: async(app)=>{
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/img`));
        app.use(express.static(`${__dirname}/../../dist/style.css`));
        app.get('/', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    }
};
