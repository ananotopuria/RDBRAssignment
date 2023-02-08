export function fillInputValues() {
  const infoFromLocalStroage = JSON.parse(localStorage.getItem(`info`));
  const profilePicData = localStorage.getItem(`profilePicData`);
  if (infoFromLocalStroage.name) {
    displayData("a-name", infoFromLocalStroage.name);
  }
  if (infoFromLocalStroage.surname) {
    displayData("a-surname", infoFromLocalStroage.surname);
  }
  if (infoFromLocalStroage.about) {
    displayData("about-me--a", infoFromLocalStroage.about);
    const aboutMeLabel = document.getElementById(`about-label`);
    aboutMeLabel.classList.remove(`hidden`);
  }
  if (infoFromLocalStroage.email) {
    const displayEmailIcon = document.getElementById(`a-email--icon`);
    displayEmailIcon.classList.remove(`hidden`);
    displayData("a-email", infoFromLocalStroage.email);
  }
  if (infoFromLocalStroage.phone) {
    const displayPhoneIcon = document.getElementById(`a-phone--icon`);
    displayPhoneIcon.classList.remove(`hidden`);
    displayData("a-phone", infoFromLocalStroage.phone);
  }
  if (profilePicData) {
    displayImage(null, profilePicData);
  }
}

function displayData(selector, value) {
  document.getElementById(selector).innerHTML = value;
}

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
