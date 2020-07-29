/*
var j = prompt("Enter a number.") 
for (var i = 0; i <= j ; i++)
{
    console.log("Hello kamali.")
}


var j = prompt("Enter a number.") ;
for (var i = 1; i <= j ; i++)
{
    console.log(i);
}



var j = prompt("Enter a number.") 
for (var i = j; i > 0 ; --i)
{
    console.log(i)
}



var j = prompt("Enter a number.") 
for (var i = j; i > 0 ; i--)
{
    console.log(i)
}



//Creating Table of any number

var j = prompt("Enter a number." , "Enter table number here..") 
for (var i = 1; i <= 10 ; i++)
{
    console.log(j +" X "+ i + " = " + (j*i));
}




//Printing the list of tables with a given range.


var tables = parseInt(prompt("Enter a range of Tables " , "Enter last point of table number here..") );
for (var i = 2 ; i<=tables ; i++)
{
    for( var j = 1 ; j<=10 ; j++)
    {
        console.log(i +" X "+ j + " = " + (i*j)); 
    }
}


*/


//Take range also from user 


var tables = parseInt(prompt("Enter a range of Tables " , "Enter last point of table number here..") );
var i = parseInt(prompt("Enter starting range of table : " ))
//var j = parseInt(prompt("Enter starting point from where your table start : " ))
for (; i<=tables ; i++)
{
    for( j=1 ; j<=10 ; j++)
    {
        console.log(i +" X "+ j + " = " + (i*j)); 
    }
}
