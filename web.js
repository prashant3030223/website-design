
document.addEventListener('DOMContentLoaded', function () {
    displayWelcomeMessage();
    setupFormSubmission();
});
function displayWelcomeMessage() {
    console.log("Welcome to prashant' company!");
}

function setupFormSubmission() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event){
        console.log("Form submitted!");
        contactForm.reset();
    });
}

  