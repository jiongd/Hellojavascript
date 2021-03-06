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
  GetKey(context){
     const value=context.substring(context.indexOf("[")+1,context.indexOf("]"));
     return value;
  }
  When(context){
      super.When(context);
      // 使用正则表达式，\s表示空格, + 表示一个或多个空格，[]在正则表达式中需要进行转义，用\转义；
      if(/enter\s+user\s+name\s+\[admin\]/.test(context)){
         this.username=this.GetKey(context);
         console.log(`The username is ${this.username}`);
       }
      if(/enter\s+password\s+\[taylor2018\]/.test(context)){
          this.password=this.GetKey(context);       
          console.log(`The password is ${this.password}`);
      }
  }
 Then(context){
     super.Then(context);
     if(/\[successful!\]/.test(context)){
     this.expected=this.GetKey(context);
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
             
               if(this.actual.toLowerCase()===this.expected.toLowerCase()){
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
