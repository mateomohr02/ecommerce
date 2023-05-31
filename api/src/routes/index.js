const { Router, request } = require("express");
const { User, Product } = require("../db.js");
const axios = require("axios");
const { where } = require("sequelize");
const { getAllProducts } = require("./controllers/controllers.js");
//const adminValidation = require("./middlewares/adminValidation.js")

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

//RUTAS USER CLIENT

router.get("/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/:name", async (req, res) => {
  
  try {
    const { name } = req.params;
    
    const products = await getAllProducts();
    
    // Filtrar los productos por el nombre
    const filteredProducts = products?.filter( p => p.productName.toLowerCase().includes(name.toLowerCase()));

    if (filteredProducts) res.status(200).json(filteredProducts)    

  } catch (error) {
    res.status(400).json({ message: "Error al realizar la búsqueda" });
  }

});


router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params
    const products = await getAllProducts()
    const filteredProducts = products?.filter(p => p.category === category)

    if (filteredProducts) res.status(200).json(filteredProducts)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})


router.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params
    const products = await getAllProducts()
    const product = products?.filter(p => p.id === id)
    if (product) {
      res.status(200).json(product)
    }
  } catch (error) {
      res.status(400).json({error:error.message})
  }
})

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

router.get("/admin/products", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).json(products)
  } catch (error) {
    res.status(400).json({message: error.message})
  }
})

router.get("/admin/product/:id", async (req, res) => {
  try {
    const { id } = req.params
    const products = await getAllProducts()
    const product = products?.filter(p => p.id === id)
    if (product) {
      res.status(200).json(product)
    }
  } catch (error) {
      res.status(400).json({error:error.message})
  }
})

router.post("/admin/product",(req, res) => {
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
