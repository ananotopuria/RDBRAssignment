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

export function createInput(
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

export function DisplayAndFillValues(
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
