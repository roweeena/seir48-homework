const squareNumber= function (number){
  const squareOfTheNum= number * number;
  return squareOfTheNum
  console.log(`The result of squaring the number ${number} is ${squareOfTheNum}.`);
};
const squareNum= squareNumber (10);
console.log(squareNum);


const halfNumber= function (number){
  const halfOfTheNum= number / 2;
  return halfOfTheNum
  console.log(`Half of ${number} is ${halfOfTheNum}.`);
};
const halfNum= halfNumber (10);
console.log(halfNum);

const areaOfCircle= function (radius){
  const area= Math.PI * radius * radius;
  return area
  console.log(`The area for a circle with radius ${radius} is ${area}.`);

};
const areaCircle= areaOfCircle (10);
console.log(areaCircle);

const percentOf= function (number1, number2){
  const percentOfTwoNum= (number1 / number2) * 100;
  console.log(`${number1} is ${percentOfTwoNum}% of ${number2}.`);
return percentOfTwoNum
};
const percentageOfTwoNum= percentOf (10,20);
console.log(percentageOfTwoNum);



const num1= function (number){ //Half the number
  const halfOfTheNum= number / 2;
  return halfOfTheNum
  console.log(`Half of ${number} is ${halfOfTheNum}.`);

};
const answer1= num1 (100);
console.log(answer1);

const num2= function (answer1){ //Square of the number
  const squareOfTheNumber= answer1 * answer1;
  return squareOfTheNumber
  console.log(`The result of squaring the number ${answer1} is ${squareOfTheNumber}.`);
};
const answer2= num2 (answer1);
console.log(answer2);


const num3= function (answer2){//Area of the circle
  const areaOfCir= Math.PI * answer2 * answer2;
  return areaOfCir
  console.log(`The area for a circle with radius ${answer2} is ${areaOfCir}.`);
};
const answer3= num3 (answer2);
console.log(answer3);


const num4= function (answer3, answer2){//Percentage
  const percOfArea= (answer3 / answer2) * 100;
  return percOfArea
  console.log(`${answer3} is ${percOfArea}% of ${answer2}.`);
};
const answer4= num4 (answer3, answer2);
console.log(answer4);
