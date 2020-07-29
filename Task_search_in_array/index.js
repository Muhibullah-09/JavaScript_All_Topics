var num = [22,434,76,4554,34,23,66,4,34,54,35,34,35,43,43,24,213,354,];
var user = parseInt(prompt("Enter a number :"));
var found = false;
console.log("User input = "+ user );
for ( var i = 0 ; i < num.length ; i++ )
{
    if (user == num[i])
    {
        console.log("Number found at index : "+ i);
        found =true;
        break;
    }
}
if (!found)
{
    console.log("Number not found.");
}