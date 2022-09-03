// Activate dropdown on mobile
if (innerWidth <= 576) {
    document.getElementById("top-dropdown").className = "hide"
}

const showTopNav = () => {
    const drop = document.getElementById("top-dropdown");
    if (drop.className === "show") {
        drop.className = "hide"
    }
    else {
        drop.className = "show"
    }
}

const hideTopNav = () => {
    document.getElementById("top-dropdown").className = "hide"
}


// Activate dark theme
const darkIcon = document.querySelector(".dark-icon");
const darkIconMobile = document.querySelector(".dark-iconMobile");
const wrapper = document.querySelector("body");
const logo = document.querySelector("nav .left-nav img")
// For desktop
darkIcon.addEventListener("click" , () => {
    wrapper.classList.toggle("dark-theme")
    if (wrapper.classList.contains("dark-theme")) {
        darkIcon.src = "./img/sunCrop.png"
        logo.src = "./img/Logo.svg"
    } else {
        darkIcon.src = "./img/dark-theme.svg"
        logo.src = "./img/blueLogo.svg"
    }
})

// for mobile
darkIconMobile.addEventListener("click" , () => {
    wrapper.classList.toggle("dark-theme")
    if (wrapper.classList.contains("dark-theme")) {
        darkIconMobile.src = "./img/sunCrop.png"
        logo.src = "./img/Logo.svg"
    } else {
        darkIconMobile.src = "./img/dark-theme.svg"
        logo.src = "./img/blueLogo.svg"
    }
})

// Activate reveal on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("revealOnScroll")
        } else {
            reveals[i].classList.remove("revealOnScroll");
        }
    }
}

// Scale in
window.addEventListener("scroll", scaleIn);

function scaleIn() {
    const scales = document.querySelectorAll(".scale");
    for (let i = 0; i < scales.length; i++){
        let windowHeight = window.innerHeight;
        let scaleTop = scales[i].getBoundingClientRect().top;
        let scalePoint = 100;

        if (scaleTop < windowHeight - scalePoint) {
            scales[i].classList.add("scaleOnScroll")
        } else {
            scales[i].classList.remove("scaleOnScroll");
        }
    }
}