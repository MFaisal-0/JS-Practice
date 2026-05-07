let newbtn = document.createElement("Button");
newbtn.innerText = "click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";

document.querySelector("body").prepend(newbtn);

// Q.2 

let para = document.querySelector("p");
para.classList.add("newpara");