const cookieContainer = document.getElementById("cookieContainer");

const funcCheckbox = document.getElementById("func");
const nessCheckbox = document.getElementById("ness");
const promCheckbox = document.getElementById("prom");

funcCheckbox.checked = true;
nessCheckbox.checked = true;
promCheckbox.checked = true;

const allBtn = document.getElementById("all-btn");
const selectedBtn = document.getElementById("selected-btn");

allBtn.addEventListener("click", () => {
    funcCheckbox.checked = true;
    nessCheckbox.checked = true;
    promCheckbox.checked = true;

    removePopup();
});

selectedBtn.addEventListener("click", () => {
    removePopup();
});

const removePopup = () => {
    if (funcCheckbox.checked || nessCheckbox.checked || promCheckbox.checked) {
        cookieContainer.remove();
    }
    else {
        alert("You must select one!");
    }
}