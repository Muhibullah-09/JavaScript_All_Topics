/*
//Simple Example

const funA = () => {
    console.log("Hello FunA ");
}

const funB = () =>{
    console.log("Hello FunB");
}

funA();
funB();


//yhn pr phly functon funB call hojaega then 3 sec baad function funA automattically call hojaega.
const funA = () => {
    setTimeout(function(){
        console.log("Hello FunA");
    } , 3000);
}

const funB = () =>{
    console.log("Hello FunB");
}

funA();
funB();

//callBack Function 
const funA = () => {
    setTimeout(function(){
        console.log("Hello FunA");
        funB();
    } , 3000);
}
const funB = () =>{
    console.log("Hello FunB");
}

funA();


//Here are the simple example 
const personOne = (friend) =>{
    console.log(`Sorry! I am busy right now ${friend}.I'll call you later.`)
};

const  personTwo = () => {
    console.log(`Hey what's up , Pick up the phone.`)
};

personOne('Insaram');
personTwo();

*/
//Now I automate above example as callback function.

const personOne = (friend , callback) => {
    console.log(`Sorry! I am busy right now ${friend}. I will call you back soon.`);
    callback();
};

const personTwo = () => {
    console.log(`Hey what's up . Pick up the phone .`);
};

personOne('Insaram' , personTwo);