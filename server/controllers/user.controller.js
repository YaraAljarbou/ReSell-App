const { User } = require('../models/user.model');
const { Product } = require('../models/product.model');

module.exports.findAllUsers = (req, res) => {
   User.find()
      .then(user => res.json(user))
      .catch(err => res.json(err));
}

module.exports.createUser = (req, res) => {
   User.create(req.body)
      .then(user => res.json(user))
      .catch(err => res.json(err));
}

module.exports.findOneUser = (req, res) => {
   User.findOne({name: req.params.name })
      .then(user => res.json(user))
      .catch(err => res.json(err));
}

module.exports.deleteUser = (req, res) => {
   User.deleteOne({ name: req.params.name })
      .then(result => res.json({ result: result }))
      .catch(err => res.json(err));
}

module.exports.updateUser = (req, res) => {
   User.findOneAndUpdate({ name: req.params.name }, {$push: {cart: req.params.product}})
      .then(updatedUser => res.json({ user: updatedUser }))
      .catch(err => res.json(err));
}

//////////////////////////////////////////////////////////////////////////////////////////////////

module.exports.addToCart = (req, res) => {
   User.findOneAndUpdate({name: req.params.name}, {$push: {cart: req.params.product}})
      .then(res.json({msg: "ok"}))
      .catch(err => res.json(err));
}

module.exports.deleteNinjutsu = (req, res) => {
   Ninja.findOneAndUpdate({ _id: req.params.ninja_id }, {$pull: {ninjutsu: {_id: req.params.ninjutsu_id}}}, { runValidators: true, new: true })
      .then(editedNinja => res.json({ ninja: editedNinja }))
      .catch(err => res.status(400).json(err));
}
