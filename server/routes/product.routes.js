

const ProductController = require("../controllers/product.controller");


module.exports = app => {
    app.get("/api/products",ProductController.findAllProducts);
    app.get("/api/products/:id",ProductController.findProduct);
    app.post("/api/products/new",ProductController.createProduct);
    app.put("/api/products/update/:id",ProductController.updateProduct);
    app.delete("/api/products/delete/:id",ProductController.deleteProduct);

};