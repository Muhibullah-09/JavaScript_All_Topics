//Create Simple Class in JavaScript
class Students{
    constructor(name , age , Class){
        this.myname = name;
        this.myage = age;
        this.myClass = Class;
        }
    //Instance Method hai ya or ya inherit ho skta hai agr hmm isko inherit nh krna chahaty tou 
    //issy phly static likhna hoga "static bioData".    
    bioData(){
        return `Hello  my name is ${this.myname}.
My age is ${this.myage}.
I am from class ${this.myClass}.`;
    }
}

// let obj1 = new Students('Muhibullah Khan Kamali' , 20 , '12th');
// let obj2 = new Students('Farjad Raza' , 19 , '11th');
// let obj3 = new Students('Insaram Alam Siddiqui' , 20 , '11th');
// let obj4 = new Students('Muhammad Abbas ' , 20 ,'14th');
// obj1.bioData();
// obj2.bioData();
// obj3.bioData();
// obj4.bioData();


//Now we Inherit Students class

class Player extends Students{
    constructor(name , age , Class , game){
        super(name , age , Class);
        this.mygame = game;
    }
    play_bioData(){
        return`${super.bioData()}.
I am Player of ${this.mygame}.`
    }
}

// let obj1 = new Player('Muhibullah Khan Kamali' , 20 , '12th' , 'Cricket');
// let obj2 = new Player('Farjad Raza' , 19 , '11th' , 'Hockey');
// let obj3 = new Player('Insaram Alam Siddiqui' , 20 , '11th' , 'Football');
// let obj4 = new Player('Muhammad Abbas ' , 20 ,'13th' , 'Tennis');
// obj1.paly_bioData();
// obj2.paly_bioData();
// obj3.paly_bioData();
// obj4.paly_bioData();

//Now I inherit the PLayer class

class Like extends Player{
    constructor(name , age , Class , game , like){
        super(name , age , Class , game , like)
        this.like = like;
    }
    like_bioData(){
        console.log(
            `${super.play_bioData()}.
I like to eat ${this.like}.`
        );
    }
}


let obj1 = new Like('Muhibullah Khan Kamali' , 20 , '12th' , 'Cricket' , 'Biryani');
let obj2 = new Like('Farjad Raza' , 19 , '11th' , 'Hockey' , 'Karachi');
let obj3 = new Like('Insaram Alam Siddiqui' , 20 , '11th' , 'Football' , 'Chinese food');
let obj4 = new Like('Muhammad Abbas ' , 20 ,'13th' , 'Tennis' , 'Bbq');
obj1.like_bioData();
obj2.like_bioData();
obj3.like_bioData();
obj4.like_bioData();