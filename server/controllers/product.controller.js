const { Product } = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
   Product.find()
      .then(product => res.json(product))
      .catch(err => res.json(err));
}

module.exports.createProduct = (req, res) => {
   Product.create(req.body)
      .then(product => res.json(product))
      .catch(err => res.json(err));
}

module.exports.findOneProduct = (req, res) => {
   Product.findOne({name: req.params.name })
      .then(product => res.json(product))
      .catch(err => res.json(err));
}

module.exports.deleteProduct = (req, res) => {
   Product.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json(err));
}

module.exports.updateProduct = (req, res) => {
   Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updatedProduct => res.json({ product: updatedProduct }))
      .catch(err => res.json(err));
}