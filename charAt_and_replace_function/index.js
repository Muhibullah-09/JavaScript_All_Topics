/*

//charAt() Function Example


var str = "This is my Pakistan and I know it's value. Pakistan Zindabad!";
console.log(str.charAt(11));
console.log(str.charAt(12).toUpperCase());
console.log(str.charAt(13).toUpperCase());
console.log(str.charAt(14).toUpperCase());
console.log(str.charAt(15).toUpperCase());
console.log(str.charAt(16).toUpperCase());
console.log(str.charAt(17).toUpperCase());
console.log(str.charAt(18).toUpperCase());

*/

//replace() Function Example

var str = "This is my Pakistan and I know it's value. Pakistan Zindabad!";
console.log(str.replace("Pakistan", "Homeland"));
console.log(str.replace(/Pakistan/g, "Homeland"));
console.log(str.replace(/Pakistan/i, "Homeland"));
console.log(str.replace(/pakistan/i, "Homeland"));
console.log(str.replace(/Pakistan/gi, "Homeland"));
console.log(str.replace(/pakistan/gi, "Homeland"));