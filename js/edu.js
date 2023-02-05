"use strict";

function validateSchool() {
  const schoolError = document.getElementById(`school-error`);
  const school = document.getElementById(`school`).value;
  //   document.getElementById(`a-name`).innerHTML = name;
  if (school.length < 2 || !/^[ა-ჰ]+$/.test(school)) {
    schoolError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  schoolError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateDescr() {
  const descrError = document.getElementById(`descr-error`);
  const descr = document.getElementById(`descr`).value;
  //   document.getElementById(`a-name`).innerHTML = name;
  if (descr.length < 2 || !/^[ა-ჰ]+$/.test(descr)) {
    descrError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  descrError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}
