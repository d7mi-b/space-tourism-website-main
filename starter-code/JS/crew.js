let x = document.querySelectorAll(".list-crew li");
let div = document.querySelectorAll(".crw");
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

x.forEach(function(e) {
    e.addEventListener("click", function(y) {
        x.forEach(e => {
            e.classList.remove('active');
        });
        y.currentTarget.classList.add("active");
    })
})


x.forEach(function (w) {
    w.addEventListener("click", function (e) {
        console.log(e.target.className.split(" ")[0])
        div.forEach(function (x) {
            if (x.classList.contains(e.target.className.split(" ")[0])){
                x.classList.remove('off');
            }
            else
                x.classList.add('off');
        })
    })
})