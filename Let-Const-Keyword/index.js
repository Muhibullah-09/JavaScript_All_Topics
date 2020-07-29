/*

const name = 'Kamali';
function log()
{
    console.log(name);
}

function logname()
{
    const name1 = 'Muheeb';
    log();
}

logname();



//Another Example


const dog = 'snickers';

function logDog(dog)
{
    console.log(dog);
}
function go()
{
    const dog = 'sunny';
    logDog(dog);
}

go();

*/

// Function Scope nested

function sayHi()
{
    function yell()
    {
        console.log('hello');
    }
    yell()
}

sayHi()