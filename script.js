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