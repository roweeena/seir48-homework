function MaxOfTwoNumbers(_numberOne, _numberTwo)
{
    if (_numberOne > _numberTwo)
    {
        return _numberOne;
    }
    else
    {
        return _numberTwo;
    }
}

function MaxOfThree(_firstNumber, _secondNumber, _thirdNumber)
{
    if (_firstNumber > _secondNumber && _firstNumber > _thirdNumber)
    {
        return _firstNumber;
    }
    else if (_secondNumber > _firstNumber && _secondNumber > _thirdNumber)
    {
        return _secondNumber;
    }
    else
    {
        return _thirdNumber;
    }
}

console.log(MaxOfThree(3,5, 6).toString());
console.log(MaxOfThree(9, 6, 2).toString());

function IsAVowel(_string)
{
    _vowelList = ["a", "e", "i", "o", "u"];
    newThing = _string.toLowerCase();

    for (let i = 0; i < _vowelList.length; i++)
    {
        if (newThing === _vowelList[i])
        {
            return "This is a vowel";
        }
    }

    return "This is not a vowel";
}

console.log(IsAVowel("W"));
console.log(IsAVowel("A"));

function SumArray(thingy)
{
    totalSum = 0;
    for (let i = 0; i < thingy.length; i++)
    {
        totalSum = totalSum + thingy[i];
    }

    return totalSum;
}

console.log(SumArray([5,6,7,8,9]));

function MultiplyArray(_multipleArray)
{
    totalMultiple = 1;
    for (let i = 0; i < _multipleArray.length; i++)
    {
        totalMultiple = totalMultiple * _multipleArray[i];
    }

    return totalMultiple;
}

console.log(MultiplyArray([5,6,7,8,9]));

function ReverseString(_toBeReversed)
{
    _reversedText = ""

    for (let i = _toBeReversed.length - 1; i > -1; i--)
    {
        _reversedText = _reversedText + _toBeReversed[i];
    }

    return _reversedText;
}

console.log(ReverseString("Hello World"));

function FindLongestWord(_listOfWords)
{
    _longestWord = "";

    for (let i = 0; i < _listOfWords.length; i++)
    {
        if (_listOfWords[i].length > _longestWord.length)
        {
            _longestWord = _listOfWords[i];
        }
    }

    return _longestWord;
}

console.log(FindLongestWord(["Hello", "World", "Really", "Have", "No", "Idea"]))

function FilterLongWords(_arrayOfWords, _number)
{
    _longWords = [];

    for (let i = 0; i < _arrayOfWords.length; i++)
    {
        if (_arrayOfWords[i].length > i)
        {
            _longWords.push(_arrayOfWords[i]);
        }
    }

    return _longWords;
}

console.log(FilterLongWords(["Hello", "World", "Really", "Have", "No", "Idea"], 4));

