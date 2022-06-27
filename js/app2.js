const cityInput = document.querySelector("#city_input");
const nextBtn = document.querySelector("#next_btn");
const previousBtn = document.querySelector("#previous_btn");
const streetInput = document.querySelector("#street_input");
const numberInput = document.querySelector("#number_input");

const inputsArray = [streetInput, numberInput, cityInput];
const wizardDetailsObj = JSON.parse(localStorage.getItem("wizardDetailsObj"));

const createCitiesOptionsElements = (data) => {
  for (const city of data) {
    const option = document.createElement("option");
    option.value = city;
    option.innerText = city;
    cityInput.appendChild(option);
  }
};

const getData = async () => {
  const res = await fetch("../data/cities.json");
  const data = await res.json();
  return data;
};

getData().then(createCitiesOptionsElements);

const updateInputsValues = () => {
  cityInput.value = wizardDetailsObj.phase2.city;
  streetInput.value = wizardDetailsObj.phase2.street;
  numberInput.value = wizardDetailsObj.phase2.num;
};

updateInputsValues();

const isCityInputValid = () => {
  return cityInput.value;
};
const isStreetValid = () => {
  return streetInput.value.match(/^[a-zA-Z\.-]+$/);
};
const isNumberValid = () => {
  return Number(numberInput.value) > 0;
};

const markInputIfValid = (input, valid) => {
  if (valid()) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
  }
};
const updateDetailsLocalStorage = () => {
  wizardDetailsObj.phase2.city = cityInput.value;
  wizardDetailsObj.phase2.street = streetInput.value;
  wizardDetailsObj.phase2.num = numberInput.value;
  localStorage.setItem("wizardDetailsObj", JSON.stringify(wizardDetailsObj));
};
const updateFormFlowLocalStorage = (valid) => {
  valid ? (formFlow.phase2 = true) : (formFlow.phase2 = false);
};
const isFormValid = () => {
  markInputIfValid(cityInput, isCityInputValid);
  markInputIfValid(streetInput, isStreetValid);
  markInputIfValid(numberInput, isNumberValid);
  for (const input of inputsArray) {
    if (input.classList.contains("is-invalid")) {
      updateFormFlowLocalStorage(false);
      return;
    }
  }
  updateFormFlowLocalStorage(true);
  return true;
};

nextBtn.addEventListener("click", () => {
  if (!isFormValid()) return;
  updateDetailsLocalStorage();
  window.location.replace("../pages/phase3.html");
});

previousBtn.addEventListener("click", () => {
  isFormValid();
  updateDetailsLocalStorage();
  window.location.replace("../pages/phase1.html");
});
