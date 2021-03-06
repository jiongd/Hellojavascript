import Story from "./story.mjs";
import webdriver from "selenium-webdriver";
export default class MyStory extends Story{
   Given(context){
      super.Given(context);
   } 
   When(context){
       super.When(context);
       if(context===" ask Open the door") this.event("question","who are you");
       if(context===" say I am Mom") this.event("question","Mom is back!")
   }
   Then(context){
       super.Then(context);
       let driver= new webdriver.Builder().forBrowser("chrome").build();
       const msg_url='https://raw.githubusercontent.com/EverDoc/hellojs/webdriver/mom.txt';
       driver.get(msg_url);
       driver.wait(webdriver.until.urlIs(msg_url), 1000*10)
       .then((success)=>{
           driver.findElement(webdriver.By.tagName('pre')).getText().then((message)=>{
                   driver.quit();
                   console.log(message);
               }
           );
           },(reason)=>{
               // do nothing
               console.log(reason);
               driver.quit();
       });
   }
}