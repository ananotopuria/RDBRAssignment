"use strict";

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

function validateSchool() {
  const schoolError = document.getElementById(`school-error`);
  const school = document.getElementById(`school`).value;
  displayData(`a-school`, school);
  // document.getElementById(`a-name`).innerHTML = name;
  if (school.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(school)) {
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
    school: document.getElementById(`school`).value,
    // degree: document.getElementById(`degree`).value,
    // dateEnd: document.getElementById(`end-date`).value,
    descr: document.getElementById(`descr`).value,
  };
  // localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(`edu`, JSON.stringify(data));
}
// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  fillInputValues();
});

const fillInputValues = function () {
  const school = document.getElementById(`school`);
  // const descr = document.getElementById(`descr`);
  // const endDate = document.getElementById(`end-date`);
  let educationFromLocalStroage = JSON.parse(localStorage.getItem(`edu`));
  if (!educationFromLocalStroage) {
    return;
  }
  if (educationFromLocalStroage.school) {
    school.value = educationFromLocalStroage.school;
  }
  // if (educationFromLocalStroage.descr) {
  //   descr.value = educationFromLocalStroage.descr;
  // }
  // if (educationFromLocalStroage.dateEnd) {
  //   endDate.value = educationFromLocalStroage.dateEnd;
  // }
};

document.getElementById(`next-section`).addEventListener(`click`, function () {
  console.log("Redirect to next section");
  saveFormToLocalStorage();
  location.href = `resume.html`;
});

const redirectToPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
    localStorage.clear();
  };
};

redirectToPage(`.prev`, `./index.html`);

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./exp.html`);
