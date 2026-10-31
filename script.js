

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const yearElement = document.getElementById("year");

// Footer mein current year dikhayein
yearElement.textContent = new Date().getFullYear();

// Contact form ka demo interaction
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formMessage.textContent =
        `Shukriya ${name}! Aapka form demo successfully test hua.`;

    contactForm.reset();
});
