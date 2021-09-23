const raindrops = function(num) {

  let result = "";

  if ( num % 3 ===0 ) {
    result = "Pling";
  } if ( num % 5 ===0 ) {
    result = result + "Plang";
  } if ( num % 7 ===0 ) {
    result = result + "Plong";
  } if (result === "") {
    result = num.toString();
  }

  console.log(result);

    // if(num % 3 === 0 ) {
    //   console.log("Pling");
    // } if(num % 5 ===0 ) {
    //   console.log("Plang");
    // } if(num % 7 ===0 ) {
    //   console.log("Plong");
    // } if(num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
    //   console.log(num);
    // } if(num % 3 === 0 && num % 5 === 0) {
    //   console.log("PlingPlang");
    // } if(num % 3 === 0 && num % 7 === 0) {
    //   console.log("PlingPlong");
    // } if(num % 5 === 0 && num % 7 === 0) {
    //   console.log("PlangPlong");
    // }

}

raindrops(28);
raindrops(1755);
raindrops(34);
