console.log("IS THIS WORKING ?");
const squareNumber = function (a) {
  let b = a ** 2;
  console.log(`The result of squaring the number ${a} is ${b}.`);
  return b;
};
squareNumber(6);
const halfNumber = function (c) {
  let d = c / 2;
  console.log(`Half of ${c} is ${d}.`);
  return d;
};
halfNumber(4);
const percentOf = function (e, f) {
  let g = (e / f) * 100;
  console.log(`${e} is ${g}% of ${f}`);
  return g;
};
percentOf(2, 4);
const areaOfCircle = function (radius) {
  let area = Math.PI * radius ** 2;
  let roundArea = Math.round(area);
  console.log(`The area for a circle with radius ${radius} is ${roundArea}.`);
};
areaOfCircle(2);
const secondPart = function (ess) {
  let halfOf = ess / 2;
  let squareOf = halfOf ** 2;
  let areaOf = Math.PI * squareOf ** 2;
  let percentage = (areaOf / areaOf ** 2) * 100;
  console.log(`${halfOf} is half of ${ess} and ${squareOf} and ${areaOf}.`);
};
secondPart(2);
