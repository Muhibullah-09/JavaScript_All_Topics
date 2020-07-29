/*

console.log("Simple Example"); 
console.log("\n");
console.log("Decleration");
console.log("\n\n");
function showMessage(message)
{
    console.log(message);
}

console.log("Invoking Of Function");
console.log("\n\n");
showMessage("Muheeb Kamali");
console.log("\n\n");
console.log("Passing Data To Function Example ");
console.log("\n");
function add(a,b)
{
    console.log(a+b);
}
console.log("Result : ");
add(32,2);
add(2321,2313);

console.log("Parameters Rules\n");

function Name(name)
{
    console.log("Hello "+name);

}
Name("Kabutar");
Name(45);
Name(true)
Name();
Name("Max" , 12);




//subjectCalculator
console.log("Total Marks  Calculator \n ");

function subcalc(sub1,sub2,sub3)
{
    return (sub1 + sub2 + sub3) / 3 ;
}
console.log("\n");
function scoreCard(marks) 
{
    if (marks > 80 && marks <= 100)
    {
        console.log("Congratulations!\nYour marks is : "+marks);
    }
    else if (marks > 70 && marks <= 80)
    {
        console.log("Congratulations!\nYour marks is : "+marks);
    }
    else if (marks > 60 && marks <= 70)
    {
        console.log("Congratulations!\nYour marks is : "+marks);
    }
    else if (marks > 50 && marks <= 60)
    {
        console.log("Congratulations!\nYour marks is : "+marks);
    }
    else
    {
        console.log("Sorry!");
    }
}
var avg1 = subcalc(78,50,61);
console.log("Avg1 = "+avg1);
var avg2 = subcalc(67,98,85);
console.log("Avg2 = "+avg2);

var tt1 = scoreCard(avg1);
console.log("Total score Avg1 is ="+tt1);
var tt2 = scoreCard(avg2);
console.log("Total score Avg2 is ="+tt2);



//Function in Expressions

function multiply(num1 , num2)
{
    return num1*num2;
}
function sum(a,b)
{
    return multiply(a,b) + b;
}


//var a = sum(3,4) + 6 ;
//console.log(a);

var a = sum(multiply(3,4),4) + 6 ;
console.log(a);



//Local  and Global Variables

var a = 7;

function sum()
{
    var b = 6;
    a = b +6;
}
sum();
console.log("A = "+a);



var a = 7;

function sum()
{
    var a = 6;
    var b = 6;
    a = b + 6;
}
sum();
console.log("A = "+a);

//Function Hoisting


var a = sum(5,7);
console.log("A = "+a);

function sum(a,b)
{
    return a+b;
}



//Arguments passed by value
//Argmentss passed by reference
 
var num = 5;
function changeValue(val)
{
    a =7;
}
changeValue(num);
console.log(num);


//With Array
var num = [5,3,2,4,1];
function changeValue(val)
{
    val[1] =7;
}
console.log(num[1]);//before calling the function.
changeValue(num);
console.log(num[1]);//value updated



//With Objects

var num ={ name :"Muheeb" , age : 19};
function changeValue(val)
{
    val.age=20;
}
console.log(num.age);//before calling the function.
changeValue(num);
console.log(num.age);//value updated

*/

//Recursive Function Example

function factorial(n)
{
    if (n <= 1)
    {
        return 1;
    }
    else
    {
        return n * factorial(n-1);
    }
}
console.log("Factorial of six is = "+factorial(6));
console.log("Factorial of three is = "+factorial(3));