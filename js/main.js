document.addEventListener("click", e => {
        const isDropdownbutton = e.target.matches("[data-dropdown-btn]")
        if (!isDropdownbutton &&
            e.target.closest("[data-dropdown]") != null) return

        let currentDropdown
        if (isDropdownbutton) {
            currentDropdown = e.target.closest("[data-dropdown]")
            currentDropdown.classList.toggle("active");
        }
        document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
            if (dropdown === currentDropdown)
                return
            dropdown.classList.remove("active");
        })
    })
    /* button */
const signInSection = document.querySelector(".sign-in");
const changeBackgroundLeftButton = document.getElementById("changeBackgroundLeft");
const changeBackgroundRightButton = document.getElementById("changeBackgroundRight");

// List of background images
const backgroundImages = [
    "../img/hugging.jpg",
    "../img/hug2.jpg",
    "../img/hug3.jpg"
];

let currentBackgroundIndex = 0;

// Function to change the background image
function changeBackgroundImage() {
    signInSection.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
}

// Event listener for the left button
changeBackgroundLeftButton.addEventListener("click", () => {
    currentBackgroundIndex = (currentBackgroundIndex - 1 + backgroundImages.length) % backgroundImages.length;
    changeBackgroundImage();
});

// Event listener for the right button
changeBackgroundRightButton.addEventListener("click", () => {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
    changeBackgroundImage();
});

// Set the initial background image
changeBackgroundImage();

const prompt = require("prompt-sync")({ sigint: true });
const a = [];
let n = prompt();
for (let i = 0; i < n; i++)
    a.push(prompt(i));
console.log(a);