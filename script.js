document.addEventListener("DOMContentLoaded", function () {
    const instaContainer = document.querySelector(".insta-container");

    // Simulating Instagram API with placeholder images
    const instaImages = [
      "https://assets.onecompiler.app/437q9mqsc/437q9j94p/insta1.jpg",
      "https://assets.onecompiler.app/437q9mqsc/437q9j94p/insta2.jpg",
      "https://assets.onecompiler.app/437q9mqsc/437q9j94p/insta3.jpg",
      "https://assets.onecompiler.app/437q9mqsc/437q9j94p/insta4.jpg",
    ];

    instaImages.forEach(imgSrc => {
        let img = document.createElement("img");
        img.src = imgSrc;
        instaContainer.appendChild(img);
    });

    // Smooth scrolling effect
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });
});
