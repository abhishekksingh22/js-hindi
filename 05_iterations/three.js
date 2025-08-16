//for of         something like array specific loops
// ["","",""]  //strings in array
// [{},{},{}]  //objects in array

// for (const element of object) {
    
// }

const arr=[1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
    
}

const greetings="Hello world"
for (const greet of greetings) {
    if(greet==" ")
        {
            continue;
        }
    
   // console.log(`Each char is ${greet}`);
        
}

//Maps

const map=new Map()
map.set("india",4)
map.set("usa",4)
map.set("a",1)
map.set("b",2)
map.set("c",3)
//console.log(map);
for (const [key,vaule] of map) {
    //console.log(key+" "+vaule);
    
}

const myObj={
    'Game1':"nfs",
    'Game2':"bgmi"
}
// for (const [key,vaule] of myObj) {
//     console.log(key+" "+vaule);
    
// }
