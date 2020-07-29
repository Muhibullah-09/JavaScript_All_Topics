/*
//Simple Promises Example
//We produce promise 
const pobj1 = new Promise ( (resolve , reject ) => {
    
    setTimeout( () =>{
        let roll_no = [1,2,3,4,5];
        //console.log(roll_no);
        //resolveFunc(); //call on fulfilled
        //rejectFunc(); //call on rejection
        //resolve(roll_no);
        //Agr apki Api fetch nhi hui tou ap ko reject function use krna hoga
        reject('Error while Communicating with API');
    }, 2000);
} );

//Agr apka promise code complete hua tou resolve function ma ayega 
//or uska output show karanay k liye hum then method use kraingy
//Now we consume promise
// pobj1.then( (roll_no) =>{
//     console.log(roll_no);
// });
//then method hmm promise ny jo output dia usko show kranay k liye use krty

//Agr API sy data fetch nh hua tou usy rejection dikhani hai
pobj1.then( (roll_no) =>{
    console.log(roll_no);
}).catch ((error) => {
    console.log(error);
});


*/
//Now Promises with objects


const pobj1 = new Promise ((resolve , reject) => {
    setTimeout( () => {
        let roll_no = [1,2,3,4,5]; 
        resolve(roll_no)} , 2000)});

//Now We create object here        
const getBiodata = (indexdata) => {
    return new Promise ( (resolve , reject) =>{
        setTimeout( (indexdata) => {
            let bioData = {
                name: 'Muhibullah Khan Kamali',
                age:22
            }
            resolve(`My Roll Number is ${indexdata}. My Name is ${bioData.name} and I am ${bioData.age} years old.`);    
        } , 2000 , indexdata)
    });
}
//...promise consume
// pobj1.then( (rollno) => {
//     console.log(rollno);
//     getBiodata(rollno[1]).then( (kuchBhi) => {
//         //second then jo hai usmy return ma jo promise ka output hoga wo ayega.
//         console.log(kuchBhi);
//     });
// });

//Another way to comsume promises
// pobj1.then( (rollno) => {
//     console.log(rollno);
//     return getBiodata(rollno[1]);
// }).then( (kuchbhi) => {
//     console.log(kuchbhi);
// }).catch( (error) =>{//issy farq nh parh rha q k hum reject ko use he nh krrhy
//     console.log(error);
// });
//Now We can use alternative way of .then is Async and Await
/*
async function getData(){
    const rollnodata = await pobj1;
    console.log(rollnodata);

    const bioDatas = await getBiodata(rollnodata[1]);
    console.log(bioDatas);
}
getData();
*/
//Now If I need objects value so we need to use .then
async function getData(){
    const rollnodata = await pobj1;
    console.log(rollnodata);

    const bioDatas = await getBiodata(rollnodata[1]);
    console.log(bioDatas);

    return bioDatas
}
//Agr hum isko return krae tou usko kesay show kra skty
const getname = getData().then((myname) => {
    console.log(myname);
});