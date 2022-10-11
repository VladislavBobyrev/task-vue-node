// const express = require('express')
import express from 'express';
import bodyParser from 'body-parser'
// const router = require('./router/routes.js');
import router from './router/routes.js';
const app = express()
const PORT = 3001

app.use(bodyParser.json());
app.use('/api', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))