const cardBody = document.querySelector(".card-body");
const cardImg = document.querySelector("#card_img");
const newWizardBtn = document.querySelector("#new_wizard_btn");
const prevBtn = document.querySelector("#previous_btn");
const oneImgContainer = document.querySelector("#one_image_container");
const imageGalleryContainer = document.querySelector(
  "#image_gallery_container"
);
const imagesContainer = document.querySelector(".carousel-inner");

const showWizardDetailsSummary = (isPremium) => {
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
  cardBody.append(
    fullNameCardTitle,
    emailCardText,
    birthDateText,
    addressText,
    hobbiesText
  );
  if (isPremium) {
    const linkedInLink = document.createElement("p");
    linkedInLink.classList.add("card-text");
    linkedInLink.innerText = `LinkedIn Link: ${wizardDetailsObj.phase3.linkedIn}`;
    const subscriptionPlan = document.createElement("p");
    subscriptionPlan.classList.add("card-text");
    subscriptionPlan.innerText = `Subscription Plan: ${premiumDetails.plan}`;
    const attachedResume = document.createElement("p");
    attachedResume.classList.add("card-text");
    attachedResume.innerText = `Attached Resume: ${wizardDetailsObj.phase3.resume}`;

    for (const img of wizardDetailsObj.phase3.imgSrc) {
      const carouselImg = document.createElement("div");
      const imgEl = document.createElement("img");
      imgEl.src = img;
      imgEl.classList = `d-block w-100`;
      carouselImg.appendChild(imgEl);
      imagesContainer.appendChild(carouselImg);
    }
    imageGalleryContainer.classList.remove("visually-hidden");
    cardBody.append(linkedInLink, subscriptionPlan, attachedResume);
  } else {
    cardImg.src = wizardDetailsObj.phase3.imgSrc;
    oneImgContainer.classList.remove("visually-hidden");
  }
};

premiumDetails.isPremium
  ? showWizardDetailsSummary(true)
  : showWizardDetailsSummary(false);

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
