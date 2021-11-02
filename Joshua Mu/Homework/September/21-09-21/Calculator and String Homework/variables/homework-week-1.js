//Calculator

function squareNumber(_int) {
    _squaredNumber = _int * _int;
    console.log(`This result of squaring the number ${_int} is ${_squaredNumber}`);
    return _squaredNumber;
}

squareNumber(3);

function halfNumber(_oneOverTwo) {
    _halfNumber = _oneOverTwo / 2;
    console.log(`Half of ${_oneOverTwo} is ${_halfNumber}`);
    return _halfNumber;
}

halfNumber(4);

function percentOf(_firstInteger, _secondInteger) {
    _percentage = (_firstInteger / _secondInteger) * 100;
    console.log(`${_firstInteger} is ${_percentage}% of ${_secondInteger}`);
    return _percentage;
}

percentOf(2, 4);

function areaOfCircle(_radius) {
    _pi = Math.PI;
    _circleArea = _pi * _radius ^ 2;
    _limitedNumber = parseFloat(_circleArea).toFixed(2);
    console.log(`The area for a circle with radius ${_radius} is ${_limitedNumber}`);
    return _limitedNumber;
}

areaOfCircle(4);

function calculatorThing(_calculatorNumber) {
    _halvedNumber = halfNumber(_calculatorNumber);
    _squared = squareNumber(_halvedNumber);
    _circledArea = areaOfCircle(_squared);
    _percentaged = percentOf(_circleArea, _squared);
    console.log(`The ${_calculatorNumber} when halved is ${_halvedNumber}, which when squared is ${_squared} `
        + `Which then used to calculate the area of a triangle is ${_circledArea}. Makes a percentage of ${_percentaged}%.`);
    return _percentaged;
}

calculatorThing(5);

//String

function DrEvil(_money) {
    if (_money === 1000000) {
        console.log(`${_money} dollars (pinky)`);
    }
    if (_money === 1) {
        console.log(`${_money} dollar`);
    }
    if (_money !== 1 && _money !== 1000000) {
        console.log(`${_money} dollars`);
    }
}

DrEvil(1000000);

function MixUp(_firstWord, _secondWord) {
    _lettersOne = _firstWord.substring(0, 2);
    _letters2 = _secondWord.substring(0, 2);

    _endLetters1 = _firstWord.substring(2, _firstWord.length);
    _endLetters2 = _secondWord.substring(2, _secondWord.length);

    console.log(_letters2 + _endLetters1 + " " + _lettersOne + _endLetters2);

}

MixUp("Hello", "World");

function FixStart(_string) {
    _initialLetter = _string.substring(0, 1);
    _replacedString = _string.substring(1, _string.length);
    _re = new RegExp(_initialLetter, 'g');
    _newString = _replacedString.replace(_re, "*");

    console.log(_initialLetter + _newString);
}

FixStart("aaaaaaaaaaaah");

function Verbing(_verb) {
    _newVerb = "";
    if (_verb.length - 1 >= 3) {
        if (_verb.slice(-3) === "ing") {
            _newVerb = _verb + "ly";
        }
        else if (_verb.slice(-3) !== "ing") {
            _newVerb = _verb + "ing";
        }
    }
    else if (_verb.length - 1 < 3)
    {
        _newVerb = _verb;
    }

    console.log(_newVerb);
}

Verbing("swim");
Verbing("swimming")
Verbing("go");

function NotBad(_notBad)
{
    locationOfNot = _notBad.indexOf("not");
    locationOfBad = _notBad.indexOf("bad");

    if (locationOfBad > -1 && locationOfNot > -1)
    {
        _good = _notBad.replace(_notBad.substring(locationOfNot, locationOfBad + 3), "");
        _good = _good + "good";
    }

    console.log(_good);
}

NotBad("This is not bad");