"use strict";

import {
  displayData,
  getIndexFromElementId,
  getValuesFromInput,
  createLabel,
  createInput,
  createP,
  createSpan,
  DisplayValues,
  CreateExperienceSectionHtml,
  DisplayExperienceData,
  getDegreeTextFromKey,
  FillValues,
  DisplayEducationData,
  ValidateInputArray,
  CreateEducationSectioHtml,
} from "./helper.js";

export function initValidation() {
  document.getElementById(`school`).addEventListener("keyup", (event) => {
    validateSchool(event.srcElement, true);
  });

  document.getElementById(`degree`).addEventListener("change", (event) => {
    validateDegree(event.srcElement, true);
  });

  document.getElementById(`end-date`).addEventListener("change", (event) => {
    validateDateEnd(event.srcElement, true);
  });

  document.getElementById(`descr`).addEventListener("keyup", (event) => {
    validateDescr(event.srcElement, true);
  });
}

function validateDegree(degreeElement, isFirst) {
  // Make it appear
  const title = getDegreeTextFromKey(degreeElement.value);
  if (isFirst) {
    displayData(`a-status`, title);
  } else {
    let index = getIndexFromElementId(degreeElement);
    displayData(`a-status_` + index, title);
  }
}

function validateSchool(schoolElement, isFirst) {
  const school = schoolElement.value;
  const schoolError = schoolElement.nextElementSibling;
  if (isFirst) {
    displayData(`a-school`, school);
  } else {
    let index = getIndexFromElementId(schoolElement);
    displayData(`a-school_` + index, school);
  }
  if (school.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(school)) {
    schoolError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  schoolError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateDateEnd(dateElement, isFirst) {
  if (isFirst) {
    displayData("a-end", dateElement.value);
  } else {
    let index = getIndexFromElementId(dateElement);
    displayData("a-end_" + index, dateElement.value);
  }
}

function validateDescr(descriptionElement, isFirst) {
  const descrError = descriptionElement.nextElementSibling;
  const descr = descriptionElement.value;
  if (isFirst) {
    displayData(`a-descr`, descr);
  } else {
    let index = getIndexFromElementId(descriptionElement);
    displayData(`a-descr_` + index, descr);
  }
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
    school: [],
    dateEnd: [],
    degree: [],
    descr: [],
  };

  const school = document.querySelectorAll('input[name="school"]');
  data.school = getValuesFromInput(school);
  const dateEnd = document.querySelectorAll('input[name="end-date"]');
  data.dateEnd = getValuesFromInput(dateEnd);
  const degree = document.querySelectorAll('select[name="degree"]');
  data.degree = getValuesFromInput(degree);
  const descr = document.querySelectorAll('textarea[name="descr"]');
  data.descr = getValuesFromInput(descr);
  localStorage.setItem(`edu`, JSON.stringify(data));
}

function fillSelectValues(selectElement, data) {
  for (var i = 0; i < data.length; i++) {
    var option = document.createElement("option");
    option.value = data[i].id;
    option.text = data[i].title;
    option.title = data[i].title;
    selectElement.appendChild(option);
  }
}
// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);

  fetch("https://resume.redberryinternship.ge/api/degrees")
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("degree-list", JSON.stringify(data));
      let select = document.getElementById("degree");
      fillSelectValues(select, data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Display Experience Section
  let experienceData = JSON.parse(localStorage.getItem(`exp`));
  if (!experienceData) {
    return;
  }
  let countEntries = experienceData.position.length;
  // Generate HTml and fill values
  for (let index = 1; index < countEntries; index++) {
    CreateExperienceSectionHtml(index);
  }
  DisplayExperienceData(experienceData);

  // Display Education section
  let educationData = JSON.parse(localStorage.getItem(`edu`));
  if (!educationData) {
    return;
  }
  let educationEntries = educationData.degree.length;
  if (educationEntries < 1) {
    return;
  }
  for (let index = 0; index < countEntries - 1; index++) {
    document.getElementById("addMoreEducation").click();
  }
  fillInputValues();
});

