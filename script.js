//load page when website is opened
document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const titles = ["photographer", "graphic designer", "web designer and developer", "writer & editor"];
    let index = 0;

    const cycleText = setInterval(() => {
        loadingText.textContent = titles[index];
        index = (index + 1) % titles.length;
    }, 1000); // Change every second

    // Simulate loading time
    setTimeout(() => {
        clearInterval(cycleText);
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("homepage-content").style.display = "block";
    }, 5000); // Set a time for the loading screen to disappear
});

//project gallery on homepage
const carousels = {
    exercises: { index: 0 },
    assignments: { index: 0 },
    others: { index: 0 }
};

function showSlide(sectionId) {
    const carousel = document.getElementById(sectionId);
    const items = carousel.querySelectorAll('.carousel-item');
    const currentIndex = carousels[sectionId].index;

    items.forEach((item, index) => {
        item.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

function nextSlide(sectionId) {
    const items = document.getElementById(sectionId).querySelectorAll('.carousel-item');
    carousels[sectionId].index = (carousels[sectionId].index + 1) % items.length;
    showSlide(sectionId);
}

function previousSlide(sectionId) {
    const items = document.getElementById(sectionId).querySelectorAll('.carousel-item');
    carousels[sectionId].index = (carousels[sectionId].index - 1 + items.length) % items.length;
    showSlide(sectionId);
}