const cardBody = document.querySelector(".card-body");
const cardImg = document.querySelector("#card_img");
const newWizardBtn = document.querySelector("#new_wizard_btn");
const prevBtn = document.querySelector("#previous_btn");

const updateWizardDetailsSummary = () => {
  //add class invalid in phase 3
  const fullNameCardTitle = document.createElement("h5");
  fullNameCardTitle.classList.add("card-title");
  fullNameCardTitle.innerText = wizardDetailsObj.phase1.fullName;
  const emailCardText = document.createElement("p");
  emailCardText.classList.add("card-text");
  emailCardText.innerText = `Email: ${wizardDetailsObj.phase1.email}`;
  const birthDateText = document.createElement("p");
  birthDateText.classList.add("card-text");
  birthDateText.innerText = `Birth date: ${wizardDetailsObj.phase1.birthDate}`;
  const addressText = document.createElement("p");
  addressText.classList.add("card-text");
  addressText.innerText = `City: ${wizardDetailsObj.phase2.city}, Street: ${wizardDetailsObj.phase2.street}, Number: ${wizardDetailsObj.phase2.num}`;
  const hobbiesText = document.createElement("p");
  hobbiesText.classList.add("card-text");
  hobbiesText.innerText = `Hobbies: ${wizardDetailsObj.phase3.hobbies.join(
    ", "
  )}`;
  cardImg.src = wizardDetailsObj.phase3.imgSrc;
  cardBody.append(
    fullNameCardTitle,
    emailCardText,
    birthDateText,
    addressText,
    hobbiesText
  );
};
updateWizardDetailsSummary();

const updateFormFlowPrevBtnClicked = () => {
  formFlow.phase3 = false;
  localStorage.setItem("formFlow", JSON.stringify(formFlow));
};

prevBtn.addEventListener("click", () => {
  updateFormFlowPrevBtnClicked();
  window.location.replace("../pages/phase3.html");
});

newWizardBtn.addEventListener("click", () => {
  localStorage.clear();
  window.location.replace("../pages/welcome.html");
});