const fillInputValues = function () {
  const school = document.getElementById(`school`);
  const degree = document.getElementById(`degree`);
  const descr = document.getElementById(`descr`);
  const endDate = document.getElementById(`end-date`);
  let educationFromLocalStroage = JSON.parse(localStorage.getItem(`edu`));
  if (!educationFromLocalStroage) {
    return;
  }
  if (
    educationFromLocalStroage.school &&
    educationFromLocalStroage.school.length > 0
  ) {
    FillValues(educationFromLocalStroage.school, "school", school);
  }
  if (
    educationFromLocalStroage.degree &&
    educationFromLocalStroage.degree.length > 0
  ) {
    FillValues(educationFromLocalStroage.degree, "degree", degree);
  }
  if (
    educationFromLocalStroage.descr &&
    educationFromLocalStroage.descr.length > 0
  ) {
    FillValues(educationFromLocalStroage.descr, "descr", descr);
  }
  if (
    educationFromLocalStroage.dateEnd &&
    educationFromLocalStroage.dateEnd.length > 0
  ) {
    FillValues(educationFromLocalStroage.dateEnd, "end-date", endDate);
  }

  DisplayEducationData(educationFromLocalStroage);
};

function ValidateEducationForm() {
  const schools = document.querySelectorAll('input[name="school"]');
  const isSchoolsValid = ValidateInputArray(schools, true);
  const degrees = document.querySelectorAll('select[name="degree"]');
  const isDegreesValid = ValidateInputArray(degrees);
  const endDates = document.querySelectorAll('input[name="end-date"]');
  const isEndatesValid = ValidateInputArray(endDates);
  const descr = document.querySelectorAll('textarea[name="descr"]');
  const isDescrValid = ValidateInputArray(descr, true);

  if (isSchoolsValid && isDegreesValid && isEndatesValid && isDescrValid) {
    return true;
  }
  return false;
}

document.getElementById(`next-section`).addEventListener(`click`, function () {
  console.log("Redirect to next section");
  saveFormToLocalStorage();
  if (ValidateEducationForm()) {
    console.log("Form is valid");
    location.href = `resume.html`;
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

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./exp.html`);
let counter = 1;
document.getElementById("addMoreEducation").addEventListener("click", () => {
  let hr = document.createElement("hr");
  let form = document.getElementById("education-form");
  let schoolDiv = document.createElement("div");
  form.appendChild(hr);
  schoolDiv.setAttribute("class", "school posit");
  let schoolLabel = document.createElement("label");
  // schoolLabel.setAttribute("for", "school");
  schoolLabel.innerHTML = "სასწავლებელი";
  let schoolInput = document.createElement("input");
  schoolInput.setAttribute("id", "school_" + counter);
  schoolInput.setAttribute("name", "school");
  schoolInput.setAttribute("type", "text");
  schoolInput.setAttribute("placeholder", "სასწავლებელი");
  schoolInput.onkeyup = function () {
    return validateSchool(schoolInput);
  };
  let schoolErrorLabel = createSpan("school-error");
  schoolDiv.appendChild(schoolLabel);
  schoolDiv.appendChild(schoolInput);
  schoolDiv.appendChild(schoolErrorLabel);
  form.appendChild(schoolDiv);

  //degree
  let degreeWrapper = document.createElement("div");
  degreeWrapper.setAttribute("class", "school-dit posit");
  let degreeDiv = document.createElement("div");
  degreeDiv.setAttribute("class", "degree");
  let degreeLabel = document.createElement("label");
  degreeLabel.setAttribute("for", "degree");
  degreeLabel.innerHTML = "ხარისხი";
  let degreeInput = document.createElement("select");
  degreeInput.setAttribute("id", "degree_" + counter);
  degreeInput.setAttribute("name", "degree");
  degreeInput.setAttribute("type", "date");
  const degreeListData = JSON.parse(localStorage.getItem("degree-list"));
  fillSelectValues(degreeInput, degreeListData);
  degreeInput.onchange = function () {
    validateDegree(degreeInput);
  };
  degreeDiv.appendChild(degreeLabel);
  degreeDiv.appendChild(degreeInput);
  degreeWrapper.appendChild(degreeDiv);

  //end date

  let educationEnd = document.createElement("div");
  educationEnd.setAttribute("class", "end-date");
  let endLabel = createLabel("", "end", "დამთავრების რიცხვი");
  let endDateInputElement = createInput(
    "end-date_" + counter,
    "end-date",
    "date",
    ""
  );
  endDateInputElement.onchange = function () {
    validateDateEnd(endDateInputElement);
  };
  var endDateError = createSpan("end-error");
  educationEnd.appendChild(endLabel);
  educationEnd.appendChild(endDateInputElement);
  educationEnd.appendChild(endDateError);
  degreeWrapper.appendChild(educationEnd);
  form.appendChild(degreeWrapper);
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
    validateDescr(descrInput);
  };
  let descrError = createSpan("descr-error");
  descrDiv.appendChild(descrLabel);
  descrDiv.appendChild(descrInput);
  descrDiv.appendChild(descrError);
  form.appendChild(descrDiv);

  CreateEducationSectioHtml(counter);

  counter++;
});
