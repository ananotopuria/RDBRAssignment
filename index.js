export const redirectToPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

getValueFromLocalStorage = function (key) {
  return localStorage.getItem(key);
};

addValueToLocalStorage = function (key, value) {
  localStorage.setItem(key, value);
};

removeALLFromLocalStorage = function () {
  localStorage.clear();
};

removeFromLocalStorage = function (key) {
  localStorage.clear();
};
