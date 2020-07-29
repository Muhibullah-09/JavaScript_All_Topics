/*
var age = prompt("Enter Your Age : " ,"Enter Here..");
if (age >=18){
    console.log("You are selected! Congratulations!") 
} else {
    console.log("Try Next Time!")
}
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Ab ap without curly brackets k bh if condition ko chla skty lkn if k bd phli line include
hogi dusri line nh hogi

var age = prompt("Enter Your Age : " ,"Enter Here..");
if (age >=18)
console.log("You are selected! Congratulations!") 
else 
console.log("Try Next Time!")
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

var age = prompt("Enter Your Age : " ,"Enter Here..");
if (age >=18)
console.log("You are selected! Congratulations!") 
console.log("Welcome "+age)//if condition ispr apply nh hogi.

'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
if else-if Conditions..


var marks = prompt('Enter your entry test marks' , "Enter marks Here..");
if (marks >=90)
{
    console.log("Your Department is Machanical Engineering. ")
}
else if (marks >=70)
{
    console.log("Your Dapartment is Computer Engineering. ")
}
else if (marks >=60)
{
    console.log("Your Dapartment is Chemical Engineering. ")
}
else if (marks >=50)
{
    console.log("Your Dapartment is Electrical Engineering. ")
}
else
{
    console.log("You are not selected.")
}

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Nested if Conditions

var marks = prompt('Enter your entry test marks' , "Enter marks Here..");
if (marks >=90)
{
    console.log("Your Department is Machanical Engineering. ")
    if (marks == 100)
    {
        console.log("Congratulations for a 100% funded scholarship.")
    }
    else 
    {
        console.log("Congratulations for a 90% funded scholarship.")
    }
}
else if (marks >=70)
{
    console.log("Your Dapartment is Computer Engineering. ")
    if (marks == 80)
    {
        console.log("Congratulations for a 70% funded scholarship.")
    }
    else if (marks >80)
    {
        console.log("Congratulations for a 80% funded scholarship.")
    }
    else
    {
        console.log("Congratulations for a 60% funded scholarship.")
    }
}
else if (marks >=60)
{
    console.log("Your Dapartment is Chemical Engineering. ")
    if (marks == 65)
    {
        console.log("Congratulations for a 50% funded scholarship.")
    }
}
else if (marks >=50)
{
    console.log("Your Dapartment is Electrical Engineering. ")
    if (marks <=60)
    {
        console.log("No scholarship .")
    }
}
else
{
    console.log("You are not selected.")
}
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Condition with Logical-Operators with && (AND) Operator

var marks = prompt('Enter your entry test marks' , "Enter marks Here..");
if (marks >90  && marks <= 100)
{
    console.log("Your Department is Machanical Engineering. ")
}
else if (marks > 70  && marks <= 90)
{
    console.log("Your Dapartment is Computer Engineering. ")
}
else if (marks >= 60  &&  marks <= 70)
{
    console.log("Your Dapartment is Chemical Engineering. ")
}
else if (marks >= 50 && marks < 60)
{
    console.log("Your Dapartment is Electrical Engineering. ")
}
else
{
    console.log("You are not selected.")
}
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Condition with Logical-Operators with || (OR) Operator

var word = prompt("Enter a any Alphabet : " , "Type Here...").toUpperCase()
if ( word == "A"  ||  word == "E"  ||  word == "I"  ||  word == "O"  ||  word == "U" )
{
    console.log("It's a  vovel.")
}
else
{
    console.log("It's  a consonants")
}
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
Conversion Number to Boolean 

with number
var age = 45 ;//mtlb cond true hai
if (age)
{
    console.log("It's a age in if condition "+age)
}
else
{
    console.log("It's a age in else condition "+age)
}

with null keyword

var age =null;//mtlb cond false hai
if (age)
{
    console.log("It's a age in if condition "+age)
}
else
{
    console.log("It's a age in else condition "+age)
}

with string


var age ="ajsdsjfsdjksdfbdsjkf";//mtlb cond true hai
if (age)
{
    console.log("It's a age in if condition "+age)
}
else
{
    console.log("It's a age in else condition "+age)
}

with "" empty quotes


var age ="";//mtlb cond false hai
if (age)
{
    console.log("It's a age in if condition "+age)
}
else
{
    console.log("It's a age in else condition "+age)
}

with undefine variable 

*/

var age;//mtlb cond false hai
if (age)
{
    console.log("It's a age in if condition "+age)
}
else
{
    console.log("It's a age in else condition "+age)
}