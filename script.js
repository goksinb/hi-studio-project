document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const name = "Frontend Femme";
    let index = 0;

    function typeEffect() {
        if (index < name.length) {
            nameElement.textContent += name.charAt(index);
            index++;
            setTimeout(typeEffect, 150); // Adjust the delay for typing speed (milliseconds)
        }
    }

    typeEffect();
});
