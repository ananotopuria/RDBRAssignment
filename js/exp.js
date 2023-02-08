"use strict";

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

function validatePosition() {
  const positionError = document.getElementById(`position-error`);
  const position = document.getElementById(`position`).value;
  displayData(`a-position`, position);
  if (position.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(position)) {
    positionError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  positionError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateCompany() {
  const companyError = document.getElementById(`company-error`);
  const company = document.getElementById(`company`).value;
  displayData(`a-company`, company);
  if (company.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(company)) {
    companyError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  companyError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

// function validateDateSt(input) {
//   // const stDateError = document.getElementById(`st-error`);
//   let dateValue = input.value;
//   if (dateValue) {
//     let date = new Date(dateValue);
//     console.log(date);
//     if (date.toString() !== "Invalid Date") {
//       // valid date
//       input.style.backgroundColor = "white";
//     } else {
//       // invalid date
//       input.style.backgroundColor = "red";
//     }
//   } else {
//     // no date entered
//     input.style.backgroundColor = "red";
//   }
// }
//   const input = document.querySelector("#st");

//   const formattedDate = date.toLocaleDateString("default", {
//     month: "2-digit",
//     day: "2-digit",
//     year: "numeric",
//   });
//   console.log("Date:", formattedDate);
//   // const st = document.getElementById(`st`).value;
//   displayData(`a-st`, st);
//   if (st === "" || st === "1970-01-01") {
//     stDateError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//     return false;
//   }
//   stDateError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//   return true;
// }

// function validateDateEn() {
//   const enDateError = document.getElementById(`en-error`);
//   const en = document.getElementById(`en`).value;
//   displayData(`a-en`, en);
// }

function validateDescr() {
  const descrError = document.getElementById(`descr-error`);
  const descr = document.getElementById(`descr`).value;
  //   document.getElementById(`a-name`).innerHTML = name;

  displayData(`exp-p--a`, descr);
  if (descr.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(descr)) {
    descrError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  descrError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
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

const redirectToNextPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToNextPage(`.submit-form`, `./edu.html`);

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./info.html`);
