let cartFns = require('./cart');
let carData = require('./data/cars');
// let {
//     cart,
//     total,
//     addToCart,
//     removeFromCart,
//     checkout
// } = cartFns

describe('Cart Properties', () => {
    test('Cart type and size should be an empty array', () => {
        expect(Array.isArray(cartFns.cart)).toEqual(true);
        expect(cartFns.cart.length).toEqual(0);
    });

    test('Total should equal 0', () => {
        expect(cartFns.total).toEqual(0);
    })

})

describe('Cart Methods', () => {
    afterEach(function() {
        cartFns.cart = [];
        cartFns.total = 0;
    });

    test('addToCart(car) should increment length and add car', () => {
        cartFns.addToCart(carData[0]);
        cartFns.addToCart(carData[1]);

        expect(cartFns.cart.length).toEqual(2);
        expect(cartFns.cart[0]).toEqual(carData[0]);
        expect(cartFns.cart[1]).toEqual(carData[1]);
    });

    test('addToCart(car) should increase total by price of car', () => {
        cartFns.addToCart(carData[0]);

        expect(cartFns.total).toEqual(carData[0].price);
    });
    
    test('removeFromCart(car) should decrement length and remove car', () => {
        cartFns.addToCart(carData[0]);
        cartFns.addToCart(carData[1]);
        cartFns.addToCart(carData[2]);
      
        cartFns.removeFromCart(1, carData[1].price);
      
        expect(cartFns.cart.length).toEqual(2);
        expect(cartFns.cart[0]).toEqual(carData[0]);
        expect(cartFns.cart[1]).toEqual(carData[2]);
    });
    
    test('removeFromCart(car) should decrease total by price of car', () => {
        cartFns.addToCart(carData[0]);
        cartFns.addToCart(carData[1]);
      
        cartFns.removeFromCart(1, carData[1].price);
      
        expect(cartFns.total).toEqual(carData[0].price);
    });
    
    test('checkout() should set cart length to 0 and total to 0', () => {
        cartFns.checkout();

        expect(cartFns.total).toEqual(0);
        expect(cartFns.cart.length).toEqual(0);
    });
})