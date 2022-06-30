const fullNameInput = document.querySelector("#fullNameInput");
const nextButton = document.querySelector("#nextButton");
const previousButton = document.querySelector("#previousButton");
const emailInput = document.querySelector("#emailInput");
const birthDateInput = document.querySelector("#birthDateInput");
const birthDateError = document.querySelector("#birthDateError");
const premiumCheckboxInput = document.querySelector("#premiumCheckbox")

const inputsArray = [fullNameInput, emailInput, birthDateInput];

const updateInputsValues = () => {
  fullNameInput.value = wizardDetailsObj.phase1.fullName;
  emailInput.value = wizardDetailsObj.phase1.email;
  birthDateInput.value = wizardDetailsObj.phase1.birthDate;
};

updateInputsValues();


function validatePhase1Inputs() {
  if (fullNameValid(fullNameInput.value)) {
    fullNameInput.classList.remove("is-invalid");
    fullNameInput.classList.add("is-valid");
  } else {
    fullNameInput.classList.remove("is-valid");
    fullNameInput.classList.add("is-invalid");
  }

  if (emailVaild(emailInput.value)) {
    emailInput.classList.remove("is-invalid");
    emailInput.classList.add("is-valid");
  } else {
    emailInput.classList.remove("is-valid");
    emailInput.classList.add("is-invalid");
  }

  if (birthDateValid(birthDateInput.value)) {
    birthDateInput.classList.remove("is-invalid");
    birthDateInput.classList.add("is-valid");
    birthDateInput.style.color="#198754"
    birthDateInput.style.borderColor="#198754"
    birthDateError.textContent=""
  } else {
    birthDateInput.classList.remove("is-valid");
    birthDateInput.classList.add("is-invalid");
    birthDateInput.style.color="#dc3545"
    birthDateInput.style.borderColor="#dc3545"
    birthDateError.textContent="Invalid Birth date ! \nyou must be at least 18 years old !"
  }

  //checks if any of the inputs is invalid. if not  -> returns true
  for (const input of inputsArray) {
    if (input.classList.contains("is-invalid")) {
      return;
    }
  }
  return true;
}

const updateDetailsLocalStorage = () => {
  wizardDetailsObj.phase1.fullName = fullNameInput.value;
  wizardDetailsObj.phase1.email = emailInput.value;
  wizardDetailsObj.phase1.birthDate = birthDateInput.value;
  premiumDetails.isPremium =premiumCheckboxInput.checked;
  localStorage.setItem("wizardDetailsObj", JSON.stringify(wizardDetailsObj));
};
const updateFormFlowLocalStorage = (valid) => {
  valid ? (formFlow.phase1 = true) : (formFlow.welcome = false);
  localStorage.setItem("formFlow", JSON.stringify(formFlow));
};

nextButton.addEventListener("click", function () {
  if (!validatePhase1Inputs()) return;
  updateFormFlowLocalStorage(true);
  updateDetailsLocalStorage();
  window.location.replace("../pages/phase2.html");
});
previousButton.addEventListener("click", () => {
  updateFormFlowLocalStorage(false);
  updateDetailsLocalStorage();
  window.location.replace("../pages/welcome.html");
});
