//load page when website is opened
document.addEventListener("DOMContentLoaded", () => {
    const loadingText = document.getElementById("loading-text");
    const titles = ["photographer", "graphic designer", "web designer and developer", "writer & editor"];
    let index = 0;

    const cycleText = setInterval(() => {
        loadingText.textContent = titles[index];
        index = (index + 1) % titles.length;
    }, 1000); //timer for text change

    //loading time
    setTimeout(() => {
        clearInterval(cycleText);
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("homepage-content").style.display = "block";
    }, 5000); //time for loading screen to disappear
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

//form validation
document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let valid = true;
        //field validation
        const fields = [
            {id: "fname", message: "First name is required."},
            {id: "lname", message: "Last name is required."},
            {id: "email", message: "Please enter a valid email.", pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/},
            {id: "phone", message: "Please enter a valid phone number.", pattern: /^\(\d{3}\)\d{3}\d{4}$/},
            {id: "message", message: "Message cannot be empty."}
        ];
        // Remove existing error messages
        removeErrorMessages();
        //validation loop
        fields.forEach(field => {
            const input = document.getElementById(field.id);
            const value = input.value.trim();

            if (!value || (field.pattern && !field.pattern.test(value))) {
                showError(input, field.message);
                valid = false;
            }
        });
        //prevent submit for invalid form
        if (!valid) {
            event.preventDefault();
        }
    });
    function showError(element, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.style.color = "red";
        error.textContent = message;
        element.insertAdjacentElement("afterend", error);
    }
    function removeErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(error => error.remove());
    }
});