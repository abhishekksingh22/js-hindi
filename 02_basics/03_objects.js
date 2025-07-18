//singleton (made with  constructor)

//object literals
//object.create
const mySym=Symbol("key1")

const Jsuser={
    name:"hitesh",
    "full name":"Abhishek kumar singh",
    //mySym:"key1" it is wrong to declare symbol
    [mySym]:"mykey1",

    age:18,
    location:"jaipur",
    email:"hitesh123@gmail.com",
    isLoggedIn: false,
    lastLogIn:["mon","sat"]
}
// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["age"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser["mySym"]);
// console.log(typeof [mySym]);

Jsuser.email="chatgpt";
//Object.freeze(Jsuser);// iske bad vaule change nhi hota

Jsuser.greeting=function()
{
    console.log("hello js user");
    
}
Jsuser.greeting2=function()
{
    console.log('hello js user ,${this.name}')
    
}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());








