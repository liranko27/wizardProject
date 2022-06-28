//Progress bar check
const progressBar = document.querySelector(".progress-bar");
const formFlow = JSON.parse(localStorage.getItem("formFlow"));

if (!formFlow) window.location.replace("../pages/welcome.html");

for (const page in formFlow) {
  if (!formFlow[page]) {
    if (window.location.href.includes(page)) {
      break;
    }
    window.location.replace(`../pages/${page}.html`);
    break;
  }
}

const updateProgressBar = () => {
  let barPrecentage = 25;
  for (const page in formFlow) {
    if (page === "welcome") continue;
    if (formFlow[page]) barPrecentage += 25;
  }

  progressBar.classList.remove(progressBar.classList[1]);
  progressBar.classList.add(`w-${barPrecentage}`);
  progressBar.ariaValueNow = barPrecentage;
};
updateProgressBar();

//Page navigation due progress
