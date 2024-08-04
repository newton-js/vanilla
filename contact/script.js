"use strict";
const clicked = document.querySelector(".check-1");
const clicks = document.querySelector(".check-2");
const toShowed = document.querySelector(".query-1");
const toShows = document.querySelector(".query-2");
const button = document.querySelector(".btn");
const firstName = document.querySelector(".firstname");
const lastName = document.querySelector(".lastname");
const mail = document.querySelector(".emails");
const message = document.querySelector(".area");
const tick = document.querySelector(".tick");
const modal = document.querySelector(".modal");

let general,
  support = false;

clicked.addEventListener("change", function () {
  if (clicked.checked) {
    toShows.style.display = "none";
    general = true;
  } else {
    toShows.style.display = "flex";
    general = false;
  }
});

clicks.addEventListener("change", function () {
  if (clicks.checked) {
    toShowed.style.display = "none";
    support = true;
  } else {
    toShowed.style.display = "flex";
    support = false;
  }
});

button.addEventListener("click", function () {
  if (
    !firstName.value ||
    !lastName.value ||
    !mail.value ||
    !(clicked.value && clicks.value) ||
    !message.value ||
    !tick.value
  ) {
    alert("fill all requirements");
    return;
  }

  const info = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: mail.value,
    message: message.value,
    general: general,
    support: support,
  };

  // alert("your contact info have been saved");
  window.location.href = "http://127.0.0.1:5502/index.html";

  console.log(window);
});
