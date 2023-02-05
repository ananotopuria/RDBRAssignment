"use strict";

function validatePosition() {
  const positionError = document.getElementById(`position-error`);
  const position = document.getElementById(`position`).value;
  //   document.getElementById(`a-name`).innerHTML = name;
  if (position.length < 2 || !/^[ა-ჰ]+$/.test(position)) {
    positionError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  positionError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateCompany() {
  const companyError = document.getElementById(`company-error`);
  const company = document.getElementById(`company`).value;
  //   document.getElementById(`a-name`).innerHTML = name;
  if (company.length < 2 || !/^[ა-ჰ]+$/.test(company)) {
    companyError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  companyError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
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
