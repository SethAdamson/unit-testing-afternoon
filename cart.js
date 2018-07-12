const cars = require('./data/cars');

module.exports = {
  cart: [],
  total: 0,

  addToCart: function(car) {
    this.cart.push(car);
    this.total += car.price;
  },

  removeFromCart: function(idx, price) {
    this.cart.splice(idx, 1);
    this.total -= price;
  },
  
  checkout: function() {
    this.cart = [];
    this.total = 0;
  }
};