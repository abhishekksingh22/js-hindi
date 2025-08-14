//for

for (let index = 0; index < 10; index++) {
  //console.log(index);
  if (index == 5) {
    //console.log("5 is best number");
  }
}
// console.log(index); declare inside braket so it will not work

for (let i = 0; i <= 10; i++) {
  //console.log(`Outerloop vaule ${i}`);

  for (let j = 0; j <= 10; j++) {
    // console.log(`Innerloop vaule ${j} Outer loop ${i}`);
    // console.log(i +'*'+ j+' = '+i*j);
  }
}

let myArray = ["flash", "batman", "superman"];
for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  //console.log(element);
}

//break and continue

for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    //console.log("detected 5");
    break;
  }
  //console.log(index);
}
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("detected 5");
    continue;
  }
  console.log(index);
}
