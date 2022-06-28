const fullNameInput = document.querySelector("#fullNameInput");
const nextButton = document.querySelector("#nextButton");
const previousButton = document.querySelector("#previousButton");
const emailInput = document.querySelector("#emailInput");
const birthDateInput = document.querySelector("#birthDateInput");

const inputsArray = [fullNameInput, emailInput, birthDateInput];

const updateInputsValues = () => {
  fullNameInput.value = wizardDetailsObj.phase1.fullName;
  emailInput.value = wizardDetailsObj.phase1.email;
  birthDateInput.value = wizardDetailsObj.phase1.birthDate;
};

updateInputsValues();

function alphanumeric(string) {
  const letters = /^[a-zA-Z]+$/;
  if (string.match(letters)) {
    return true;
  } else {
    return false;
  }
}

function fullNameValid(fullName) {
  const name = fullName.split(" ");
  console.log(name);
  const firstName = name[0];
  const lastName = name[1];

  if (name.length !== 2) {
    return false;
  } else if (firstName.length < 2 || lastName.length < 2) {
    return false;
  } else if (!alphanumeric(firstName) || !alphanumeric(lastName)) {
    return false;
  } else {
    return true;
  }
}
function emailVaild(email) {
  {
    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailformat.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
function birthDateValid(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

function checkIfAllValid() {
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
  } else {
    birthDateInput.classList.remove("is-valid");
    birthDateInput.classList.add("is-invalid");
  }

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
  localStorage.setItem("wizardDetailsObj", JSON.stringify(wizardDetailsObj));
};
const updateFormFlowLocalStorage = (valid) => {
  valid ? (formFlow.phase1 = true) : (formFlow.welcome = false);
  localStorage.setItem("formFlow", JSON.stringify(formFlow));
};

nextButton.addEventListener("click", function () {
  if (!checkIfAllValid()) return;
  updateFormFlowLocalStorage(true);
  updateDetailsLocalStorage();
  window.location.replace("../pages/phase2.html");
});
previousButton.addEventListener("click", () => {
  updateFormFlowLocalStorage(false);
  updateDetailsLocalStorage();
  window.location.replace("../pages/welcome.html");
});
