"use strict";
import {
  displayData,
  getIndexFromElementId,
  getValuesFromInput,
  createLabel,
  createInput,
  createP,
  createSpan,
  DisplayExperienceData,
  CreateExperienceSectionHtml,
  FillValues,
  DisplayValues,
} from "./helper.js";

export function initValidation() {
  document.getElementById(`position`).addEventListener("keyup", (event) => {
    validatePosition(event.srcElement, true);
  });
  document.getElementById(`company`).addEventListener("keyup", (event) => {
    validateCompany(event.srcElement, true);
  });
  document.getElementById(`descr`).addEventListener("keyup", (event) => {
    validateDescr(event.srcElement, true);
  });
  document.getElementById(`start-date`).addEventListener("change", (event) => {
    validateDateStart(event.srcElement, true);
  });
  document.getElementById(`end-date`).addEventListener("change", (event) => {
    validateDateEnd(event.srcElement, true);
  });
}

function validatePosition(positionElement, isFirst) {
  const positionError = positionElement.nextElementSibling;
  const position = positionElement.value;
  if (isFirst) {
    displayData(`a-position`, position);
  } else {
    let index = getIndexFromElementId(positionElement);
    displayData(`a-position_` + index, position);
  }
  if (position.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(position)) {
    positionElement.setAttribute("class", "invalid-input");
    positionError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  positionElement.setAttribute("class", "valid-input");
  positionError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateCompany(companyElement, isFirst) {
  const companyError = companyElement.nextElementSibling;
  const company = companyElement.value;
  if (isFirst) {
    displayData(`a-company`, company);
  } else {
    let index = getIndexFromElementId(companyElement);
    displayData(`a-company_` + index, company);
  }
  if (company.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(company)) {
    companyElement.setAttribute("class", "invalid-input");
    companyError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  companyElement.setAttribute("class", "valid-input");
  companyError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateDateStart(input, isFirst) {
  if (isFirst) {
    displayData("a-st", input.value);
    return;
  }
  let index = getIndexFromElementId(input);
  //Validate - Todo
  var elem = document.getElementById("a-st_" + index);
  if (elem) {
    displayData("a-st_" + index, input.value);
  }
}

function validateDateEnd(input, isFirst) {
  if (isFirst) {
    displayData("a-en", input.value);
    return;
  }
  let index = getIndexFromElementId(input);
  //Validate - Todo
  var elem = document.getElementById("a-en_" + index);
  if (elem) {
    displayData("a-en_" + index, input.value);
  }
}

function validateDescr(descriptionEelement, isFirst) {
  const descrError = descriptionEelement.nextElementSibling;

  if (isFirst) {
    displayData(`exp-p--a`, descriptionEelement.value);
  } else {
    let index = getIndexFromElementId(descriptionEelement);
    displayData(`exp-p--a_` + index, descriptionEelement.value);
  }
  if (
    descriptionEelement.length < 2 ||
    !/^[ა-ჰa-zA-Z\s]+$/.test(descriptionEelement.value)
  ) {
    descrError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  descrError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function saveFormToLocalStorage() {
  // Save all form items to local storage
  const data = {
    position: [],
    company: [],
    descr: [],
    dateStart: [],
    dateEnd: [],
  };

  // position
  const position = document.querySelectorAll('input[name="position"]');
  data.position = getValuesFromInput(position);

  // company
  const company = document.querySelectorAll('input[name="company"]');
  data.company = getValuesFromInput(company);

  const dateStart = document.querySelectorAll('input[name="st"]');
  const dateEnd = document.querySelectorAll('input[name="en"]');
  data.dateStart = getValuesFromInput(dateStart);
  data.dateEnd = getValuesFromInput(dateEnd);

  const description = document.querySelectorAll('textarea[name="descr"]');
  data.descr = getValuesFromInput(description);

  localStorage.setItem(`exp`, JSON.stringify(data));
}

// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  // calculate how many items in local strage
  let experienceData = JSON.parse(localStorage.getItem(`exp`));
  if (!experienceData) {
    return;
  }
  let countEntries = experienceData.position.length;
  if (countEntries < 1) {
    return;
  }
  for (let index = 0; index < countEntries - 1; index++) {
    document.getElementById("addMoreExperience").click();
  }

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
    // Display data
    if (infoFromLocalStroage.position.length > 0) {
      FillValues(infoFromLocalStroage.position, "position", position);
      DisplayValues(infoFromLocalStroage.position, "a-position");
    }
    // Fill input values
  }
  if (infoFromLocalStroage.company) {
    if (infoFromLocalStroage.company.length > 0) {
      FillValues(infoFromLocalStroage.company, "company", company);
      DisplayValues(infoFromLocalStroage.company, "a-company");
    }
  }
  if (infoFromLocalStroage.descr) {
    if (infoFromLocalStroage.descr.length > 0) {
      FillValues(infoFromLocalStroage.descr, "descr", descr);
      DisplayValues(infoFromLocalStroage.descr, "exp-p--a");
    }
  }
  if (infoFromLocalStroage.dateStart) {
    if (infoFromLocalStroage.dateStart.length > 0) {
      FillValues(infoFromLocalStroage.dateStart, "start-date", startDate);
      DisplayValues(infoFromLocalStroage.dateStart, "a-st");
    }
  }
  if (infoFromLocalStroage.dateEnd) {
    if (infoFromLocalStroage.dateEnd.length > 0) {
      FillValues(infoFromLocalStroage.dateEnd, "end-date", endDate);
      DisplayValues(infoFromLocalStroage.dateEnd, "a-en");
    }
  }
};

function ValidateExperienceForm() {
  const positions = document.querySelectorAll('input[name="position"]');
  const isPositionsValid = ValidateInputArray(positions, true);
  const companies = document.querySelectorAll('input[name="company"]');
  const isCompaniesValid = ValidateInputArray(companies, true);
  const startDates = document.querySelectorAll('input[name="st"]');
  const isStartDatesValid = ValidateInputArray(startDates);
  const endDates = document.querySelectorAll('input[name="en"]');
  const isEndatesValid = ValidateInputArray(endDates);
  const descr = document.querySelectorAll('textarea[name="descr"]');
  const isDescrValid = ValidateInputArray(descr, true);

  if (
    isPositionsValid &&
    isCompaniesValid &&
    isStartDatesValid &&
    isEndatesValid &&
    isDescrValid
  ) {
    return true;
  }
  return false;
}

function ValidateInputArray(array, checkLength) {
  let isValid = true;
  array.forEach(function (input) {
    if (input.value === "" || (checkLength && input.value.length < 2)) {
      isValid = false;
    }
  });
  return isValid;
}

document
  .getElementById(`next-section-education`)
  .addEventListener(`click`, function () {
    console.log("Redirect to next section");
    saveFormToLocalStorage();
    const isFormValid = ValidateExperienceForm();
    if (isFormValid) {
      location.href = `edu.html`;
    }
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

// redirectToNextPage(`.submit-form`, `./edu.html`);

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./info.html`);
var counter = 1;
document.getElementById("addMoreExperience").addEventListener("click", () => {
  let hr = document.createElement("hr");
  let form = document.getElementById("experience-form");
  let positionDiv = document.createElement("div");
  form.appendChild(hr);
  // Position -----------------
  positionDiv.setAttribute("class", "position posit");
  let positionLabel = document.createElement("label");
  positionLabel.setAttribute("for", "position");
  positionLabel.innerHTML = "თანამდებობა";
  let positionInput = createInput(
    "position_" + counter,
    "position",
    "text",
    "დეველოპერი, დიზაინერი, ა.შ.",
    validatePosition,
    true
  );
  positionInput.onkeyup = function () {
    return validatePosition(positionInput);
  };
  let errorSpan = createSpan("position-error_" + counter);
  positionDiv.appendChild(positionLabel);
  positionDiv.appendChild(positionInput);
  positionDiv.appendChild(errorSpan);

  // Position end -----------------
  // Company-----------------
  let companyDiv = document.createElement("div");
  companyDiv.setAttribute("class", "company posit");
  let companyLabel = document.createElement("label");
  companyLabel.setAttribute("for", "company");
  companyLabel.innerHTML = "დამსაქმებელი";
  let companyInput = createInput(
    "company_" + counter,
    "company",
    "text",
    "დამსაქმებელი",
    validateCompany,
    true
  );
  companyInput.onkeyup = function () {
    return validateCompany(companyInput);
  };
  errorSpan = createSpan("position-error_" + counter);
  companyDiv.appendChild(companyLabel);
  companyDiv.appendChild(companyInput);
  companyDiv.appendChild(errorSpan);

  // Company end -----------------
  //Date
  let experienceDiv = document.createElement("div");
  experienceDiv.setAttribute("class", "exp-date");
  let experienceStart = document.createElement("div");
  experienceStart.setAttribute("class", "st-date");
  let startLabel = createLabel("start-date", "posit", "დაწყების რიცხვი");
  let startDateInputElement = createInput(
    "start-date_" + counter,
    "st",
    "date",
    "",
    validateDateStart
  );
  startDateInputElement.onchange = function () {
    return validateDateStart(startDateInputElement);
  };
  var startDateError = createSpan("st-error");
  experienceStart.appendChild(startLabel);
  experienceStart.appendChild(startDateInputElement);
  experienceStart.appendChild(startDateError);
  experienceDiv.appendChild(experienceStart);
  let experienceEnd = document.createElement("div");
  experienceEnd.setAttribute("class", "en-date");
  let endLabel = createLabel("end-date", "posit", "დამთავრების რიცხვი");
  let endDateInputElement = createInput(
    "end-date_" + counter,
    "en",
    "date",
    "",
    validateDateEnd
  );
  endDateInputElement.onchange = function () {
    return validateDateEnd(endDateInputElement);
  };
  var endDateError = createSpan("en-error");
  experienceEnd.appendChild(endLabel);
  experienceEnd.appendChild(endDateInputElement);
  experienceEnd.appendChild(endDateError);
  experienceDiv.appendChild(experienceEnd);

  //descr
  let descrDiv = document.createElement("div");
  descrDiv.setAttribute("class", "exp-descr posit");
  let descrLabel = document.createElement("label");
  descrLabel.setAttribute("for", "descr");
  descrLabel.innerHTML = "აღწერა";
  let descrInput = document.createElement("textarea");
  descrInput.setAttribute("id", "descr_" + counter);
  descrInput.setAttribute("name", "descr");
  descrInput.setAttribute("rows", "4");
  descrInput.setAttribute("cols", "107");
  descrInput.setAttribute("placeholder", "როლი თანამდებობაზე და ზოგადი აღწერა");
  descrInput.onkeyup = function () {
    return validateDescr(descrInput);
  };
  var descError = createSpan("desc-error");
  descrDiv.appendChild(descrLabel);
  descrDiv.appendChild(descrInput);
  descrDiv.appendChild(descError);

  CreateExperienceSectionHtml(counter);

  form.appendChild(positionDiv);
  form.appendChild(companyDiv);
  form.appendChild(experienceDiv);
  form.appendChild(descrDiv);
  counter++;
});
