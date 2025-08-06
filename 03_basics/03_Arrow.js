const user={
    username:"hitesh",
    price: 999 ,
    welcomeMessage:function()
    {
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage();
// user.username="sintu"
// user.welcomeMessage();

//
//console.log(this);

// function chai()
// {
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai();

// const chai=function()
// {
//     let username="hitesh"
//         console.log(this);
// }
// chai();

const chaii=()=>
{
    let username="hitesh"
        console.log(this.username);
}
//chaii();

// const addTwo=(num1,num2)=>{
//     return num1+num2  //explicit return
// }
// console.log(addTwo(9,12));

// const addTwo=(num1,num2)=> num1+num2 //implicit return (num1+num2)
// const addTwo=(num1,num2)=> (num1+num2) //implicit return 
const addTwo=(num1,num2)=> ({username:"hitesh"})


console.log(addTwo(9,12));
const myArr=[2,3,4,5,6];
myArr.forEach(function(){})
