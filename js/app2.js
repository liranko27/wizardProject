// const getData = async () => {
//   const res = await fetch("../data/cities.json");
//   const data = await res.json();
//   console.log(data);
// };
// getData();
const cityInput = document.querySelector("#city_input");
const nextBtn = document.querySelector("#next_btn");
const streetInput = document.querySelector("#street_input");
const numberInput = document.querySelector("#number_input");
const inputsArray = [streetInput, numberInput, cityInput];
const wizardDetailsObj = JSON.parse(localStorage.getItem("wizardDetailsObj"));
const formFlow = JSON.parse(localStorage.getItem("formFlow"));

if (formFlow.phase1) {
  if (wizardDetailsObj.phase2) {
    cityInput.value = wizardDetailsObj.phase2.city;
    streetInput.value = wizardDetailsObj.phase2.street;
    numberInput.value = wizardDetailsObj.phase2.number;
  }
} else {
  console.log("hey");
}

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
  wizardDetailsObj.phase2.number = numberInput.value;
  localStorage.setItem("wizardDetailsObj", JSON.stringify(wizardDetailsObj));
};

nextBtn.addEventListener("click", () => {
  markInputIfValid(cityInput, isCityInputValid);
  markInputIfValid(streetInput, isStreetValid);
  markInputIfValid(numberInput, isNumberValid);
  for (const input of inputsArray) {
    if (input.classList.contains("is-invalid")) return;
  }
  updateDetailsLocalStorage();
  formFlow.phase2 = true;
  location.href("../pages/phase3.html");
});

previousBtn.addEventListener("click", () => {
  updateDetailsLocalStorage();
  localStorage.href("../pages/phase1.html");
});
