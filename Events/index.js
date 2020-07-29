/*
//ya hmnny inside function bnaya
var hit = document.querySelector('.hit');
hit.addEventListener('click' , function(){
    document.write("Hello");
})



//Ab hmm outside function bnaegy
function hitme()
{
    console.log("Hello User..");
}
document.addEventListener('click' ,hitme);

*/

//Agr multiple Buttons Ho tou
//forEach ka function use kraingy

var hit = document.querySelectorAll('.hit');
console.dir(hit);

function hitMe(){
    console.log("Hello");
    console.log("\n");
}
hit.forEach((result) => { 
    result.addEventListener('click' ,hitMe );
})
//forEach function ek ek kr k ayega.