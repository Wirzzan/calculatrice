const express = require('express');
const calculatorRoutes = require('./routes/calculator.routes');
const path = require('path'); 
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/calc', calculatorRoutes);


module.exports = app;
