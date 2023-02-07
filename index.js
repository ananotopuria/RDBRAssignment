const redirectToPage = function (selector, route) {
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

const redirectToNextPage = function (selector, route) {
  const addNewRecord = document.querySelector(selector);
  addNewRecord.onclick = function (e) {
    e.preventDefault();
    location.href = route;
  };
};

// function displayDataFromLocalStorage() {
//   var data = {};
//   for (var i = 0; i < localStorage.length; i++) {
//     var key = localStorage.key(i);
//     var value = localStorage.getItem(key);
//     data[key] = value;
//   }

//   if (Object.keys(data).length > 0) {
//     var html = "";
//     for (var key in data) {
//       html += "<p>" + key + ": " + data[key] + "</p>";
//     }
//     document.getElementById("displayArea").innerHTML = html;
//   } else {
//     console.log("No data found in local storage");
//   }
// }
