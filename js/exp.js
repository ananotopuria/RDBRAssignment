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

function validateDateStart(input) {
  console.log(input.value);
  let date = new Date();
}

function validateDateEnd(input) {
  console.log(input.value);
}

document.getElementById(`next-section`).addEventListener(`click`, function () {
  console.log("Redirect to next section");
  saveFormToLocalStorage();
  location.href = `exp.html`;
});

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

function saveFormToLocalStorage() {
  // Save all form items to local storage
  const data = {
    position: document.getElementById(`position`).value,
    company: document.getElementById(`company`).value,
    descr: document.getElementById(`descr`).value,
    dateStart: document.getElementById(`start-date`).value,
    dateEnd: document.getElementById(`end-date`).value,
  };
  // localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(`exp`, JSON.stringify(data));
}
// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  fillInputValues();
});

const fillInputValues = function () {
  const position = document.getElementById(`position`);
  const company = document.getElementById(`company`);
  const descr = document.getElementById(`descr`);
  const startDate = document.getElementById(`start-date`);
  const endDate = document.getElementById(`end-date`);
  const infoFromLocalStroage = JSON.parse(localStorage.getItem(`exp`));
  if (!infoFromLocalStroage) {
    return;
  }
  if (infoFromLocalStroage.position) {
    position.value = infoFromLocalStroage.position;
  }
  if (infoFromLocalStroage.company) {
    company.value = infoFromLocalStroage.company;
  }
  if (infoFromLocalStroage.descr) {
    descr.value = infoFromLocalStroage.descr;
  }
  if (infoFromLocalStroage.dateStart) {
    startDate.value = infoFromLocalStroage.dateStart;
  }
  if (infoFromLocalStroage.dateEnd) {
    endDate.value = infoFromLocalStroage.dateEnd;
  }
};

document.getElementById(`next-section`).addEventListener(`click`, function () {
  console.log("Redirect to next section");
  saveFormToLocalStorage();
  location.href = `edu.html`;
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

redirectToNextPage(`.submit-form`, `./edu.html`);

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./info.html`);
