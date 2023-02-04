"use strict";

// const name = document.getElementById(`name`);
// const surname = document.getElementById(`surname`);
// const file = document.getElementById(`file`);
// const aboutMe = document.getElementById(`about-me`);
// const number = document.getElementById(`number`);
// const email = document.getElementById(`email`);
// const form = document.getElementById(`form`);

// form.addEventListener(`submit`, (e = {
//     e.preventDefault
// }));

const nameError = document.getElementById(`name-error`);
const surnameError = document.getElementById(`surname-error`);
const fileError = document.getElementById(`file-error`);
const emailError = document.getElementById(`email-error`);
const numberError = document.getElementById(`number-error`);

function validateName() {
  const name = document.getElementById(`name`).value;
  if (name.length == 0) {
    nameError.innerHTML = `Name is required`;
    return false;
  }
  if (name.length < 2) {
    nameError.innerHTML = `Name is required`;
    return false;
  }

  nameError.innerHTML = `<ion-icon class="icon" name="checkmark-circle"></ion-icon>`;
  return true;
}
