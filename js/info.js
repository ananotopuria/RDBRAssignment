("use strict");

const fileError = document.getElementById(`file-error`);

function validateName() {
  let nameObject = getNameAndValidate();
  const nameError = document.getElementById(`name-error`);
  displayData("a-name", nameObject.nameElement.value);
  if (nameObject.valid) {
    // OK
    nameObject.nameElement.setAttribute("class", "valid-input");
    nameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  nameObject.nameElement.setAttribute("class", "invalid-input");
  nameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getNameAndValidate() {
  const name = document.getElementById(`name`);
  if (name.value.length < 2 || !/^[ა-ჰ]+$/.test(name.value)) {
    return {
      valid: false,
      nameElement: name,
    };
  }
  return {
    valid: true,
    nameElement: name,
  };
}

function validateSurname() {
  let surnameObject = getSurnameAndValidate();
  const surnameError = document.getElementById(`surname-error`);
  displayData("a-surname", surnameObject.surnameElement.value);
  if (surnameObject.valid) {
    // OK
    surnameObject.surnameElement.setAttribute("class", "valid-input");
    surnameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  surnameObject.surnameElement.setAttribute("class", "invalid-input");
  surnameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getSurnameAndValidate() {
  const surname = document.getElementById(`surname`);
  if (surname.value.length < 2 || !/^[ა-ჰ]+$/.test(surname.value)) {
    return {
      valid: false,
      surnameElement: surname,
    };
  }
  return {
    valid: true,
    surnameElement: surname,
  };
}

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

// function validateSurname() {
//   const surnameError = document.getElementById(`surname-error`);
//   const surname = document.getElementById(`surname`).value;
//   displayData("a-surname", surname);
//   if (surname.length < 2 || !/^[ა-ჰ]+$/.test(surname)) {
//     surnameError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//     return false;
//   }
//   surnameError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//   return true;
// }

// function validateEmail() {
//   const emailError = document.getElementById(`email-error`);
//   const email = document.getElementById(`email`).value;
//   displayData("a-email", email);
//   const emailRegex = /^[a-zA-Z0-9._-]+@redberry.ge$/;
//   const displayEmailIcon = document.getElementById(`a-email--icon`);
//   if (!emailRegex.test(email)) {
//     emailError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//     return false;
//   }
//   displayEmailIcon.classList.remove(`hidden`);
//   emailError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//   return true;
// }

function validateEmail() {
  let emailObject = getEmailAndValidate();
  const emailError = document.getElementById(`email-error`);
  displayData("a-email", emailObject.emailElement.value);
  const displayEmailIcon = document.getElementById(`a-email--icon`);
  if (emailObject.valid) {
    // OK
    emailObject.emailElement.setAttribute("class", "valid-input");
    emailError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
    return;
  }
  //Error
  emailObject.emailElement.setAttribute("class", "invalid-input");
  emailError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;

  return true;
}

function getEmailAndValidate() {
  const email = document.getElementById(`email`);
  const emailRegex = /^[a-zA-Z0-9._-]+@redberry.ge$/;
  // const displayEmailIcon = document.getElementById(`a-email--icon`);
  if (!emailRegex.test(email.value)) {
    return {
      valid: false,
      emailElement: email,
    };
  }
  return {
    valid: true,
    emailElement: email,
  };
}

// function validatePhone() {
//   const phoneRegex = /^\+995\d{9}$|^\+995\s\d{3}\s\d{3}\s\d{3}$/;
//   const phoneError = document.getElementById(`phone-error`);
//   displayData("a-phone", phone);
//   const displayPhoneIcon = document.getElementById(`a-phone--icon`);
//   if (!phoneRegex.test(phone)) {
//     phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//     return false;
//   }
//   displayPhoneIcon.classList.remove(`hidden`);
//   phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//   return true;
// }

// function validatePhone() {
//   let phoneObject = getPhoneAndValidate();
//   const phoneError = document.getElementById(`phoneError`);
//   if (phoneObject.valid) {
//     // OK
//     phoneObject.phoneElement.setAttribute("class", "valid-input");
//     phoneError.innerHTML = `<ion-icon class="icon-check" name="checkmark-circle"></ion-icon>`;
//     return;
//   }
//   //Error
//   phoneObject.phoneElement.setAttribute("class", "invalid-input");
//   phoneError.innerHTML = `<ion-icon class="icon-warning" name="warning"></ion-icon>`;
//   return true;
// }

// function getPhoneAndValidate() {
//   const phone = document.getElementById(`phone`).value;
//   const phoneRegex = /^\+995\d{9}$|^\+995\s\d{3}\s\d{3}\s\d{3}$/;
//   if (!phoneRegex.test(phone)) {
//     return {
//       valid: false,
//       phoneElement: phone,
//     };
//   }
//   return {
//     valid: true,
//     phoneElement: phone,
//   };
// }

function validatePhone() {
  let phoneObject = getPhoneAndValidate();
  const phoneError = document.getElementById(`phone-error`);
  displayData("a-phone", phoneObject.phoneElement.value);
  const displayPhoneIcon = document.getElementById(`a-phone--icon`);
  if (!phoneObject.phoneElement) {
    // Error: element not found
    return true;
  }
  if (phoneObject.valid) {
    // OK
    phoneObject.phoneElement.setAttribute("class", "valid-input");
    phoneError.innerHTML = `<ion-icon class="icon-check" phone="checkmark-circle"></ion-icon>`;
    return;
  }
  // Error: invalid phone number
  phoneObject.phoneElement.setAttribute("class", "invalid-input");
  phoneError.innerHTML = `<ion-icon class="icon-warning" phone="warning"></ion-icon>`;

  return true;
}
function getPhoneAndValidate() {
  const phone = document.getElementById(`phone`);
  if (!phone) {
    return {
      valid: false,
      phoneElement: null,
    };
  }
  const phoneRegex = /^\+995\d{9}$|^\+995\s\d{3}\s\d{3}\s\d{3}$/;
  if (!phoneRegex.test(phone.value)) {
    return {
      valid: false,
      phoneElement: phone,
    };
  }
  return {
    valid: true,
    phoneElement: phone,
  };
}

function textArea() {
  const aboutMeLabel = document.getElementById(`about-label`);
  const aboutMeTextArea = document.getElementById(`about-me`).value;
  document.getElementById(`about-me--a`).innerHTML = aboutMeTextArea;
  displayData("about-me--a", aboutMeTextArea);
  if (aboutMeTextArea === "") {
    aboutMeLabel.classList.add(`hidden`);
  } else {
    aboutMeLabel.classList.remove(`hidden`);
  }
}

const imgBox = document.getElementById(`imgBox`);

const loadFile = function (event) {
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.addEventListener("load", () => {
    localStorage.setItem("profilePicData", reader.result);
    var element = document.getElementById("profile-pic");
    if (element) {
      element.src = reader.result;
    } else {
      displayImage(event);
    }
  });
};

function displayImage(event, localStorageProfilePic) {
  const img = new Image();
  img.id = "profile-pic";
  if (localStorageProfilePic) {
    img.src = localStorageProfilePic;
  } else {
    img.src = URL.createObjectURL(event.target.files[0]);
  }

  img.style.width = `250px`;
  img.style.height = `auto`;
  img.style.borderRadius = `50%`;
  img.onload = function () {
    document.getElementById(`imgBox`).appendChild(img);
  };
}

const fillInputValues = function () {
  const name = document.getElementById(`name`);
  const surname = document.getElementById(`surname`);
  const email = document.getElementById(`email`);
  const phone = document.getElementById(`phone-number`);
  const about = document.getElementById(`about-me`);

  const infoFromLocalStroage = JSON.parse(localStorage.getItem(`info`));
  if (!infoFromLocalStroage) {
    return;
  }
  if (infoFromLocalStroage.name) {
    name.value = infoFromLocalStroage.name;
  }
  if (infoFromLocalStroage.surname) {
    surname.value = infoFromLocalStroage.surname;
  }
  if (infoFromLocalStroage.about) {
    about.value = infoFromLocalStroage.about;
  }
  if (infoFromLocalStroage.email) {
    email.value = infoFromLocalStroage.email;
  }
  if (infoFromLocalStroage.phone) {
    phone.value = infoFromLocalStroage.phone;
  }
};

function saveFormToLocalStorage() {
  // Save all form items to local storage
  const data = {
    name: document.getElementById(`name`).value,
    surname: document.getElementById(`surname`).value,
    about: document.getElementById(`about-me`).value,
    email: document.getElementById(`email`).value,
    phone: document.getElementById(`phone`).value,
  };
  // localStorage.setItem("name", document.getElementById("name").value);
  localStorage.setItem(`info`, JSON.stringify(data));
}

// when page is loaded fill input values from local storage
window.addEventListener(`load`, (event) => {
  console.log(`page is fully loaded`);
  fillInputValues();
});

document
  .getElementById(`next-section-experience`)
  .addEventListener(`click`, function (event) {
    // Validate form
    console.log("click event");
    event.preventDefault();
    let name = getNameAndValidate();
    let surname = getSurnameAndValidate();
    let email = getEmailAndValidate();
    let phone = getPhoneAndValidate();

    if (name.valid && surname.valid && email.valid && phone.valid == false) {
      console.log("name.valid", name.valid);
      return;
    }
    console.log("isValid", name && surname);
    redirectToRoute("./exp.html");
    saveFormToLocalStorage();
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

const redirectToRoute = function (route) {
  location.href = route;
};

// const redirectToNextPage = function (selector, route, event) {
//   const addNewRecord = document.querySelector(selector);
//   addNewRecord.onclick = function (e) {
//     e.preventDefault();
//     location.href = route;
//   };
// };

function getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);

  var dataURL = canvas.toDataURL("image/png");

  return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
