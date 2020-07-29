/*
//Easy way 
var person1 = {
    age :23
}
var person2 = {
    age : 23
}
if (person1.age == person2.age)
{
    console.log('Welocme Object');
}


//object by reference
var person1 = {
    age :23
}
var person2 = {
    age : 23
}
person1 = person2;
if (person1 == person2)
{
    console.log('Welocme Object');
}


//with constant 

const person1 = {
    age :23
}
const person2 = {
    age : 23
}
person2.age = 25;
console.log(person2.age)
// if (person1 == person2)
// {
//     console.log('Welocme Object');
// }
//



var name = 'Muheeb';
var name1 = 'kamali';
 name  = name1 ;
 console.log(name);
 console.log(name1);
 var person1 = {
    age :23
}
var person2 = {
    age : 50
}
person1 = person2;
person1.age = 73;
console.log(person1);
console.log(person2);



//break reference by {...}
var name = 'Muheeb';
var name1 = 'kamali';
 name  = name1 ;
 console.log(name);
 console.log(name1);
 var person1 = {
    age :23
}
var person2 = {
    age : 50
}
person1 = {...person2}
//person1 = person2;
person1.age = 73;
console.log(person1);
console.log(person2);


//Length function in Javascript
 var obj = {
     name :'Muheeb',
     age : 20,
     gender : 'Male'
 }
 console.log(Object.keys(obj));
 console.log(Object.values(obj));
 console.log(Object.keys(obj).length);
 console.log(Object.values(obj).length);



//multiple objects reference break
var person1 = {
    age :23
}
var person2 = {
    age : 50
}
var person3 = {...person1 , ...person2};
console.log(person1);
console.log(person2);
console.log(person3);
//precedence jiski zyada hogi wo store hoga iska output 50 hoga.


//Ab hmm object ko freeze bh kr skty mtlb wo chng nh hoga.
var obj = {
    age :26
}
var obj1 = {
    age :67
}

console.log(obj);
console.log(obj1);
var obj2 = Object.freeze(obj);
console.log(obj2);
obj2.age = 43;
console.log(obj2.age);
//ya chng krny k bawajud 26 dega age 


//Ab direct values add krty hain
var obj1 = {
    age :20
}
obj1.firstName = 'Muhibullah';
obj1.lastName = 'Kamali';
//obj1.middle-Name = 'Khan';//erroe dega tou isko hmm [] sy solvw krty hain
obj1['middle-Name'] = 'Khan';
console.log(obj1);

*/

//Now we can see values by taken input of keys from user
 var getName = prompt('Enter a key : ');
var Names = {
    name1 : 'muheeb',
    name2 : 'haseeb',
    name3 : 'honey'}
console.log(Names[getName]);