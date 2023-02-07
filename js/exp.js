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

// function displayDataFromLocalStorage() {
//   let data = {};
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     let value = localStorage.getItem(key);
//     data[key] = value;
//   }
//   if (Object.keys(data).length > 0) {
//     let html = "";
//     for (var key in data) {
//       html += "<p>" + data[key] + "</p>";
//     }
//     document.getElementById("displayArea").innerHTML = html;
//   } else {
//     console.log("No data found in local storage");
//   }
// }
// displayDataFromLocalStorage();

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

// const getAllValuesFromLocalStorage = function () {
//   let values = {};
//   for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i);
//     values[key] = localStorage.getItem(key);
//     console.log(values);
//   }
//   return values;
// };

// console.log(getAllValuesFromLocalStorage());

// const values = getAllValuesFromLocalStorage();
// for (let key in values) {
//   console.log(key + ": " + values[key]);
// }

// const specificValue = values["key"];
// console.log(specificValue);
