// # The Cash Register
//
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart.
// Example
//
// ```
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55
// ```

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
}

const cashRegister = (cart) => {
  let cartPrice = 0;
  for (let i = 0; i < Object.values(cart).length; i++) {
    cartPrice += parseFloat(Object.values(cart)[i]);
  }
  return cartPrice;
}

cashRegister(cartForParty);
console.log(cashRegister(cartForParty));
