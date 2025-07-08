//primitive

//7 types : String,Number,Boolean,null,undefined,Symbol
// BigInt
const score=100;
const scoreVaule =100.3;

const loggedIn=false;
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id==anotherId);
const bigNumber=3456543576654356754n




//Reference (Non primitive)

//Array,Objects,Functions
const heroes =["shaktiman","naagraj","doga"]
let myobj= {
    name:"sintu",
    age:20

}

const myFunction =function()
{
    console.log("Hello World");
    

}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

//+++++++++++++++++++++++++++++++++++++++++

//stack(primitive), Heap(non-primitive ) 

let myYoutubename="sintukumarsingh "
let anothername=myYoutubename; 
anothername="chaiandcode "
console.log(anothername);
console.log(myYoutubename);


let userOne={      //non primitive types
    email:"abhisheksingh22595@gmail.com", 
    user: "abcd@ybl"
}
let userTwo=userOne

userTwo.email="aryan@4577";
console.log(userOne.email);
console.log(userTwo.email);

