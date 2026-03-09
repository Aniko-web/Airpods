let header_img = document.querySelectorAll(".header_img");
let i = 0;

setInterval(() => {
    header_img[i].classList.remove("active");
    i = (i + 1) % header_img.length;
    header_img[i].classList.add("active");
}, 3000);