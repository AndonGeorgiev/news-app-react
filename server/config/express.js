const express = require('express');
const cors = require('cors');
const routes = require('./../routes');


function configExpress(app){
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));
    app.use(routes);

}

module.exports = configExpress;