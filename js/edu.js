"use strict";

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

function validateSchool() {
  const school = document.getElementById(`school`).value;
  const schoolError = document.getElementById(`school-error`);
  displayData(`a-school`, school);
  // document.getElementById(`a-name`).innerHTML = name;
  if (school.length < 2 || !/^[ა-ჰa-zA-Z\s]+$/.test(school)) {
    schoolError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
  schoolError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
  return true;
}

function validateDateEnd(input) {
  console.log(input.value);
  let date = new Date();
}

function validateDescr() {
  const descrError = document.getElementById(`descr-error`);
  const descr = document.getElementById(`descr`).value;
  displayData(`a-descr`, descr);
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
    dateEnd: document.getElementById(`end-date`).value,
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
  const descr = document.getElementById(`descr`);
  const endDate = document.getElementById(`end-date`);
  let educationFromLocalStroage = JSON.parse(localStorage.getItem(`edu`));
  if (!educationFromLocalStroage) {
    return;
  }
  if (educationFromLocalStroage.school) {
    school.value = educationFromLocalStroage.school;
  }
  if (educationFromLocalStroage.descr) {
    descr.value = educationFromLocalStroage.descr;
  }
  // if (educationFromLocalStroage.descr) {
  //   descr.value = educationFromLocalStroage.descr;
  // }
  if (educationFromLocalStroage.dateEnd) {
    endDate.value = educationFromLocalStroage.dateEnd;
  }
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

redirectToPage(`.btn-back`, `./index.html`);

const redirectToPrevPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

redirectToPrevPage(`.prev`, `./exp.html`);

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

function validateDateEnd(input) {
  console.log(input.value);
}

document.getElementById("addMoreEducation").addEventListener("click", () => {
  // console.log("add more");
  let hr = document.createElement("hr");
  let form = document.getElementById("education-form");
  let schoolDiv = document.createElement("div");
  form.appendChild(hr);
  schoolDiv.setAttribute("class", "school posit");
  let schoolLabel = document.createElement("label");
  schoolLabel.setAttribute("for", "school");
  schoolLabel.innerHTML = "სასწავლებელი";
  let schoolInput = document.createElement("input");
  schoolInput.setAttribute("id", "school");
  schoolInput.setAttribute("name", "school[]");
  schoolInput.setAttribute("type", "text");
  schoolInput.setAttribute("placeholder", "სასწავლებელი");
  schoolInput.onkeyup = validateSchool(schoolInput);

  schoolDiv.appendChild(schoolLabel);
  schoolDiv.appendChild(schoolInput);
  form.appendChild(schoolDiv);

  //degree

  let degreeDiv = document.createElement("div");
  degreeDiv.setAttribute("class", "school-dit posit");
  let degreeLabel = document.createElement("label");
  degreeLabel.setAttribute("for", "degree");
  degreeLabel.innerHTML = "ხარისხი";
  let degreeInput = document.createElement("select");
  degreeInput.setAttribute("id", "degree");
  degreeInput.setAttribute("name", "degree[]");
  degreeInput.setAttribute("type", "date");
  // degreeInput.setAttribute("placeholder", "დამსაქმებელი");
  // degreeInput.onkeyup = validatePosition(degreeInput);

  degreeDiv.appendChild(degreeLabel);
  degreeDiv.appendChild(degreeInput);
  form.appendChild(degreeDiv);

  //end date

  let educationEnd = document.createElement("div");
  educationEnd.setAttribute("class", "end-date");
  let endLabel = createLabel("end-date", "posit", "დამთავრების რიცხვი");
  let endDateInputElement = createInput(
    "end-date",
    "en[]",
    "date",
    "",
    validateDateEnd
  );
  var endDateError = createSpan("end-error");
  educationEnd.appendChild(endLabel);
  educationEnd.appendChild(endDateInputElement);
  educationEnd.appendChild(endDateError);

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
