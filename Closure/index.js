
//Simple Closure Example
// const outerFun = (a) => 
// {
//     let b = 10;
//     const innerFun = () =>
//     {
//         let sum = a + b ;
//         console.log(`The sum of two numbers =  ${sum}.`);
//     } 
//     innerFun();
// }

// outerFun(34);



//Now We see closure in browser
const outerFun = (a) => 
{
    let b = 10;
    const innerFun = () =>
    {
        let sum = a + b ;
        console.log(`The sum of two numbers =  ${sum}.`);
    } 
     return innerFun;
}
let inner = outerFun(34);
console.dir(inner);
inner();