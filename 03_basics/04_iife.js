//Immediatly Invoked Function Expression(IIFE)


(function chai()      //NAMED IIFE
{
    console.log(`DB CONNECTED`);
})();

(function aurcode()
{
    console.log(`DB CONNECTED`);
})();

((name)=>      //UNNAMED IIFE WITH PASSING PARAMETER
{
    console.log(`DB CONNECTED ${name}`);
})("sintu")



