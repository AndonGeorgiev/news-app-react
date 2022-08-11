const express = require('express');
const cors = require('cors');
const routes = require('./../routes');


function configExpress(app){
    app.use(cors({
        orig: 'http://localhost:3000/',
        credentials: true
    }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(routes);

}

module.exports = configExpress;