"use strict";

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

function validatePhone(phone) {
  const phoneError = document.getElementById(`phone-error`);
  // const number = parseFloat(phone);
  console.log(`Phone: ${phone}`);
  const phoneRegex = /^\+995\d{9}$/;
  console.log(`Phone Regex: ${phoneRegex}`);
  if (!phoneRegex.test(phone)) {
    console.log(`Phone does not match pattern`);
    phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  console.log(`Phone matches pattern`);
  phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

const dlkflsdfk = validatePhone(`+995123456789`);
console.log(dlkflsdfk);
