

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
