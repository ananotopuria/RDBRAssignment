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

export function DisplayValues(array, displaySelector) {
  for (let index = 0; index < array.length; index++) {
    if (index == 0) {
      displayData(displaySelector, array[index]);
    } else {
      displayData(displaySelector + "_" + index, array[index]);
    }
  }
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
