// =========================
// MODE SOMBRE / MODE CLAIR
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Mode clair";
    } else {
        themeButton.textContent = "Mode sombre";
    }

});


// =========================
// CHANGEMENT DE PHOTO
// =========================

const photo = document.getElementById("photoProfil");

photo.addEventListener("mouseenter", function () {

    photo.src = "photo_profile_portfolio_2.png";

});

photo.addEventListener("mouseleave", function () {

    photo.src = "photo_profile_portfolio.png";

});

// =========================
// ANIMATION AU SCROLL
// =========================

const elements = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach(function (element) {

    observer.observe(element);

});
