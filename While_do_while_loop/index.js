/*

//Infinite loop
var i = 0;
while (i < 10 ){
   console.log("I :"+i );
}

//while loop example

var i = 0;
while (i < 10 ){
    console.log("I : "+i );
    i++;
}


 //do while loop example

 var i = 0;
 do{
     console.log("I = "+i);
     i++;
 }
while (i < 10 );


//do run once

var i = 0;
do{
    console.log("I = "+i);
    i++;
}
while (i < 0 );


*/
//while is dependent on user.

var doContinue = true;
while (doContinue){
    console.log("Hello");
    var input = prompt("Please enter Y to run again or any key to stop : ");
    if (input.toLowerCase() !== "y"){
        doContinue = false;
    }
}