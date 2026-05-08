let btn = document.querySelector("#btn");

btn.addEventListener("click", (evt) => {
    console.log("Button was clicked!");
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
    btn.style.backgroundColor = "green";
});

btn.addEventListener("click", () => {
    console.log("item1");
});

btn.addEventListener("click", () => {
    console.log("item2");
});

const item3 = () => {
    console.log("item3");
}
btn.addEventListener("click", item3);

btn.addEventListener("click", () => {
    console.log("item4");
});

btn.removeEventListener("click", item3);