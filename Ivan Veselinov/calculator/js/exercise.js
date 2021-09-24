console.log("try is it working");
// First exercise
const squareNum = function (a, result) {
  result= a * a;
  console.log(`Square of ${a} is ${result}`);
}
squareNum(4);

// Secound exercise
const halfNum = function (b, half){
  half = b /2;
  console.log (`Half number of ${b} is number ${half}`);
}
halfNum(4);

// Third exercise
const persentOfCircle = function (a, b, sum){
  sum = a / b * 100;
  console.log(`Number ${a} is ${sum}% of ${b}`);
}
persentOfCircle(10, 11);

// Fourth exercise
const areaOfCircle = function (radius, a){
  radius = 2 * radius * Math.PI;
  radius= radius.toFixed(2);
  console.log(`The area of circle ${a} is ${radius}`);
}
areaOfCircle(2);

//BONUS!!
const overFall = function (a, b){
  squareNum(a);
  halfNum(a);
  persentOfCircle(a, b);
  areaOfCircle(a);
}

//Other ones!

const drEvil = function(a){
  if( a < 1000000){
    console.log(`You have ${a} $ Dollars`);
  }else {
    console.log(`You have ${a} Pinky`);
  }
}
drEvil();

// Didnt finish it :(
const mixUp = function(a, b){
  const first = Math.floor( Math.random() * a.length );
  const second = Math.floor( Math.random() * b.length );
  console.log(`Original words are ${a} and ${b} and mixed one are ${first} and ${second}`);

}
mixUp("Ivan", "Veselinov");
