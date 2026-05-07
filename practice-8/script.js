let btn = document.querySelector("#btn");
let box = document.querySelector(".box");

// btn.onclick = () => {
//     console.log("button was clicked");
// }

// box.onmouseover = () => {
//     console.log("i am on box");
// }

btn.onclick = (evt) => {
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX ,evt.clientY);
}

box.onmouseover = (evt) => {
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX ,evt.clientY);
}