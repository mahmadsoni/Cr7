/* CURSOR GLOW */

const glow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});

/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".scroll-reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

});

/* ACTIVE NAV */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop;

        if(scrollY >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            .includes(current)
        ){
            link.classList.add("active");
        }

    });

});
/* GALLERY LIGHTBOX */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const closeLightbox =
document.querySelector(".close-lightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target !== lightboxImg){

        lightbox.classList.remove("active");

    }

});
