const formFlow = JSON.parse(localStorage.getItem("formFlow"));
const wizardDetailsObj = JSON.parse(localStorage.getItem("wizardDetailsObj"));
const premiumDetails = JSON.parse(localStorage.getItem("premiumDetails"));

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

//validations :
function alphanumeric(string) {
  const letters = /^[a-zA-Z]+$/;
  if (string.match(letters)) {
    return true;
  } else {
    return false;
  }
}

function fullNameValid(fullName) {
  const name = fullName.split(" ");

  const firstName = name[0];
  const lastName = name[1];

  if (name.length !== 2) {
    return false;
  } else if (firstName.length < 2 || lastName.length < 2) {
    return false;
  } else if (!alphanumeric(firstName) || !alphanumeric(lastName)) {
    return false;
  } else {
    return true;
  }
}
function emailVaild(email) {
  {
    const emailformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailformat.test(email)) {
      return true;
    } else {
      return false;
    }
  }
}
function birthDateValid(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

const isCityInputValid = () => {
  return cityInput.value;
};
const isStreetValid = () => {
  return streetInput.value.match(/^[a-zA-Z\.\s\-]+$/);
};
const isNumberValid = () => {
  return Number(numberInput.value) > 0;
};
