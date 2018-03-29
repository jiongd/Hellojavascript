import LoginStory from "./LoginStory.mjs";

let given="Given: open login page";
let when1="When: enter user name [admin]";
let when2="When: enter password [taylor2018]";
let then="Then: [Successful!]";

let arraylogin=[given,when1,when2,then];
const objlogin=new LoginStory(arraylogin);
objlogin.play();