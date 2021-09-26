function GreaterNum(_firstInt, _secondInt)
{
    let _largerNumber;
    if (_firstInt > _secondInt)
    {   
        _largerNumber = _firstInt;
    }
    else
    {
        _largerNumber = _secondInt;
    }

    console.log(_largerNumber);
}

GreaterNum(4, 10);

function HelloWorld(_language)
{
    text = "";
    if (_language === "ch")
    {
        text = "地球好";
    }
    else if (_language === "ger")
    {
        text = "Hallo, Welt"
    }
    else
    {
        text = "Hello World";
    }

    console.log(text);
}

HelloWorld("ch");
HelloWorld("ger");
HelloWorld("en");

function GradeAssigner(_score)
{
    _grade = "";
    if (_score >= 90)
    {
        _grade = "A"
    }
    else if (_score >= 80 && _score < 90)
    {
        _grade = "B";
    }
    else if (_score >= 70 && _score < 80)
    {
        _grade = "C"
    }
    else if (_score >= 60 && _score < 70)
    {
        _grade = "D";
    }
    else if (_score >= 50 && _score < 60)
    {
        _grade = "E";
    }
    else{
        _grade = "F";
    }

    console.log(_grade);
}

GradeAssigner(90);
GradeAssigner(80);
GradeAssigner(70);
GradeAssigner(60);
GradeAssigner(50);
GradeAssigner(40);

function Pluralize(_petNumber, _petName)
{
    _endResult = "";
    if (_petNumber > 1)
    {
        _plural = _petName + "s";
        _endResult = _petNumber.toString() + " " + _plural;
    }
    else if (_petNumber === 1)
    {
        _endResult = _petNumber.toString() + " " + _petName
    }

    console.log(_endResult);
}

Pluralize(1, "cat");
Pluralize(5, "dog");