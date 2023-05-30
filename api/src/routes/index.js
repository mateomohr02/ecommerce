const { Router } = require('express');
const {User, Product} = require("../db.js")
const axios = require('axios');
const { where } = require('sequelize');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/', (req, res) => {
    res.send('¡Se viene ecommerce!');
  });






module.exports = router;
