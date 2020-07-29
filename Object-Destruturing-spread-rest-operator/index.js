// var contact = {name :'Muheeb' , age :20 , email : 'mc2840696@gmail.com'};
// var {name,...rest} = contact;
// console.log(rest);

//spread Operator

// var arr = [1,2,3,4];
// var arr1 = [5,6,7,8];
// var arr2 = [...arr , ...arr1];
// console.log(arr2);


//Rest parameter


function rest( a , b , ...moreargs)
{
    console.log('a',a);
    console.log('b',b);
    console.log('moreargs',moreargs);
}

rest('one','two','three','four','five');