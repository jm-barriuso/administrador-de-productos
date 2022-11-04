const { Product } = require('../models/product.models');

module.exports.findAllProducts = (req,res) => {
    Product.find()
        .then((products)=> res.json({ products: products}))
        .catch((err) => res.json({ message: "Something went wrong", error:err}));
}

module.exports.findProduct = (req,res) =>{
    Product.findOne({_id:req.params.id})
        .then(product => res.json({ product: product}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.createProduct = (req,res) =>{
    Product.create(req.body)
        .then(newProduct => res.json({ product: newProduct}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.updateProduct = (req,res) =>{
    Product.findOneAndUpdate({_id:req.params.id}, req.body,{new:true})
        .then(product => res.json({ product: product}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};

module.exports.deleteProduct = (req,res) =>{
    Product.deleteOne({_id:req.params.id})
        .then(product => res.json({ product: product}))
        .catch(err => res.json({ message: "Something went wrong", error:err}));
};
