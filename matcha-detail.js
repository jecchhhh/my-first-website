document.addEventListener("DOMContentLoaded", function () {

    const photo = document.querySelector(".detail-photo");
    const content = document.querySelector(".detail-content");

    if (photo) {
        photo.addEventListener("mouseenter", function () {
            photo.style.transform = "translateY(-5px)";
            photo.style.transition = "transform 0.4s ease";
        });

        photo.addEventListener("mouseleave", function () {
            photo.style.transform = "translateY(0)";
        });
    }


    if (content) {
        content.addEventListener("mouseenter", function () {
            content.style.transform = "translateY(-3px)";
            content.style.transition = "transform 0.4s ease";
        });

        content.addEventListener("mouseleave", function () {
            content.style.transform = "translateY(0)";
        });
    }

});