const textAreainput = document.getElementById("save");
const resetButton = document.getElementById("reset"); // Definito correttamente il pulsante di reset

const saveButton = document.getElementById("save")
saveButton.addEventListener("click", function () {
    
    // Recuperare il contenuto della textarea
    const text = textAreainput.value;
    localStorage.setItem("user-form", text);

    const successAlert = document.getElementById("success-alert");
    successAlert.classList.remove("alert-coming");
    successAlert.classList.remove("alert-going");
    successAlert.classList.remove("invisible");
    successAlert.classList.add("alert-coming");

    setTimeout(function () {
        successAlert.classList.add("alert-going");
    }, 3000);
});

// Pulsante Reset
resetButton.addEventListener("click", function () {
    textAreainput.value = "";
    localStorage.removeItem("form"); // Corretto il metodo

    const resetAlert = document.getElementById("reset-alert");
    resetAlert.classList.remove("alert-coming");
    resetAlert.classList.remove("alert-going");
    resetAlert.classList.remove("invisible");
    resetAlert.classList.add("alert-coming");

    setTimeout(function () {
        resetAlert.classList.add("alert-going");
    }, 3000);
});
