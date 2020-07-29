/*

//debugger keyword

function add()
{
    console.log("maxcarlos");
    debugger;
    console.log("maxafterdebug");
}
//agr kisi point pr error agya ho whn pr debugger usko 
//automatically stop krdega.



//DOM element Selector
var heading = document.querySelector('h2');
console.log(heading);
//ya h2 ko direct target krega or heading ma store krdega.



//Ab hmny h1 ki 10 copies bnai hain html file ma same class name k sth

var a = document.querySelector('h1');
console.log(a);
//yhn pr srf phli h1 ayegi.


//Ab sb headings ko ek sth target krna ho tou 
var c = document.querySelectorAll('h1');
console.log(c);
//ya sb h1 show krdega with class name lkn content show nh krega.


//hmm particular text bh access krskty
var d = document.querySelectorAll('h1')[1].innerText;//ya Hello world1 show krega.
console.log(d);


//id sy accesss krty
var x = document.querySelectorAll('#Dom');
console.log(x);
//ya sb Dom id's ko target krega


//Ab hmm addEventListner sy access kraingy .Dom ko or script upr likh kr
function init()
{
    var ele = document.querySelectorAll('#Dom');
    console.log(ele);
}
document.addEventListener('DOMContentLoaded',init);
//The addEventListener() method attaches an event handler
//to the specified element. The addEventListener()
//method attaches an event handler to an element
//without overwriting existing event handlers.
//You can add event listeners to any DOM object not only
//ML elements. i.e the window object. 


//Ab hmm runtime pr value change kr skty hain
 var ele = document.querySelector('#Dom');
 console.log(ele);
 ele.textContent = "MuheebKamali";
//ya phli id k content ko chnge krdega.



//ab hmm kisi bh index ki value ko target krskty
var ele = document.querySelectorAll('#Dom')[2];
console.log(ele);
ele.textContent = "MuheebKamali";



//Ab hmm h1 k andr k text or inner text ko target kraingy

var heading =document.querySelector('h1');
//Diff b/w innertext & textcontent
console.log(heading.innerText);
console.log(heading.textContent);


//Ab hmm dir use kraingy

var heading =document.querySelectorAll('.head');
console.dir(heading);

//ya puri directory show krdega console.log() ka function

*/

//Ab hmm run time pr class ko add krwaingy classList ma

var heading =document.querySelector('.head');
heading.classList.add('newdynamic');
console.dir(heading);
