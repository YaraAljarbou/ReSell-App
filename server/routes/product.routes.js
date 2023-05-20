const ProductController = require('../controllers/product.controller');
const UserController = require('../controllers/user.controller');
module.exports = (app) => {
   app.get('/api/products', ProductController.findAllProducts);
   app.post('/api/products/new', ProductController.createProduct);
   app.get('/api/products/:name', ProductController.findOneProduct);
   app.delete('/api/products/:id', ProductController.deleteProduct);
   app.put('/api/products/:id', ProductController.updateProduct);

   // user routs
   app.get('/api/users', UserController.findAllUsers);
   app.post('/api/users/new', UserController.createUser);
   app.get('/api/users/:name', UserController.findOneUser);
   app.delete('/api/users/:name', UserController.deleteUser);
   app.put('/api/users/:name/:product', UserController.updateUser);

   // cart routs
   //app.put("/api/users/:name/:product", UserController.addToCart);
   //app.delete("/api/users/:name/product/:product", UserController.removeFromCart);
}