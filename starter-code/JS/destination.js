let x = document.querySelectorAll(".plants li");
let div = document.querySelectorAll(".pln");
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
        div.forEach(function (x) {
            if (x.classList.contains(e.target.className)){
                x.classList.remove('off');
            }
            else
                x.classList.add('off');
        })
    })
})