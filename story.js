let given="Given:stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: I am Mom";
let then="Then: open the door"

let arrayStory=[given,when1,when2,then];
console.log(arrayStory);
console.log("control-flow:for and switch")
for(let index=0;index<arrayStory.length;index++){
    const strStory=arrayStory[index];
    const key=strStory.substr(0,strStory.indexOf(":"));
    const message=strStory.substr(strStory.indexOf(":")+1);
    switch(key){
     case  "Given":{
        Given(message);
        break;
     }
     case "When":{
        When(message);;
        break;
     }
     case "Then":
     default:
     {
        Then(message);
        break;
     }
   }
}

function Given(message){
  event("Given",message);
}
function When(message){
    event("When",message);  
}
function Then(message){
    event("Then",message);
}
function event(even,message){
    console.log(`It's a ${even}: ${message}`);
}
    
