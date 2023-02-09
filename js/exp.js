"use strict";

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

function validatePosition(positionElement) {
  const positionError = document.getElementById(`position-error`);
  // const position = document.getElementById(`position`).value;
  const position = positionElement.value;
  displayData(`a-position`, position);
  if (position.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(position)) {
    positionError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  positionError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateCompany(companyElement) {
  const companyError = document.getElementById(`company-error`);
  // const company = document.getElementById(`company`).value;
  const company = companyElement.value;
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
// var counter = 0;
document.getElementById("addMoreExperience").addEventListener("click", () => {
  // counter++;
  // `a-position``position_1`;
  console.log("add more rows");
  let hr = document.createElement("hr");
  let form = document.getElementById("experience-form");
  let positionDiv = document.createElement("div");
  form.appendChild(hr);
  // Position
  positionDiv.setAttribute("class", "position posit");
  let positionLabel = document.createElement("label");
  positionLabel.setAttribute("for", "position");
  positionLabel.innerHTML = "თანამდებობა";
  let positionInput = document.createElement("input");
  positionInput.setAttribute("id", "position");
  positionInput.setAttribute("name", "position[]");
  positionInput.setAttribute("type", "text");
  positionInput.setAttribute("placeholder", "დეველოპერი, დიზაინერი, ა.შ.");
  positionInput.onkeyup = validatePosition(positionInput);

  positionDiv.appendChild(positionLabel);
  positionDiv.appendChild(positionInput);
  form.appendChild(positionDiv);

  //Company
  let companyDiv = document.createElement("div");
  companyDiv.setAttribute("class", "company posit");
  let companyLabel = document.createElement("label");
  companyLabel.setAttribute("for", "company");
  companyLabel.innerHTML = "დამსაქმებელი";
  let companyInput = document.createElement("input");
  companyInput.setAttribute("id", "company");
  companyInput.setAttribute("name", "company[]");
  companyInput.setAttribute("type", "text");
  companyInput.setAttribute("placeholder", "დამსაქმებელი");
  companyInput.onkeyup = validatePosition(companyInput);

  companyDiv.appendChild(companyLabel);
  companyDiv.appendChild(companyInput);
  form.appendChild(companyDiv);

  //Date
  let experienceDiv = document.createElement("div");
  experienceDiv.setAttribute("class", "exp-date");
  let experienceStart = document.createElement("div");
  experienceStart.setAttribute("class", "st-date");
  let startLabel = createLabel("start-date", "posit", "დაწყების რიცხვი");
  let startDateInputElement = createInput(
    "start-date",
    "st[]",
    "date",
    "",
    validateDateStart
  );
  var startDateError = createSpan("st-error");

  experienceStart.appendChild(startLabel);
  experienceStart.appendChild(startDateInputElement);
  experienceStart.appendChild(startDateError);
  experienceDiv.appendChild(experienceStart);
  let experienceEnd = document.createElement("div");
  experienceEnd.setAttribute("class", "en-date");
  let endLabel = createLabel("end-date", "posit", "დამთავრების რიცხვი");
  let endDateInputElement = createInput(
    "end-date",
    "en[]",
    "date",
    "",
    validateDateEnd
  );
  var endDateError = createSpan("st-error");
  experienceEnd.appendChild(endLabel);
  experienceEnd.appendChild(endDateInputElement);
  experienceEnd.appendChild(endDateError);
  experienceDiv.appendChild(experienceEnd);

  form.appendChild(experienceDiv);

  //descr

  let descrDiv = document.createElement("div");
  descrDiv.setAttribute("class", "exp-descr posit");
  let descrLabel = document.createElement("label");
  descrLabel.setAttribute("for", "descr");
  descrLabel.innerHTML = "აღწერა";
  let descrInput = document.createElement("textarea");
  descrInput.setAttribute("id", "descr");
  descrInput.setAttribute("name", "descr[]");
  descrInput.setAttribute("rows", "4");
  descrInput.setAttribute("cols", "107");
  descrInput.setAttribute("placeholder", "როლი თანამდებობაზე და ზოგადი აღწერა");
  descrInput.onkeyup = validateDescr(descrInput);

  descrDiv.appendChild(descrLabel);
  descrDiv.appendChild(descrInput);
  form.appendChild(descrDiv);
});

function createLabel(classAttribute, forAttribute, value) {
  let label = document.createElement("label");
  label.setAttribute("class", classAttribute);
  label.setAttribute("for", forAttribute);
  label.innerHTML = value;
  return label;
}

function createInput(id, name, type, placeholder, onChangeFunc) {
  let dateStartInput = document.createElement("input");
  dateStartInput.setAttribute("id", id);
  dateStartInput.setAttribute("name", name);
  dateStartInput.setAttribute("type", type);
  dateStartInput.setAttribute("placeholder", placeholder);
  dateStartInput.onchange = onChangeFunc(dateStartInput);
  return dateStartInput;
}

function createSpan(id) {
  let span = document.createElement("span");
  span.setAttribute("id", "st-error");
  return span;
}
