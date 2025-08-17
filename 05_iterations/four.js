const myObject={
    js:'javascript',
    cpp:'c++',
    rp:"ruby",
    swift:"swift by apple"
}

for (const key in myObject) {
    //console.log(key+"  vaule"+myObject[key]);
    
}

const programming=["js","rb","py","java","cpp"]
for (const key in programming) {
    //console.log(key+"  "+programming[key]);
    
}

//map

const map=new Map()
map.set("india",4)
map.set("usa",4)
map.set("a",1)
map.set("b",2)
map.set("c",3)
//console.log(map);
for (const key in map) {
    console.log(key+" "+map[key]);//not iterable in loop
    
}