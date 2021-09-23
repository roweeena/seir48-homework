// ## Warmup - Raindrops

// Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

// - If the number contains 3 as a factor, output 'Pling'.
// - If the number contains 5 as a factor, output 'Plang'.
// - If the number contains 7 as a factor, output 'Plong'.
// - If the number does not contain 3, 5 or 7 as a factor, output the number as a string.

const raindrops = function (number) 
{ 
    let plingPlangPlong = "";
    // looping through 1 to num
    for(let i = 1; i <= number; i++) {

        // check if number is a factor
        if(number % i == 0) {
            if(i == 3)
            {
                plingPlangPlong += "Pling";
            }
            if(i == 5)
            {
                plingPlangPlong +="Plang";
            }
            if(i == 7)
            {
                plingPlangPlong +="Plong";
            }
        }
    }    
    
    //There probably a better way of doing this...
    if(plingPlangPlong == "Pling")
    {
        console.log(`${number} has 3 as a factor.`);
    }
    else if(plingPlangPlong == "Plang")
    {
        console.log(`${number} has 5 as a factor.`);
    }
    else if(plingPlangPlong == "Plong")
    {
        console.log(`${number} has 7 as a factor.`);
    }
    else if(plingPlangPlong == "PlingPlang")
    {
        console.log(`${number} has 3 and 5 as factors.`);
    }
    else if(plingPlangPlong == "PlingPlong")
    {
        console.log(`${number} has 3 and 7 as factors.`);
    }
    else if(plingPlangPlong == "PlangPlong")
    {
        console.log(`${number} has 5 and 7 as factors.`);
    }
    else if(plingPlangPlong == "PlingPlangPlong")
    {
        console.log(`${number} has 3, 5 and 7 as factors.`);
    }
    else
    {
        console.log(`${number} has neither 3,5 nor 7 as a factor.`);
    }
    console.log(`In raindrop-speak, this would be ${number}`);
}

raindrops(28);
// - 28 has 7 as a factor.
//   - In raindrop-speak, this would be a simple "Plong".

raindrops(1755);
// - 1755 has 3 and 5 as factors.
//   - In raindrop-speak, this would be a "PlingPlang".

raindrops(34);
// - 34 has neither 3, 5 nor 7 as a factor.
//   - Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".