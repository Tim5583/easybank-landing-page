const navEle = document.querySelector(".nav");
const hamburgerIcon = document.querySelector(".nav-hamburger-icon");
const closeIcon = document.querySelector(".nav-close-icon");

hamburgerIcon.addEventListener("click", () => {
    navEle.classList.add("show");
});

closeIcon.addEventListener("click", () => {
    navEle.classList.remove("show")
});