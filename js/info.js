("use strict");

import { displayData } from "./helper.js";

const fileError = document.getElementById(`file-error`);

export function initValidation() {
  document.getElementById(`name`).addEventListener("keyup", (event) => {
    validateName();
  });
  document.getElementById(`surname`).addEventListener("keyup", (event) => {
    validateSurname();
  });
  document.getElementById(`email`).addEventListener("keyup", (event) => {
    validateEmail();
  });
  const phone = document
    .getElementById(`phone`)
    .addEventListener("keyup", (event) => {
      validatePhone();
    });
  const about = document
    .getElementById(`about-me`)
    .addEventListener("keyup", (event) => {
      textArea();
    });

  //Handle file
  document.getElementById(`file`).addEventListener("change", (event) => {
    loadFile(event);
  });
}

function validateName() {
  let nameObject = getNameAndValidate();
  const nameError = document.getElementById(`name-error`);
  displayData("a-name", nameObject.nameElement.value);
  if (nameObject.valid) {
    // OK
    nameObject.nameElement.setAttribute("class", "valid-input");
    nameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  nameObject.nameElement.setAttribute("class", "invalid-input");
  nameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getNameAndValidate() {
  const name = document.getElementById(`name`);
  if (name.value.length < 2 || !/^[ა-ჰ]+$/.test(name.value)) {
    return {
      valid: false,
      nameElement: name,
    };
  }
  return {
    valid: true,
    nameElement: name,
  };
}

function validateSurname() {
  let surnameObject = getSurnameAndValidate();
  const surnameError = document.getElementById(`surname-error`);
  displayData("a-surname", surnameObject.surnameElement.value);
  if (surnameObject.valid) {
    // OK
    surnameObject.surnameElement.setAttribute("class", "valid-input");
    surnameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  surnameObject.surnameElement.setAttribute("class", "invalid-input");
  surnameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getSurnameAndValidate() {
  const surname = document.getElementById(`surname`);
  if (surname.value.length < 2 || !/^[ა-ჰ]+$/.test(surname.value)) {
    return {
      valid: false,
      surnameElement: surname,
    };
  }
  return {
    valid: true,
    surnameElement: surname,
  };
}
function validateEmail() {
  let emailObject = getEmailAndValidate();
  const emailError = document.getElementById(`email-error`);
  displayData("a-email", emailObject.emailElement.value);
  const displayEmailIcon = document.getElementById(`a-email--icon`);
  if (emailObject.valid) {
    // OK
    emailObject.emailElement.setAttribute("class", "valid-input");
    emailError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  emailObject.emailElement.setAttribute("class", "invalid-input");
  emailError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getEmailAndValidate() {
  const email = document.getElementById(`email`);
  const emailRegex = /^[a-zA-Z0-9._-]+@redberry.ge$/;
  // const displayEmailIcon = document.getElementById(`a-email--icon`);
  if (!emailRegex.test(email.value)) {
    return {
      valid: false,
      emailElement: email,
    };
  }
  return {
    valid: true,
    emailElement: email,
  };
}

function validatePhone() {
  let phoneObject = getPhoneAndValidate();
  const phoneError = document.getElementById(`phone-error`);
  const displayPhoneIcon = document.getElementById(`a-phone--icon`);
  if (phoneObject.valid) {
    // OK
    phoneObject.phoneElement.setAttribute("class", "valid-input");
    phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  phoneObject.phoneElement.setAttribute("class", "invalid-input");
  phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
  return true;
}

function getPhoneAndValidate() {
  const phone = document.getElementById(`phone`);
  const phoneRegex = /^\+995\d{9}$|^\+995\s\d{3}\s\d{3}\s\d{3}$/;
  if (!phoneRegex.test(phone.value)) {
    return {
      valid: false,
      phoneElement: phone,
    };
  }
  return {
    valid: true,
    phoneElement: phone,
  };
}

function textArea() {
  const aboutMeLabel = document.getElementById(`about-label`);
  const aboutMeTextArea = document.getElementById(`about-me`).value;
  document.getElementById(`about-me--a`).innerHTML = aboutMeTextArea;
  displayData("about-me--a", aboutMeTextArea);
  if (aboutMeTextArea === "") {
    aboutMeLabel.classList.add(`hidden`);
  } else {
    aboutMeLabel.classList.remove(`hidden`);
  }
}

const imgBox = document.getElementById(`imgBox`);

const loadFile = function (event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.addEventListener("load", () => {
    localStorage.setItem("profilePicData", reader.result);
    var element = document.getElementById("profile-pic");
    if (element) {
      element.src = reader.result;
    } else {
      displayImage(event);
    }
  });
};

function displayImage(event, localStorageProfilePic) {
  const img = new Image();
  img.id = "profile-pic";
  if (localStorageProfilePic) {
    img.src = localStorageProfilePic;
  } else {
    img.src = URL.createObjectURL(event.target.files[0]);
  }

  img.style.width = `250px`;
  img.style.height = `auto`;
  img.style.borderRadius = `50%`;
  img.onload = function () {
    document.getElementById(`imgBox`).appendChild(img);
  };
}

const fillInputValues = function () {
  const name = document.getElementById(`name`);
  const surname = document.getElementById(`surname`);
  const email = document.getElementById(`email`);
  const phone = document.getElementById(`phone`);
  const about = document.getElementById(`about-me`);

  const infoFromLocalStroage = JSON.parse(localStorage.getItem(`info`));
  if (!infoFromLocalStroage) {
    return;
  }
  if (infoFromLocalStroage.name) {
    name.value = infoFromLocalStroage.name;
  }
  if (infoFromLocalStroage.surname) {
    surname.value = infoFromLocalStroage.surname;
  }
  if (infoFromLocalStroage.about) {
    about.value = infoFromLocalStroage.about;
  }
  if (infoFromLocalStroage.email) {
    email.value = infoFromLocalStroage.email;
  }
  if (infoFromLocalStroage.phone) {
    phone.value = infoFromLocalStroage.phone;
  }
};

function saveFormToLocalStorage() {
  // Save all form items to local storage
  const data = {
    name: document.getElementById(`name`).value,
    surname: document.getElementById(`surname`).value,
    about: document.getElementById(`about-me`).value,
    email: document.getElementById(`email`).value,
    phone: document.getElementById(`phone`).value,
  };
  localStorage.setItem(`info`, JSON.stringify(data));
}

export function handlePageLoad() {
  window.addEventListener(`load`, (event) => {
    console.log(`page is fully loaded`);
    fillInputValues();
  });
}

export function handleNextSectionClick() {
  document
    .getElementById(`next-section-experience`)
    .addEventListener(`click`, function (event) {
      // Validate form
      event.preventDefault();
      let name = getNameAndValidate();
      let surname = getSurnameAndValidate();
      let email = getEmailAndValidate();
      let phone = getPhoneAndValidate();

      if (name.valid && surname.valid && email.valid && phone.valid == false) {
        return;
      }
      saveFormToLocalStorage();
      redirectToRoute("./exp.html");
    });
}

const redirectToPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
    localStorage.clear();
  };
};

redirectToPage(`.btn-back`, `./index.html`);

const redirectToRoute = function (route) {
  location.href = route;
};

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
