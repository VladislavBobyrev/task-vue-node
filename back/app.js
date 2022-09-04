// const express = require('express')
import express  from 'express';
// const router = require('./router/routes.js');
import router from './router/routes.js';
const app = express()
const PORT = 3001

app.use('/api', router);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`))