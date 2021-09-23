// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.

const cashRegister = function(cart) {
  let total = 0;
  for (let item in cart) {
    total += cart[item];
  }
  return total;
}

const cartForParty = {
  banana: 1.25,
  handkerchief: 0.99,
  Tshirt: 25.01,
  apple: 0.60,
  nalgene: 10.34,
  proteinShake: 22.36
};

console.log(cashRegister(cartForParty)); // 60.55
