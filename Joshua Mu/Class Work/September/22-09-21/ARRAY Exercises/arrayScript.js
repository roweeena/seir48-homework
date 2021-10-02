colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Pink"];

for (let i = 0; i < colors.length; i++)
{
    if (i === 0)
    {
        console.log(`My 1st choice of color is ${colors[i]}`);
    }
    else if (i === 1)
    {
        console.log(`My 2nd choice of color is ${colors[i]}`);
    }
    else if (i === 2)
    {
        console.log(`My 3rd choice of color is ${colors[i]}`);
    }
    else
    {
        console.log(`My ${i + 1}th choice of color is ${colors[i]}`);
    }
}