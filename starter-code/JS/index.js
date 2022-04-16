let mobileNav = document.querySelector(".mobile-nav");
let list = document.querySelector('.list');

mobileNav.addEventListener("click", function () {
    if (list.style.display === "none")
        list.style.cssText = `display: block;
        position: absolute;
        top: 15%;
        background-color: rgba(48, 51, 59, 0.85);
        z-index: 10;
        border-radius: 10px;
        padding: 20px`;
    else
        list.style.cssText = `display: none;`;
});