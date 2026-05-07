// let heading = document.querySelector("h2");

// // console.log(heading);
// heading.innerText = heading.innerText + " from Apna College students";

let boxes = document.querySelectorAll(".box");

let idx = 1
for(box of boxes){
    box.innerText = `value of box ${idx}`;
    idx++;
}