/*AND (&&) OPERATOR
var a = 6;
var b = 8;
var c = a && b ;
console.log("C = "+c); //return 8 coz all values are true.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

var a = 0;
var b = 8;
var c = a && b ;
console.log("C = "+c); //return 0 coz first value is flase.
'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

var a = "";
var b = 8;
var c = a && b ;
console.log("C = "+c); //return '' coz first value is false.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

var a = "";
var b = 8;
var c = true && 0 ;
console.log("C = "+c); //return 0 coz second value is false.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''


var a = "";
var b = 8;
var c = true  && false ;
console.log("C = "+c); //return false coz second value is false.
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

*/
var a = "";
var b = 8;
var c = true  && "" ;
console.log("C = "+c); //return false coz second value is false.