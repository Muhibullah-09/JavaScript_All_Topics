/*

//Print Current Date and Time
var date = new Date();
console.log("Current Date and Time in your Laptop = "+date);



//With string

var date = new Date("2020 5 3 ");
console.log("Current Date and Time in your Laptop in string format = "+date);


//

var date = new Date("2020/5/3 6:14:20 ");
console.log("Current Date and Time in your Laptop in string format = "+date);


//Unix time Example
//Date and time in miliseconds
var date = new Date();
var mildate = date.getTime()
console.log("Current Date and Time since January 1st,1970 till now in your Laptop in milliseconds = "+mildate);


//Epoch Time

var date = new Date(0);
console.log("Epoch Date and Time = "+date);



//Epoch Time in miliseconds

var date = new Date(1237626811278);
console.log("Epoch Date and Time in milisec. = "+date);



//Print date with all get functions

var date = new Date();
console.log("Current Date and Time in your Laptop = "+date);
console.log("Year : "+date.getFullYear());
console.log("Month : "+date.getMonth());
console.log("Date : "+date.getDate());
console.log("Day : "+date.getDay());
console.log("Hours : "+date.getHours());
console.log("Minutes : "+date.getMinutes());
console.log("Seconds : "+date.getSeconds());
console.log("Milliseconds : "+date.getMilliseconds());
console.log("Timestamp : "+date.getTime());

//Modify the Date

console.log("Year after Modify : "+date.setFullYear(2000));
console.log("Modify date : "+date);



//Converting day number into text of day name.



var date = new Date();

var day_list = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' ,'Saturday'];

var day = date.getDay();

var dayname = day_list[day];

console.log("Current Date and Time in your Laptop = "+date);
console.log("Year : "+date.getFullYear());
console.log("Month : "+date.getMonth());
console.log("Date : "+date.getDate());
console.log("Day in text : "+dayname);
console.log("Hours : "+date.getHours());
console.log("Minutes : "+date.getMinutes());
console.log("Seconds : "+date.getSeconds());
console.log("Milliseconds : "+date.getMilliseconds());
console.log("Timestamp : "+date.getTime());

*/

//Calculate time difference 

var d1 = new Date("February 15 2000 10:45:25");
console.log("Date when I was born : "+d1);

var d2 = new Date("February 15 2021 10:45:25");
console.log("My Age in 2021 : "+d2);

console.log("Born time in ms : "+d1.getTime());
console.log("Time in ms in 2021 : "+d2.getTime());

var timediff = d2.getTime() - d1.getTime()

console.log("Age in Milliseconds: "+timediff);

var days = timediff /(1000*60*60*24);

console.log("Age in Days : "+days);

var years = days /365;

console.log("Age in Years : ",Math.floor(years));