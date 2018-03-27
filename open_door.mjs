import MyStory from "./my_story.mjs";
let given="Given: stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: say I am Mom";
let then="Then: open the door";

let arrStory=[given,when1,when2,then];
let objStory=new MyStory(arrStory);
objStory.play();