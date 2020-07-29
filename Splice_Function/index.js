/*
//Add value without replacing

var food = ['burger' , 'pizza' , 'snacks'];
console.log(food);
food.splice(1 , 0 , "burger2.0");
console.log(food);



//Add value with replacing


var food = ['burger' , 'pizza' , 'snacks' , 'chipas' , 'pepsi'];
console.log(food);
food.splice(3,2,"burger2.0");//ismay 2 jo h wo index 3 or 4 bta rha.
console.log(food);

*/


//Return values

var food = ['burger' , 'pizza' , 'snacks' , 'chipas' , 'pepsi'];
console.log(food);
var return_values = food.splice(3,2,"burger2.0");//ismay 2 jo h wo index 3 or 4 bta rha.
console.log(food);
console.log(return_values);