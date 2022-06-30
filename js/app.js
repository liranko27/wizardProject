const formFlow = JSON.parse(localStorage.getItem("formFlow"));
const wizardDetailsObj = JSON.parse(localStorage.getItem("wizardDetailsObj"));

const redirectToValidPage = () => {
  //checks if there is no formFlow object in local storage which means the user never passed through the welcome phase
  if (!formFlow) window.location.replace("../pages/welcome.html");

  const currentPageUrl = window.location.href;
  const arrayOfUrlParameters = currentPageUrl.split("/");
  const currPage =
    arrayOfUrlParameters[arrayOfUrlParameters.length - 1].match(/^\w+/)[0];
  //checks if the page has been touched before, if so, we can stay on that page
  if (formFlow[currPage]) {
    return;
  } else {
    for (const page in formFlow) {
      //checks for the first page that hasnt been filled up
      if (!formFlow[page]) {
        //checks if the found page is the page we're on to avoid infinite redirection
        if (window.location.href.includes(page)) {
          break;
        }
        window.location.replace(`../pages/${page}.html`);
        break;
      }
    }
  }
};
redirectToValidPage();
