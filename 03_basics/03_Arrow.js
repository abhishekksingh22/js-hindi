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
chaii();