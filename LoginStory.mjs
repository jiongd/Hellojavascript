import story from "./story.mjs";
import webdriver from "selenium-webdriver";

export default class LoginStory extends story {
   constructor(content){
       super(content);
       this.username;
       this.password;
       this.expected;
       this.actual;
   }
  When(context){
      super.When(context);
      if(context===" enter user name [admin]") {
         this.username=context.substring(context.indexOf("[")+1,context.indexOf("]"));
         console.log(this.username);
    }
      if(context===" enter password [taylor2018]") {
          this.password=context.substring(context.indexOf("[")+1,context.indexOf("]"));
          console.log(this.password);
      }
  }
 Then(context){
     super.Then(context);
     if(context===" [successful!]"){
     this.expected=context.substring(context.indexOf("[")+1,context.indexOf("]"));
     console.log(this.expected);
     }
 }
}