//Modal Form Contact now
const contactBtn = document.querySelector(".contact-btn");
const submitBtn = document.querySelector(".submit-btn");
const overlay = document.getElementById("overlay");

//Form Validation
const nameUser = document.getElementById("name");
const email = document.getElementById("email");
const userMsg = document.getElementById("name-msg");
const emailMsg = document.getElementById("email-msg");
const messageSend = document.querySelector("textarea");
const form = document.getElementById("form");

contactBtn.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});

overlay.addEventListener("click", (event) => {
  if (event.target === overlay) {
    document.querySelector(".modal").style.display = "none";
  }
});
submitBtn.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});

const nameCheck = () => {
  const nameValue = nameUser.value.trim();
  if (nameValue.length < 5 || nameValue.length > 10) {
    userMsg.style.display = "inline";
    userMsg.style.color = "red";
    userMsg.textContent = "Name must be at least 5 characters";
  } else {
    userMsg.style.display = "inline";
    userMsg.textContent = "";
  }
};

nameUser.addEventListener("input", nameCheck);

const emailValidation = () => {
  const emailValue = email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValue.match(emailPattern)) {
    emailMsg.style.display = "inline-block";
    emailMsg.style.color = "red";
    emailMsg.textContent = "Please enter a valid email address";
  } else {
    emailMsg.style.display = "inline";
    emailMsg.textContent = "";
  }
};

email.addEventListener("input", emailValidation);
messageSend.addEventListener("input", messageSend);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameValue = nameUser.value.trim();
  const emailValue = email.value.trim();
  const messageValue = messageSend.value.trim();

  if (!nameValue || !emailValue || !messageValue) {
    alert("Please fill out all the fields before submitting.");
    return;
  }

  console.log(
    "Name:",
    nameValue,
    "Email:",
    emailValue,
    "Message:",
    messageValue
  );
  alert("Form successfully submitted!");
  form.reset();
});

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Instantiate the logo slider

const mainSwiper = new Swiper(".swiper", {
  slidesPerView: 4,
  spaceBetween: 35,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Instantiate the slider text-card

const textSlider = new Swiper(".swiperB", {
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Email to check for contact
const emailInput = document.getElementById("email-input");
const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    alert("Please enter an email address.");
  } else if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
  } else {
    console.log("Email submitted:", email);
    alert("Email submitted: " + email);
    emailInput.value = "";
  }
});
