const checkbox = document.getElementById("checkbox");
const main = document.getElementById("main");

checkbox.addEventListener("change", event => {
    main.classList.toggle("light", event.target.checked);
});