//Progress bar check
const progressBar = document.querySelector(".progress-bar");
const formFlow = JSON.parse(localStorage.getItem("formFlow"));
const wizardDetailsObj = JSON.parse(localStorage.getItem("wizardDetailsObj"));

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
