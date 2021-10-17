scoreValues = [1, 2, 4, 8, 16, 32, 64, 128];
scoreItems = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"]

function findAllergenScore(stringOfAllergies)
{
    let values = [];
    let sum = 0;

    if (stringOfAllergies.length === 0)
    {
        return "No allergies. Lucky";
    }

    for (let i = 0; i < scoreItems.length; i++)
    {
        for (let j = 0; j < stringOfAllergies.length; j++)
        {
            if (scoreItems[i] === stringOfAllergies[j])
            {
                values.push(i);
            }
        }
    }

    for (let i = 0; i < scoreValues.length; i++)
    {
        for (let j = 0; j < values.length; j++)
        {
            if (i === values[j])
            {
                sum = sum + scoreValues[i];
            }
        }
    }

    return sum;
}

console.log(findAllergenScore(["shellfish", "strawberries"]));