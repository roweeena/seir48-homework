function sumVars(firstList, secondList)
{
    let firstSum = 0;
    let initialList = "";
    let secondSum = 0;
    let secondaryList = "";
    let totalSum = 0;

    for (let i = 0; i < firstList.length; i++)
    {
        firstSum = firstSum + firstList[i];

        if (i !== firstList.length - 1)
        {
            initialList = initialList + firstList[i] + " + ";
        }
        else 
        {
            initialList = initialList + firstList[i]
        }
    }

    for (let j = 0; j < secondList.length; j++)
    {
        secondSum = secondSum + secondList[j];

        if (j !== secondList.length - 1)
        {
            secondaryList = secondaryList + secondList[j] + " + ";
        }
        else 
        {
            secondaryList = secondaryList + firstList[j]
        }
    }

    totalSum = firstSum + secondSum;

    return `[${initialList}] + [${secondaryList}] = ${totalSum}`;

}

console.log(sumVars([5,6,7,8], [2.4,5,9,6]));