//Progress bar check
const progressBar = document.querySelector(".progress-bar");
const formFlow = JSON.parse(localStorage.getItem("formFlow"));
const updateProgressBar = () => {
  let barPrecentage = 0;
  for (const page in formFlow) {
    if (page === "welcome") continue;
    barPrecentage += 25;
  }
  progressBar.classList[1] = `w-${barPrecentage}`;
};

//Page navigation due progress
