/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
  let action = ["ate ", "peed ", "crushed ", "broke "];
  let what = ["my homework ", "the keys ", "the car "];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let who1 = Math.floor(Math.random() * who.length);
  let action1 = Math.floor(Math.random() * action.length);
  let what1 = Math.floor(Math.random() * what.length);
  let when1 = Math.floor(Math.random() * when.length);

  let excuse = document.getElementById("excuse");
  excuse.innerHTML = who[who1] + action[action1] + what[what1] + when[when1];
  console.log(excuse);
};
