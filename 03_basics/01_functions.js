

function saveMyname()
{
    console.log("h");
console.log("I");
console.log("T");
console.log("E");
console.log("S");
console.log("H");

}
//saveMyname(); //calling the functions
// saveMyname //calling the reference

function addTwoNumbers(number1,number2)
{
    let result=number1+number2;
    return result;
    console.log("hitesh");//result k bad kuch bhi execute nhi hoga
    
    
}

const r= addTwoNumbers(7,8);
//console.log("result",r);

function loginUserMessage(username="sam") {
    if(!username)
    {
        console.log("please enter your username");
        return;
        

    }
  return `${username} just logged in`;
}
// console.log(loginUserMessage("hitesh"));
 //console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1)
{
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user={
    username:"hitesh",
    price:199
}
function handleObject(anyObject)
{
   console.log(`Username is ${anyObject.username}and price is ${anyObject.price} `);
   
}
//handleObject(user);
handleObject({
    username:"sintu",
    price:299
})

const mynewArr=[200,300,400,500]

function returnSecondVaule(anyArr)
{
    return anyArr[1];

}
const svaule=returnSecondVaule(mynewArr)
console.log(svaule);


