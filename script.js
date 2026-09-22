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