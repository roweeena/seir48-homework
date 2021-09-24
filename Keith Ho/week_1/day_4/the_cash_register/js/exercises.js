// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cartObj) {
  let total = 0;

  for ( let key in cartObj ) {
    total = total + parseFloat(cartObj[key]);
  }

  return total;
}

console.log( cashRegister(cart) );
