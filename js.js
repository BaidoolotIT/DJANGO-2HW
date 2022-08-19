const myButton = document.querySelector("button")
myButton.addEventListener("click", out)

function out() {
    const h2 = document.querySelector("#test")
    h2.style.color = "green"
}
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}