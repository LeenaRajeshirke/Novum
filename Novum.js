let btn = document.querySelector("#btn");
let email = document.querySelector("#email")
let sbtn = document.querySelector("#sbtn");
 btn.addEventListener("click", () => {
 email.style.display = "block";
 sbtn.style.display = "block";
});

let msg = document.querySelector("#con-msg");
sbtn.addEventListener("click", () => {
  msg.style.display = "block";
})

let magic = document.querySelector("#magic");
let body = document.querySelector("body");
let currMode = "dark";

magic.addEventListener("click", () => {
  if(currMode === "dark"){
     currMode = "light";
     body.classList.add("light");
     body.classList.remove("dark");
  }
  else{
     currMode = "dark";
     body.classList.add("dark");
     body.classList.remove("light");
  }
  console.log(currMode);
})

let infoBtn = document.querySelector("#info");
let helpBtn = document.querySelector("#help");
body.before(infoBtn, helpBtn, magic);

let img = document.querySelector("#img");
let head = document.querySelector("head");
head.before(img);
