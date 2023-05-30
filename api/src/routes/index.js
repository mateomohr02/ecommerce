const { Router } = require("express");
const { User, Product } = require("../db.js");
const axios = require("axios");
const { where } = require("sequelize");
const { getAllProducts } = require("./controllers/controllers.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//RUTAS USER CLIENT

router.get("/", (req, res) => {
  res.status(200).json("¡Se viene ecommerce!");
});

router.get("/home", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, mail, password, isAdmin } = req.body;

    const user = await User.create({
      name,
      mail,
      password,
      isAdmin: isAdmin || false,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json("Error al crear el usuario");
  }
});

//RUTAS ADMIN

router.post("/product", async (req, res) => {
  try {
    const {
      productName,
      brand,
      price,
      stock,
      image,
      description,
      category,
    } = req.body;

    const product = Product.create({
      productName,
      brand,
      price,
      stock,
      image,
      description,
      category,
    });

    res.status(200).json("El producto se añadió correctamente");

  } catch (error) {
    res.status(400).json("Error al añadir el producto");
  }
});

  

module.exports = router;
