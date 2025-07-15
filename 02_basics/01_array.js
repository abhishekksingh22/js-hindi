//array

//const myArr=[0,1,2,3,4,5,true,"hitsh"]
const myArr=[0,1,2,3,4,5]
const myHeroes=["Ironman","batman","Superman"]

const myArr2=new Array(1,2,3,4)
//console.log(myArr[3]);
//console.log(myArr2[3]);

//Array Methods
myArr.push(6)
myArr.push(7)
myArr.pop();
//console.log(myArr);

//myArr.unshift(0)add the vaule 0 at first index and shift other element vaule

// myArr.unshift(9)// 9,0,1,2,3,4,5,6 shift index to right
// console.log(myArr);

// myArr.shift()//remove first element from the array and shift all vaules ton left
// console.log(myArr);

// console.log(myArr.includes(19));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));


// const newArr= myArr.join()
// console.log(myArr); 
// console.log(typeof myArr); 
// console.log(newArr);//change in string type
// console.log(typeof newArr);//change in string type

//slice,spice

console.log("A",myArr);

const myn1=myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);



