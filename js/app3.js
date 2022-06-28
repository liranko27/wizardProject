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
    divWrap.classList.add('d-flex')
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
  const localData = JSON.parse(localStorage.getItem("wizardDetailsObj"));
  const checkedInputs = document.querySelectorAll(
    ".hobbies-wrap input:checked"
  );
  checkedInputs.forEach((input) => {
    hobbies.push(input.nextElementSibling.innerText);
  });
  if (!hobbies.length) {
    hobbiesWrap.classList.add("wrong-input");
  }
  if (!imageSrc.value) {
    imageSrc.classList.add("wrong-input");
  } else {
    localData.phase3.hobbies = hobbies;
    localData.phase3.imgSrc = imageSrc.value;
    localStorage.setItem("wizardDetailsObj", JSON.stringify(localData));
    window.location.replace("phase4.html");
  }
});

prevBtn.addEventListener("click", () => {
    const update = formFlow
    update.phase3 = false
    update.phase2 = false
    localStorage.setItem('formFlow',JSON.stringify(update))
  window.location.replace("phase2.html");
});
