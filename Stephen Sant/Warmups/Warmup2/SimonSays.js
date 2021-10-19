//# Warmup - Simon Says

//# Create a function that takes an input and returns Simon's response as follows:
const simonSays = function (input)
{
    //  Simon answers 'Sure.' if you ask him a question.
    if(input.includes('?'))
    {
        console.log('Sure.');
    }
    //  He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
    else if(/[A-Z]/.test(input))
    {
        console.log('Woah, chill out!');
    }
    //  He says 'Fine. Be that way!' if you address him without actually saying anything.
    else if(input === (''))
    {
        console.log('Fine. Be that way!');
    }
    //  He answers 'Whatever.' to anything else.
    else
    {
        console.log('Whatever.');
    }
}
simonSays('What?');
simonSays('WHAT!');
simonSays('');
simonSays("Sorry, I'm deaf in that ear.");