const { Product } = require('../../db');

async function getAllProducts(){
    try {
        const products = await Product.findAll();
        return products;
      } catch (error) {
        throw new Error('Error al obtener los productos.');
      }
}

module.exports = {
    getAllProducts,
}