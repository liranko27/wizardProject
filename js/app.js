//Progress bar check
const progressBar = document.querySelector(".progress-bar");
const formFlow = JSON.parse(localStorage.getItem("formFlow"));

if (!formFlow) window.location.replace("../pages/welcome.html");

for (const page in formFlow) {
  if (!formFlow[page]) {
    window.location.replace(`../pages/${page}.html`);
    break;
  }
}

const updateProgressBar = () => {
  let barPrecentage = 0;
  for (const page in formFlow) {
    if (page === "welcome") continue;
    if (formFlow[page]) barPrecentage += 25;
  }

  progressBar.classList.remove(progressBar.classList[1]);
  progressBar.classList.add(barPrecentage);
  progressBar.ariaValueNow = barPrecentage;
};
updateProgressBar();

//Page navigation due progress
