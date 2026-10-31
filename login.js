
const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");
const authForm = document.getElementById("authForm");
const nameGroup = document.getElementById("nameGroup");
const submitBtn = document.getElementById("submitBtn");
const authMessage = document.getElementById("authMessage");
const dashboard = document.getElementById("dashboard");

let isSignup = false;
let registeredUser = null;

// Signup mode
signupTab.addEventListener("click", function () {
    isSignup = true;

    signupTab.classList.add("active");
    loginTab.classList.remove("active");

    nameGroup.classList.remove("hidden");
    document.getElementById("name").required = true;

    submitBtn.textContent = "Create Account";
    authMessage.textContent = "";
});

// Login mode
loginTab.addEventListener("click", function () {
    isSignup = false;

    loginTab.classList.add("active");
    signupTab.classList.remove("active");

    nameGroup.classList.add("hidden");
    document.getElementById("name").required = false;

    submitBtn.textContent = "Login";
    authMessage.textContent = "";
});

// Form submit
authForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim().toLowerCase();
    const password = document.getElementById("password").value;

    if (isSignup) {

        if (!name) {
            authMessage.textContent = "Naam enter karein.";
            return;
        }

        if (password.length < 8) {
            authMessage.textContent =
                "Password kam se kam 8 characters ka hona chahiye.";
            return;
        }

        registeredUser = {
            name: name,
            email: email,
            password: password
        };

        authMessage.textContent =
            "Account demo mein create ho gaya! Ab Login karein.";

        authForm.reset();

    } else {

        if (!registeredUser) {
            authMessage.textContent =
                "Pehle Signup karein.";
            return;
        }

        if (
            email === registeredUser.email &&
            password === registeredUser.password
        ) {
            authForm.classList.add("hidden");
            dashboard.classList.remove("hidden");

            document.getElementById("welcomeText").textContent =
                "Namaste " + registeredUser.name +
                "! Aap successfully login ho gaye.";

        } else {
            authMessage.textContent =
                "Email ya password galat hai.";
        }
    }
});

// Logout
document.getElementById("logoutBtn").addEventListener("click", function () {
    dashboard.classList.add("hidden");
    authForm.classList.remove("hidden");

    authForm.reset();
    authMessage.textContent = "Aap logout ho gaye hain.";
});
