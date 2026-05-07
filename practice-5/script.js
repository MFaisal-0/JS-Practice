let btn = document.createElement("button");
btn.innerText = "Click me";

let box = document.querySelector("div");
// box.append(btn);
// box.prepend(btn);
// box.before(btn);
box.after(btn);

let para = document.querySelector("p");

// para.remove();

let newpara = document.createElement("p");
newpara.innerText = "this is new para";

para.appendChild(newpara);

para.removeChild(newpara);