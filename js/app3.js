//elements
const hobbiesWrap = document.querySelector(".hobbies-wrap");
const image = document.querySelector(".img-prev");
const imageSrc = document.querySelector("#img-src");
const continueBtn = document.querySelector(".continue-btn");
const prevBtn = document.querySelector(".prev-btn");

const updateInputsValues = () => {
  if (wizardDetailsObj.phase3.imgSrc !== "") {
    imageSrc.value = wizardDetailsObj.phase3.imgSrc;
    image.src = wizardDetailsObj.phase3.imgSrc;
    image.classList.remove("hidden");
  }
};

updateInputsValues();

async function getData() {
  const resp = await fetch("../data/hobbies.json");
  const data = await resp.json();
  printHobbies(data);
}
getData();

function printHobbies(hobbies) {
  hobbiesWrap.innerHTML = "";
  hobbies.forEach((hobby) => {
    const divWrap = document.createElement("div");
    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.id = hobby.name;
    if (wizardDetailsObj.phase3.hobbies.includes(hobby.name)) {
      checkboxInput.checked = true;
    }
    const label = document.createElement("label");
    label.setAttribute("for", hobby.name);
    label.innerText = hobby.name;
    divWrap.appendChild(checkboxInput);
    divWrap.appendChild(label);
    hobbiesWrap.appendChild(divWrap);
  });
}

//Event listeners
imageSrc.addEventListener("change", () => {
  image.classList.remove("hidden");
  image.src = imageSrc.value;
});

continueBtn.addEventListener("click", () => {
  const hobbies = [];

  const checkedInputs = document.querySelectorAll(
    ".hobbies-wrap input:checked"
  );
  checkedInputs.forEach((input) => {
    hobbies.push(input.nextElementSibling.innerText);
  });
  if (hobbies.length === 0) {
    hobbiesWrap.classList.add("wrong-input");
  } else {
    hobbiesWrap.classList.remove("wrong-input");
  }
  if (!imageSrc.value) {
    imageSrc.classList.remove("is-valid");
    imageSrc.classList.add("is-invalid");
  } else if (imageSrc.value) {
    imageSrc.classList.remove("is-invalid");
    imageSrc.classList.add("is-valid");
  }
  if (hobbies.length && imageSrc.value) {
    wizardDetailsObj.phase3.hobbies = hobbies;
    wizardDetailsObj.phase3.imgSrc = imageSrc.value;
    localStorage.setItem("wizardDetailsObj", JSON.stringify(wizardDetailsObj));
    const update = formFlow;
    update.phase3 = true;
    localStorage.setItem("formFlow", JSON.stringify(update));
    window.location.replace("phase4.html");
  }
});

prevBtn.addEventListener("click", () => {
  const update = formFlow;
  update.phase3 = false;
  update.phase2 = false;
  localStorage.setItem("formFlow", JSON.stringify(update));
  window.location.replace("phase2.html");
});
