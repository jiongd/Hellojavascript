import Story from "./story.mjs";
export default class MyStory extends Story{
   Given(context){
      super.Given(context);
   } 
   When(context){
       super.When(context);
       if(context===" ask Open the door") super.event("question","who are you");
       if(context===" say I am Mom") super.event("question","Mom is back!")
   }
   Then(context){
       super.Then(context);
   }
}