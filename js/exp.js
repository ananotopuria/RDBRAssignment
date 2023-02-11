"use strict";

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

function getIndexFromElementId(element) {
  let index = element.id.split("_")[1];
  return index;
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
    positionError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
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
    companyError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
    return false;
  }
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
    !/^[ა-ჰa-zA-Z\s]+$/.test(descriptionEelement)
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
    company: document.getElementById(`company`).value,
    descr: document.getElementById(`descr`).value,
    dateStart: document.getElementById(`start-date`).value,
    dateEnd: document.getElementById(`end-date`).value,
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
  console.log(description);
  data.descr = getValuesFromInput(description);

  localStorage.setItem(`exp`, JSON.stringify(data));
}

function getValuesFromInput(element) {
  let values = [];
  element.forEach(function (input) {
    values.push(input.value);
  });
  return values;
}

// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  // fillInputValues();
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
  console.log("We have", countEntries);
  // create
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
      DisplayAndFillValues(
        infoFromLocalStroage.position,
        "position",
        "a-position",
        position
      );
    }
    // Fill input values
  }
  if (infoFromLocalStroage.company) {
    if (infoFromLocalStroage.company.length > 0) {
      DisplayAndFillValues(
        infoFromLocalStroage.company,
        "company",
        "a-company",
        company
      );
    }
  }
  if (infoFromLocalStroage.descr) {
    if (infoFromLocalStroage.descr.length > 0) {
      DisplayAndFillValues(
        infoFromLocalStroage.descr,
        "descr",
        "exp-p--a",
        descr
      );
    }
  }
  if (infoFromLocalStroage.dateStart) {
    if (infoFromLocalStroage.dateStart.length > 0) {
      DisplayAndFillValues(
        infoFromLocalStroage.dateStart,
        "start-date",
        "a-st",
        startDate
      );
    }
  }
  if (infoFromLocalStroage.dateEnd) {
    if (infoFromLocalStroage.dateEnd.length > 0) {
      DisplayAndFillValues(
        infoFromLocalStroage.dateEnd,
        "end-date",
        "a-en",
        endDate
      );
    }
  }
};

function DisplayAndFillValues(
  array,
  inputSelector,
  displaySelector,
  firstElement
) {
  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      firstElement.value = array[index];
      displayData(displaySelector, array[index]);
    } else {
      var elem = document.getElementById(inputSelector + "_" + index);
      elem.value = array[index];
      displayData(displaySelector + "_" + index, array[index]);
    }
  }
}

document
  .getElementById(`next-section-education`)
  .addEventListener(`click`, function () {
    console.log("Redirect to next section");
    saveFormToLocalStorage();
    // location.href = `edu.html`;
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

  // Display Section ----------------
  let experienceSection = document.getElementById("section-exp-id");
  let displayHr = document.createElement("hr");
  experienceSection.appendChild(displayHr);
  var displayPositionDiv = document.createElement("div");
  displayPositionDiv.setAttribute("class", "a-positions");
  let displayPosition = createP("a-position_" + counter, "a-position");
  let displayCompany = createP("a-company_" + counter, "a-company");
  displayPositionDiv.appendChild(displayPosition);
  displayPositionDiv.appendChild(displayCompany);
  experienceSection.appendChild(displayPositionDiv);

  let experienceDates = document.createElement("div");
  experienceDates.setAttribute("id", "dates");
  experienceDates.setAttribute("class", "exp-dates-aa");
  let startDate = createP("a-st_" + counter, "start-date-p");
  let endDate = createP("a-en_" + counter, "end-date-p");
  experienceDates.appendChild(startDate);
  experienceDates.appendChild(endDate);
  experienceSection.appendChild(experienceDates);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "exp-p--a");
  descriptionDiv.setAttribute("id", "exp-p--a_" + counter);

  experienceSection.appendChild(descriptionDiv);

  form.appendChild(positionDiv);
  form.appendChild(companyDiv);
  form.appendChild(experienceDiv);
  form.appendChild(descrDiv);
  counter++;
});

function createLabel(classAttribute, forAttribute, value) {
  let label = document.createElement("label");
  label.setAttribute("class", classAttribute);
  label.setAttribute("for", forAttribute);
  label.innerHTML = value;
  return label;
}

function createInput(
  id,
  name,
  type,
  placeholder,
  onChangeOrKeyUpFunc,
  onKeyUp
) {
  let input = document.createElement("input");
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  if (onKeyUp) {
    return input;
  }
  input.onchange = onChangeOrKeyUpFunc(input);
  return input;
}

function createP(id, className) {
  let p = document.createElement("p");
  p.setAttribute("id", id);
  p.setAttribute("class", className);
  return p;
}

function createSpan(id) {
  let span = document.createElement("span");
  span.setAttribute("id", id);
  return span;
}
