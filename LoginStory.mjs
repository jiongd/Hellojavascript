import story from "./story.mjs";
import webdriver from "selenium-webdriver";

export default class LoginStory extends story {
   constructor(content,username,password,expected,actual){
       super(content);
       this.username=username;
       this.password=password;
       this.expected=expected;
       this.actual=actual;
   }
  When(context){
      super.When(context);
      this.username=context.substring(context.indexOf("[")+1,context.indexOf("]"));
      this.password=context.substring(context.indexOf("[")+1,context.indexOf("]"));
  }
 Then(context){
     super.Then(context);
     this.expected=context.substring(context.indexOf("[")+1,context.indexOf("]"));
 }
}