export default class story{
  constructor(content){
     this.content=content;
  }
    Given(message){
    this.event("Given",message);
  }
    When(message){
     this.event("When",message);  
  }
    Then(message){
      this.event("Then",message);
  }
    event(even,message){
      console.log(`It's a ${even}: ${message}`);
  }
  play(){ 
    console.log(this.content); 
    for(let index = 0;index<this.content.length;index++){
       const strContent=this.content[index];
       const key=strContent.substr(0,strContent.indexOf(":"));
       const message=strContent.substr(strContent.indexOf(":")+1);
       switch(key){
           case "Given":
              this.Given(message);
              break;
           case "When":
               this.When(message);
               break;
           case "Then":
               this.Then(message);
            default:
             //  this.event(key,message);
               break;
        
               
          
       }

     }
  }


}


