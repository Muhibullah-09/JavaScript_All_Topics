
/*

var num = parseInt(prompt("Enter a number : "))
for ( var i = 2; i < num ; i++ )
{
    if (num % i == 0)
    {
        console.log("Your number is not from Prime numbers. Your number is : " + num +" . " +"I is : " + i);
        break;
    }
    else 
    {
        console.log("Your number is from Prime numbers. Your number is : " + num +" . " +"I is : " + i);
    }
} 

''''''''''''''''''''''''''''''''''''''''''''''''''''

*/

var num = parseInt(prompt("Enter a number : "))
var isPrime = true;
for ( var i = 2; i < num ; i++ )
{
    if (num % i == 0)
    {
        console.log("Your number is not from Prime numbers. Your number is : " + num +" . " +"I is : " + i);
        isPrime = false;
        break;
    }
} 
if (isPrime)
{
    console.log("Your number is from Prime numbers. Your number is : " + num +" . " +"I is : " + i);
}