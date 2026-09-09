const toggleButton = document.querySelector(".toggle-password");
const passwordInput = document.querySelector("#password");
const eyeIcon = toggleButton.querySelector("i");

toggleButton.addEventListener("click", () => {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");

    } else {

        passwordInput.type = "password";

        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");

    }

});

new TomSelect("#country", {
    create: false,
    sortField: {
        field: "text",
        direction: "asc"
    },
    placeholder: "Selecciona un país"
});
