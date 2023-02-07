("use strict");

const fileError = document.getElementById(`file-error`);

function validateName() {
  const name = document.getElementById(`name`).value;
  const nameError = document.getElementById(`name-error`);
  document.getElementById(`a-name`).innerHTML = name;
  if (name.length < 2 || !/^[ა-ჰ]+$/.test(name)) {
    nameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  nameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateSurname() {
  const surnameError = document.getElementById(`surname-error`);
  const surname = document.getElementById(`surname`).value;
  document.getElementById(`a-surname`).innerHTML = surname;
  if (surname.length < 2 || !/^[ა-ჰ]+$/.test(surname)) {
    surnameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  surnameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateEmail() {
  const emailError = document.getElementById(`email-error`);
  const email = document.getElementById(`email`).value;
  document.getElementById(`a-email`).innerHTML = email;
  const emailRegex = /^[a-zA-Z0-9._-]+@redberry.ge$/;
  const displayEmailIcon = document.getElementById(`a-email--icon`);
  if (!emailRegex.test(email)) {
    emailError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  displayEmailIcon.classList.remove(`hidden`);
  emailError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validatePhone() {
  const phoneRegex = /^\+995\d{9}$|^\+995\s\d{3}\s\d{3}\s\d{3}$/;
  const phoneError = document.getElementById(`phone-error`);
  const phone = document.getElementById(`phone-number`).value;
  document.getElementById(`a-phone`).innerHTML = phone;
  const displayPhoneIcon = document.getElementById(`a-phone--icon`);
  if (!phoneRegex.test(phone)) {
    phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  displayPhoneIcon.classList.remove(`hidden`);
  phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function textArea() {
  const aboutMeLabel = document.getElementById(`about-label`);
  const aboutMeTextArea = document.getElementById(`about-me`).value;
  document.getElementById(`about-me--a`).innerHTML = aboutMeTextArea;
  if (aboutMeTextArea === "") {
    aboutMeLabel.classList.add(`hidden`);
  } else {
    aboutMeLabel.classList.remove(`hidden`);
  }
}

const imgBox = document.getElementById(`imgBox`);

const loadFile = function (event) {
  const img = new Image();
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.width = `250px`;
  img.style.height = `auto`;
  img.style.borderRadius = `50%`;
  img.onload = function () {
    document.getElementById(`imgBox`).appendChild(img);
  };
};

const fillInputValues = function () {
  const name = document.getElementById(`name`);
  const surname = document.getElementById(`surname`);
  const email = document.getElementById(`email`);
  const phone = document.getElementById(`phone-number`);
  const about = document.getElementById(`about-me`);

  const infoFromLocalStroage = JSON.parse(localStorage.getItem(`info`));
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
    phone: document.getElementById(`phone-number`).value,
  };
  // localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(`info`, JSON.stringify(data));
}

// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  fillInputValues();
});

document.getElementById(`next-section`).addEventListener(`click`, function () {
  console.log("Redirect to next section");
  saveFormToLocalStorage();
  location.href = `exp.html`;
});

const redirectToPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
    localStorage.clear();
  };
};

redirectToPage(`.btn-back`, `./index.html`);

const redirectToNextPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToNextPage(`.submit-form`, `./exp.html`);
