"use strict";

import {
  displayData,
  getIndexFromElementId,
  getValuesFromInput,
  createLabel,
  createInput,
  createP,
  createSpan,
  DisplayValues,
  CreateExperienceSectionHtml,
  DisplayExperienceData,
  getDegreeTextFromKey,
  FillValues,
  DisplayEducationData,
  ValidateInputArray,
  CreateEducationSectioHtml,
} from "./helper.js"; //modal woindow

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(".close-modal");

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

window.onload = function () {
  //Display Experience
  let experienceData = JSON.parse(localStorage.getItem(`exp`));
  if (!experienceData) {
    return;
  }
  let countEntries = experienceData.position.length;
  // Generate HTml and fill values
  for (let index = 1; index < countEntries; index++) {
    CreateExperienceSectionHtml(index);
  }
  DisplayExperienceData(experienceData);

  //Display Education
  let educationData = JSON.parse(localStorage.getItem(`edu`));
  if (!educationData) {
    return;
  }
  let educationEntries = educationData.school.length;
  // Generate HTml and fill values
  for (let index = 1; index < educationEntries; index++) {
    CreateEducationSectioHtml(index);
  }
  DisplayEducationData(educationData);

  console.log("Sending resume");
  const info = JSON.parse(localStorage.getItem("info"));
  const image = localStorage.getItem("profilePicData");
  const exp = JSON.parse(localStorage.getItem("exp"));
  const edu = JSON.parse(localStorage.getItem("edu"));
  let experiences = [];
  for (let index = 0; index < exp.position.length; index++) {
    experiences.push({
      position: exp.position[index],
      employer: exp.company[index],
      start_date: exp.dateStart[index],
      due_date: exp.dateEnd[index],
      description: exp.descr[index],
    });
  }
  let educations = [];
  for (let index = 0; index < edu.school.length; index++) {
    educations.push({
      institute: edu.school[index],
      degree: edu.degree[index],
      due_date: edu.dateEnd[index],
      description: edu.descr[index],
    });
  }

  fetch(image)
    .then((res) => res.blob())
    .then((img) => {
      const formData = new FormData();
      formData.append("image", img, "image.jpeg");
      formData.append("name", info.name);
      formData.append("surname", info.surname);
      formData.append("email", info.email);
      formData.append("phone_number", info.phone_number);
      formData.append("experiences", experiences);
      formData.append("educations", educations);
      formData.append("about_me", info.about);
      submitForm(formData);
    });
};

function submitForm(payload) {
  fetch("https://resume.redberryinternship.ge/api/cvs", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: payload,
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
