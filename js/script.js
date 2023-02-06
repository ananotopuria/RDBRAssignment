"use strict";

// localStorage.setItem(`keyName`, inpute.value);

// const name = document.getElementById(`name`);
// const surname = document.getElementById(`surname`);
// const file = document.getElementById(`file`);
// const aboutMe = document.getElementById(`about-me`);
// const form = document.getElementById(`form`);

// form.addEventListener(`submit`, (e = {
//     e.preventDefault
// }));

const fileError = document.getElementById(`file-error`);

function validateName() {
  const nameError = document.getElementById(`name-error`);
  const name = document.getElementById(`name`).value;
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
  if (!emailRegex.test(email)) {
    emailError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  emailError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

// function validatePhone() {
//   const phoneError = document.getElementById(`phone-error`);
//   const phone = document.getElementById(`number`).value;
//   const phoneRegex = /^\\+995\\d{9}$/;
//   if (!phoneRegex.test(phone)) {
//     phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//     return false;
//   }

//   phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//   return true;
// }

const phone = document.getElementById(`phone-number`).value;

function validatePhone() {
  const phoneError = document.getElementById(`phone-error`);
  // const number = parseFloat(phone);
  document.getElementById(`a-phone`).innerHTML = phone;
  // console.log(`Phone: ${phone}`);
  const phoneRegex = /^\+995\d{9}$/;
  // console.log(`Phone Regex: ${phoneRegex}`);
  if (!phoneRegex.test(phone)) {
    // console.log(`Phone does not match pattern`);
    phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  // console.log(`Phone matches pattern`);
  phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

// ?????????

// const aboutMeTextArea = document.getElementById("about-me");

// aboutMeTextArea.addEventListener("keyup", function () {
//   const aboutMePreview = document.getElementById("about-me--a");
//   const aboutMeLabel = document.getElementById("about-label");
//   aboutMePreview.innerHTML = aboutMeTextArea.value;
//   // aboutMeTextArea.innerHTML = aboutMeTextArea;

//   if (aboutMeTextArea.value !== "") {
//     aboutMeLabel.classList.remove("hidden");
//   } else {
//     aboutMeLabel.classList.add("hidden");
//   }
// });

const imgBox = document.getElementById(`imgBox`);

// const loadFile = function (event) {
//   imgBox.style.backgroundImage = `url(${URL.createObjectURL(
//     event.target.files[0]
//   )})`;
// };

const loadFile = function (event) {
  const img = new Image();
  img.src = URL.createObjectURL(event.target.files[0]);
  img.style.width = "300px";
  img.style.height = "auto";
  img.onload = function () {
    document.getElementById("imgBox").appendChild(img);
  };
};
