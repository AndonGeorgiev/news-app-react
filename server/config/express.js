const express = require('express');
const cors = require('cors');


function configExpress(app){
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true}));

}

module.exports = configExpress;