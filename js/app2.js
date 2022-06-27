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
if (wizardDetailsObj.phase2) {
  cityInput.value = wizardDetailsObj.phase2.city;
  streetInput.value = wizardDetailsObj.phase2.street;
  numberInput.value = wizardDetailsObj.phase2.number;
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

nextBtn.addEventListener("click", () => {
  markInputIfValid(cityInput, isCityInputValid);
  markInputIfValid(streetInput, isStreetValid);
  markInputIfValid(numberInput, isNumberValid);
  for (const input of inputsArray) {
    if (input.classList.contains("is-invalid")) return;
  }

  wizardDetailsObj.phase2.city = cityInput.value;
  wizardDetailsObj.phase2.street = streetInput.value;
  wizardDetailsObj.phase2.number = numberInput.value;
  location.href("../phase3.html");
});
