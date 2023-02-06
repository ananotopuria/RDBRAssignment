"use strict";

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
