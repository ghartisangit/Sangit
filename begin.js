// let hy_there="Hy sweetie";
// console.log(hy_there);


// variable declaration in js
// let var const

// what are the difference between let var and const? (interview question)

// var a=10
// console.log(a)

// var a=20
// console.log(a)

//  a=30
// console.log(a)

// let b=5  //we cant redeclare
// b=10    //w can update
// console.log(b)


// const c=50;  //w cant redeclare and update
// console.log(c);


// Variable naming Rule:
// --Case-sensitive
// --include letters digits underscore dollar sign 
// --first character must be letter underscore or dollar 

// let firstname="hey maya";
// console.log(firstname);
// let firstName="hey beauty";
// console.log(firstName);


// data types in js
// primitive: string, number, boolean , undefined, null, BigInt, Symbol
// Non primitive: array object

// let first="10";
// console.log(typeof(first));
// let hhhhh="wake"
// let a=hhhhh;
// console.log(typeof(a));

// let sangit=true;
// console.log(typeof(sangit));
// console.log(sangit);

// let c;
// console.log(c);

// arithemetic operator in js:(+ - / *)
// let a=10;
// let b=10;
// let c=a+b;
// console.log(a+b);
// console.log(5+7);
// console.log(c);
// if(a>b){
//     console.log(" a is gretaer than b");
// }
// else if(a==b)
// {
//     console.log("both are equal");
// }
// else
// {
//     console.log("b is greater");
// }

// create a simple calculator 

let a=10;
let b=30;
let op="%";

if(op=="+")
{ 
     console.log(a+b);
}
else if(op=="-")
{
    console.log(a-b);
}
else if(op=="*")
{
    console.log(a*b);
}
else if(op=="/")
{
    console.log(a/b);
}
else if(op=="%")
{
    console.log(a%b);
}
else{
    console.log("invalid operator");
}