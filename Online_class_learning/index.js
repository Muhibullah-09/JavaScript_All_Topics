/*

//backtick in string

var a = `My name is Muhibullah Khan Kamali
My Father Name is Rasheed Ahmed Khan Kamali`;
console.log(a);
console.log("\n\n");

//NOW ACCESS VARIABLE.

var name = "Muhibullah Khan Kamali";
var a = `My name is ${name}
My Father Name is Rasheed Ahmed Khan Kamali`;
console.log(a);

console.log("\n\n");

//We can do anything 

var name = "Muhibullah Khan Kamali";
var a = `My name is ${name} ${1 + 1}
My Father Name is Rasheed Ahmed Khan Kamali`;
console.log(a);

console.log("\n\n");


//let and var decleration
var myname = "Carlos";
let myname1 = "max";
//ismay var jo hai wo window ma bh show hoga .let nh hoga.

//var global hota hai let global nhi hota.
console.log("\n\n");
if (true)
{
    let nam = "Burguri";
}
console.log(nam);
//error dega

console.log("\n\n");

if (true){
    var nam1 = "Burguri";
} 

console.log(nam1);
console.log("\n\n");
//var is function scope.
//let is block scope.

//try var and let in if

if (true){
    var nam1 = "Burguri";
    let nam2 = "Burguri2";
} 
console.log(nam1);
console.log(nam2);

//if in function

function add(){
    if (true){
        var nam1 = "Burguri";
        let nam2 = "Burguri2";
    } 
}
add();
console.log(nam1);
console.log(nam2);


//if else in function
function add(){
    if (true){
        var nam1 = "Burguri";
        let nam2 = "Burguri2";
    } 
    else 
    {
        console.log(nam1);
        console.log(nam2);
    }
}
add();
console.log(nam1);
console.log(nam2);
//error ayega 



var myName = "Burguri1";
function add(){
    if (myName === nam1){
        var nam1 = "Burguri";
        let nam2 = "Burguri2";
    } 
    for (var i = 0; i<10; i++){
        console.log(nam1);
    }
}
add();
//for loop chlega

*/

//Constant scope
//ismay jo assign hogya wo change nh hoskta
const  name = "Muheeb";
name = "duheeb";
//error dega 