let given="Given:stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: I am Mom";
let then="Then: open the door"

let arrayStory=[given,when1,when2,then];
console.log(arrayStory);
console.log("control-flow:for")
for(let index=0;index<arrayStory.length;index++){
    const strStory=arrayStory[index];
    const key=strStory.substr(0,strStory.indexOf(":"));
     if(key==="Given"){console.log(`It's a Given: ${strStory.substr(strStory.indexOf(":")+1)}`);}
     else if(key==="When"){console.log(`It's a When: ${strStory.substr(
         strStory.indexOf(":")+1)}`);}
     else{console.log(`It's a ${key}: ${strStory.substr(strStory.indexOf(":")+1)}`);}
}