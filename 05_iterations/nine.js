const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval ${currval}`);
    
//     return acc+currval
// },0)
const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py",
        price:999
    },
    {
        itemname:"java",
        price:3999
    }

]
const lastPrice=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(lastPrice);
