// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.

const plingPlangPlong = function (magicNumber) {
    let magicResult = '';
    if (magicNumber % 3 === 0) {
        magicResult ='Pling';
        // magicResult += 'Pling';
    } if (magicNumber % 5 === 0) {
        magicResult = magicResult + 'Plang';
        // magicResult += 'Plang';
    } if (magicNumber % 7 === 0) {
        magicResult = magicResult + 'Plong';
        // magicResult += 'Plong';  
    } if (magicResult === '') {
        magicResult = magicNumber.toString();
    }
    console.log(magicResult);
}

// ### Examples

// - 28 has 7 as a factor.
plingPlangPlong(28);
//   - In raindrop-speak, this would be a simple "Plong".
// - 1755 has 3 and 5 as factors.
plingPlangPlong(1755);
//   - In raindrop-speak, this would be a "PlingPlang".
// - 34 has neither 3, 5 nor 7 as a factor.
plingPlangPlong(34)
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".