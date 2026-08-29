const slides = document.querySelectorAll(".beliefs-slide");
const dots = document.querySelectorAll(".belief-dot");

const prevButton = document.getElementById("belief-prev");
const nextButton = document.getElementById("belief-next");

let currentSlide = 0;

function showSlide(index) {
    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }

    currentSlide = index;
    slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentSlide);
    });
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentSlide);
    });
}

prevButton.addEventListener("click", () => {
    showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
    showSlide(currentSlide + 1);
});

dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
        showSlide(i);
    });
});

showSlide(0);