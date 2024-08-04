// import { collectionsDropDown } from "./uiLogic.js";

const collectionBox = document.querySelector(".collection");
const collectionsBox = document.querySelector(".collections");
const btnOpen = document.querySelector(".nav-open");
const btnClose = document.querySelector(".nav-close");

btnOpen.addEventListener("click", function () {
  btnOpen.style.display = "none";
  btnClose.style.display = "block";
  collectionsBox.style.display = " block";
});

btnClose.addEventListener("click", function () {
  btnClose.style.display = "none";
  btnOpen.style.display = "block";
  collectionsBox.style.display = "none";
});

// slider //
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slide-left");
const nextBtn = document.querySelector(".slide-right");

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};

goToSlide(0);
let currentSlide = 0;
let maxSlide = slides.length - 1;

const next = function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  goToSlide(currentSlide);
};

const prev = function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

setInterval(() => next(), 4000);

//modal
const signup = document.querySelector(".logBox");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");
const openSignup = document.querySelector("#create-account-link");
const openLogin = document.querySelector("#login-link");
const signUpBox = document.querySelector(".sign-up-box");
const loginBox = document.querySelector(".login-box");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

signup.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
close.addEventListener("click", closeModal);

openSignup.addEventListener("click", function (e) {
  e.preventDefault();
  signUpBox.classList.remove("hidden");
  loginBox.classList.add("hidden");
});

openLogin.addEventListener("click", function (e) {
  e.preventDefault();
  signUpBox.classList.add("hidden");
  loginBox.classList.remove("hidden");
});

// CREATE ACCOUNT LOGIC //

const firstname = document.querySelector(".firstname");
const lastname = document.querySelector(".lastname");
const mail = document.querySelector(".mail");
const gender = document.querySelector("#gender");
const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirm-password");
const joinUs = document.querySelector(".sign-up-btn");
const welcome = document.querySelector(".welcome");

const users = [];

joinUs.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    !firstname.value ||
    !lastname.value ||
    !mail.value ||
    !password.value ||
    !confirmPassword.value ||
    !gender.value
  ) {
    alert("fill blank space");
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert(" passwords must match");
    return;
  }

  const taker = {
    firstname: firstname.value,
    lastname: lastname.value,
    mail: mail.value,
    password: password.value,
    gender: gender.value,
  };

  users.push(taker);
  localStorage.setItem("chairUser", JSON.stringify(users));

  alert("Account Created Successfully");

  closeModal();

  firstname.value =
    lastname.value =
    mail.value =
    password.value =
    confirmPassword.value =
    gender.value =
      "";

  welcome.textContent = `Welcome ${firstname.value}`;
});
console.log(users);

// LOGIN //

const loginMail = document.querySelector(".login-mail");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const usersInfo = JSON.parse(localStorage.getItem("chairUser"));

  if (!loginMail.value || !loginPassword.value) {
    alert("fill blank space");
    return;
  }

  console.log(usersInfo);

  const you = usersInfo.find((each) => each.mail === loginMail.value);

  if (!you) {
    alert("Email not found");
    return;
  }

  if (you.password !== loginPassword.value) {
    alert("password is incorrect");
    return;
  }

  closeModal();

  welcome.textContent = `Welcome ${you.firstname}`;

  alert("login successful");
});

// display data

const orderGrid = document.querySelector(".order-grid");

const furnitures = async function () {
  try {
    const res = await fetch(
      `https://dummyjson.com/products/category/furniture`
    );
    const data = await res.json();
    console.log(data);
    return data.products;
  } catch (err) {
    console.error(err.message);
    throw err;
  }
};

furnitures();

const renderFurniture = async function () {
  try {
    const allFurnitures = await furnitures();
    allFurnitures.map((furn) => {
      const html = `<div class="order-box">
            <img src="${furn.images[1]}" alt="" />
            <p class="label">${furn.tags[1]}</p>
            <p class="spec-text">${furn.brand}</p>
            <div class="price-area">
              <div class="prices">
                <span class="current-price price">${furn.price}</span>
                <span class="crossed-price price">$250</span>
              </div>
              <div class="stars">
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
                <ion-icon name="star-outline"></ion-icon>
              </div>
            </div>
            <div class="newtag tag">New</div>
          </div>`;
      return orderGrid.insertAdjacentHTML("beforeend", html);
    });
  } catch (err) {
    console.error(err.message);
  }
};

renderFurniture();

const isPalindrome = function (x) {
  const y = x.toString().split(""); // ["1", "2", "3"], ["0", "1"], "01"
  if (y.includes("-")) return false; // ['-' "1", "2", "1"]
  //   const z = y.map((each) => each).reverse(); // ["3", "2", "1"], ["1", "0"], "10"
  let p = [];
  for (let i = y.length - 1; i >= 0; i--) {
    p.push(y[i]);
  }

  //   console.log(z);
  console.log(y);
  if (y.join("") === p.join("")) {
    console.log("true");
    return true;
  } else {
    console.log("false");
    return false;
  }
};

isPalindrome(123);

const xeno = [3, 2, 3, 4];
let p = [];
for (let i = xeno.length - 1; i >= 0; i--) {
  p.push(xeno[i]);
}
console.log(p);
