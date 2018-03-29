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
      if(context===" enter user name [admin]"){
         this.username=context.substring(context.indexOf("[")+1,context.indexOf("]"));
         console.log(`The username is ${this.username}`);
       }
      if(context===" enter password [taylor2018]"){
          this.password=context.substring(context.indexOf("[")+1,context.indexOf("]"));
          console.log(`The password is ${this.password}`);
      }
  }
 Then(context){
     super.Then(context);
     if(/[successful!]/.test(context)){
     this.expected=context.substring(context.indexOf("[")+1,context.indexOf("]"));
     console.log(`expected result is ${this.expected}`);
     }
     let driver=new webdriver.Builder().forBrowser("chrome").build();
     const loginurl="https://everdoc.github.io/hellojs/quize/login.html";
     driver.get(loginurl);
     driver.wait(webdriver.until.urlIs(loginurl),2000*10)
     .then((success)=>{
         driver.findElement(webdriver.By.id("name")).sendKeys(this.username).then(()=>{
         driver.findElement(webdriver.By.id("password")).sendKeys(this.password);}).then(()=>{
          driver.findElement(webdriver.By.className("ui button")).click();})
           .then((success)=>{
             driver.findElement(webdriver.By.id("result")).getText().then((message)=>{
                this.actual=message;
                console.log(`The actual is ${this.actual}`);
             
               if(this.actual.toLowerCase(this.expected)){
                 console.log("The case is PASS");
                 driver.quit();
                }else{
                console.log("The case is FAIL");
                driver.quit();
                 }
              })
           })
          }
       );
    }
 }
