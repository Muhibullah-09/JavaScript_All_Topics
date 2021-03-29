//Simple way of fetching Data
fetch ("https://api.covid19api.com/countries").then( (apiData) =>{
    // console.log(apiData.json());
    //Ya data jo apko milega wo JASON format ma milega agr hmy object form ma chaye ho tou
    return apiData.json();
}).then( (actualData) => {
    console.log(actualData);
}).catch( (error) => {
    console.log("The Error : ${error}");
})

/*
//Now if code has some error so catch method executes

fetch ("https://api.covid19api.com/countries").then( (apiData) =>{
    // console.log(apiData);
    //Ya data jo apko milega wo JASON format ma milega agr hmy object form ma chaye ho tou
    return apiData.json();
}).then( (actualData) => {
    console.log(actualDatas);
}).catch( (error) => {
    console.log(`The Error : ${error}`);
});


//Now target particular Value
fetch ("https://covid-19api.com/api/countries").then( (apiData) =>{
    // console.log(apiData);
    //Ya data jo apko milega wo JASON format ma milega agr hmy object form ma chaye ho tou
    return apiData.json();
}).then( (actualData) => {
    console.log(actualData[1570].country);
}).catch( (error) => {
    console.log("The Error : ${error}");
})
*/

// //Now Hum bht countries ko ek sth access kr skty hain
// function getCovid(index){
//     fetch ("https://covid-19api.com/api/countries").then( (apiData) =>{
//     // console.log(apiData);
//     //Ya data jo apko milega wo JASON format ma milega agr hmy object form ma chaye ho tou
//     return apiData.json();
// }).then( (actualData) => {
//     console.log(actualData);
// }).catch( (error) => {
//     console.log("The Error : ${error}");
// })


// };

// getCovid();