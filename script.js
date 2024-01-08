const passwordInput = document.getElementById("password");
const form = document.querySelector(".login-form");
const leftHand = document.querySelector(".left-hand");
const rightHand = document.querySelector(".right-hand");
const toggleImage = document.getElementById("togglePassword");
const pupils = document.querySelectorAll(".eye .pupil");

passwordInput.addEventListener("focus", () => {
    form.classList.add("upwards");
    leftHand.classList.add("hands-up");
    rightHand.classList.add("hands-up");
});

passwordInput.addEventListener("input", () => {
    toggleImage.style.visibility = passwordInput.value.trim() ? 'visible' : 'hidden';
});

toggleImage.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    toggleImage.src = type === "password" ? "images/view.png" : "images/hide.png";
    passwordInput.focus();
});

passwordInput.addEventListener("focusout", () => {
    form.classList.remove("upwards");
    leftHand.classList.remove("hands-up");
    rightHand.classList.remove("hands-up");
});

window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = (e.pageX - rect.left) / 80 + "px";
        const y = (e.pageY - rect.top) / 80 + "px";
        pupil.style.transform = `translate3d(${x},${y}, 0px)`;
    });
});
