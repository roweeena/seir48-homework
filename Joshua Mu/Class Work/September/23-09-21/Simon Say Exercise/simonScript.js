function simonSays(_message)
{
    if (_message.endsWith("?"))
    {
        return "sure";
    }
    else if (_message === '')
    {
        return "Fine, be that way";
    }
    else if (_message === _message.toUpperCase())
    {
        return "Woah, chill out";
    }
    else{
        return "Whatever";
    }

}

console.log(simonSays("Why?"));
console.log(simonSays("WHY"));
console.log(simonSays(""));
console.log(simonSays("Why"));
