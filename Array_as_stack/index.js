var foods = [];


foods.push("Banana");
foods.push("Mango");
foods.push("Orange ");
foods.push("Peach");
foods.push("Watermelon");
foods.push("Kivy");

console.log(foods);
console.log("Length is = "+foods.length);


//Pop the elements

foods.pop();
console.log(foods);
console.log("Length is = "+foods.length);

//Multiple Pop

a1 = foods.pop();
a2 = foods.pop();
a3 = foods.pop();
console.log(foods);
console.log("Length is = "+foods.length);

console.log(a1);
console.log(a2);
console.log(a3);


//Push agai any value 

foods.push('Kharbuza');
console.log(foods);
a = foods.pop();
console.log(a); 