export function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

export function getIndexFromElementId(element) {
  let index = element.id.split("_")[1];
  return index;
}

export function getValuesFromInput(element) {
  let values = [];
  element.forEach(function (input) {
    values.push(input.value);
  });
  return values;
}

export function createLabel(classAttribute, forAttribute, value) {
  let label = document.createElement("label");
  label.setAttribute("class", classAttribute);
  label.setAttribute("for", forAttribute);
  label.innerHTML = value;
  return label;
}

export function createInput(id, name, type, placeholder) {
  let input = document.createElement("input");
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  input.setAttribute("type", type);
  input.setAttribute("placeholder", placeholder);
  return input;
}

export function createP(id, className) {
  let p = document.createElement("p");
  p.setAttribute("id", id);
  p.setAttribute("class", className);
  return p;
}

export function createSpan(id) {
  let span = document.createElement("span");
  span.setAttribute("id", id);
  return span;
}

export function FillValues(array, inputSelector, firstElement) {
  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      firstElement.value = array[index];
    } else {
      var elem = document.getElementById(inputSelector + "_" + index);
      elem.value = array[index];
    }
  }
}

export function DisplayValues(array, displaySelector, needsTitle) {
  for (let index = 0; index < array.length; index++) {
    let value = array[index];
    if (needsTitle) {
      value = getDegreeTextFromKey(array[index]);
    }
    if (index == 0) {
      displayData(displaySelector, value);
    } else {
      displayData(displaySelector + "_" + index, value);
    }
  }
}

export function CreateEducationSectioHtml(counter) {
  let educationDisplayDiv = document.createElement("div");
  educationDisplayDiv.setAttribute("class", "ed");
  let schoolDisplay = createP("a-school_" + counter, "a-school");
  let statusDisplay = createP("a-status_" + counter, "a-status");
  educationDisplayDiv.appendChild(schoolDisplay);
  educationDisplayDiv.appendChild(statusDisplay);
  let endDateDisplay = createP("a-end_" + counter, "edu-dates");
  let descrDisplay = createP("a-descr_" + counter, "edu-p");

  let eduSection = document.getElementById("section-edu-id");
  let hr = document.createElement("hr");
  eduSection.appendChild(hr);
  eduSection.appendChild(educationDisplayDiv);
  eduSection.appendChild(endDateDisplay);
  eduSection.appendChild(descrDisplay);
}

export function CreateExperienceSectionHtml(counter) {
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
  experienceDates.setAttribute("class", "exp-dates-a");
  let startDate = createP("a-st_" + counter, "start-date-p");
  let endDate = createP("a-en_" + counter, "end-date-p");
  experienceDates.appendChild(startDate);
  experienceDates.appendChild(endDate);
  experienceSection.appendChild(experienceDates);

  let descriptionDiv = document.createElement("div");
  descriptionDiv.setAttribute("class", "exp-p--a");
  descriptionDiv.setAttribute("id", "exp-p--a_" + counter);

  experienceSection.appendChild(descriptionDiv);
}

export function DisplayEducationData(educationFromLocalStroage) {
  if (!educationFromLocalStroage) {
    return;
  }
  if (
    educationFromLocalStroage.school &&
    educationFromLocalStroage.school.length > 0
  ) {
    DisplayValues(educationFromLocalStroage.school, "a-school");
  }
  if (
    educationFromLocalStroage.degree &&
    educationFromLocalStroage.degree.length > 0
  ) {
    DisplayValues(educationFromLocalStroage.degree, "a-status", true);
  }
  if (
    educationFromLocalStroage.descr &&
    educationFromLocalStroage.descr.length > 0
  ) {
    DisplayValues(educationFromLocalStroage.descr, "a-descr");
  }
  if (
    educationFromLocalStroage.dateEnd &&
    educationFromLocalStroage.dateEnd.length > 0
  ) {
    DisplayValues(educationFromLocalStroage.dateEnd, "a-end");
  }
}

export function DisplayExperienceData(infoFromLocalStroage) {
  if (infoFromLocalStroage.position) {
    // Display data
    if (infoFromLocalStroage.position.length > 0) {
      DisplayValues(infoFromLocalStroage.position, "a-position");
    }
    // Fill input values
  }
  if (infoFromLocalStroage.company) {
    if (infoFromLocalStroage.company.length > 0) {
      DisplayValues(infoFromLocalStroage.company, "a-company");
    }
  }
  if (infoFromLocalStroage.descr) {
    if (infoFromLocalStroage.descr.length > 0) {
      DisplayValues(infoFromLocalStroage.descr, "exp-p--a");
    }
  }
  if (infoFromLocalStroage.dateStart) {
    if (infoFromLocalStroage.dateStart.length > 0) {
      DisplayValues(infoFromLocalStroage.dateStart, "a-st");
    }
  }
  if (infoFromLocalStroage.dateEnd) {
    if (infoFromLocalStroage.dateEnd.length > 0) {
      DisplayValues(infoFromLocalStroage.dateEnd, "a-en");
    }
  }
}

export function getDegreeTextFromKey(key) {
  let value = "";
  const degreeList = JSON.parse(localStorage.getItem("degree-list"));
  degreeList.forEach((element) => {
    if (element.id == key) {
      value = element.title;
    }
  });
  return value;
}

export function ValidateInputArray(array, checkLength) {
  let isValid = true;
  array.forEach(function (input) {
    if (input.value === "" || (checkLength && input.value.length < 2)) {
      isValid = false;
    }
  });
  return isValid;
}
