const menuIcon = document.querySelector(".menu-icon");
const loginForm = document.querySelector("form");
const galleryImages = document.querySelectorAll(".gallery-img-wrapper");
const scrollArrowUp = document.querySelector(".arrow-up");
const switcher = document.querySelector(".switch input");

/*ELEMENTS ANIMATION*/
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
const slideFromTopElements = document.querySelectorAll(".slide-top-bottom");

hiddenElements.forEach((el) => observer.observe(el));
slideFromTopElements.forEach((el) => observer.observe(el));

/*HAMBURGER MENU*/
const toggleMenu = () => {
  const navigationList = document.querySelector(".navigation-list");
  const hamburgerMenu = document.querySelector(".fa-solid");
  const heroSection = document.querySelector(".hero-section");

  if (hamburgerMenu.classList[1] === "fa-bars") {
    hamburgerMenu.classList.remove("fa-bars");
    hamburgerMenu.classList.add("fa-xmark");
    navigationList.style.display = "block";
    heroSection.style.paddingTop = "200px";
  } else {
    hamburgerMenu.classList.add("fa-bars");
    hamburgerMenu.classList.remove("fa-xmark");
    navigationList.style.display = "none";
    heroSection.style.paddingTop = "0px";
  }
};

menuIcon.addEventListener("click", toggleMenu);

/*TIME COUNTER*/
const countDownDate = setInterval(() => {
  const ourDate = new Date("August 19, 2024 00:00:00").getTime();
  const now = new Date().getTime();
  const distance = ourDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = `${days}:`;
  document.querySelector(".hours").innerHTML = `${hours}:`;
  document.querySelector(".minutes").innerHTML = `${minutes}:`;
  document.querySelector(".seconds").innerHTML = `${seconds}`;
}, 1000);

/*GALERRY IMAGES TRANSITION*/
galleryImages.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.classList.add("galerry-img-transition");
  });
  e.addEventListener("mouseleave", () => {
    e.classList.remove("galerry-img-transition");
  });
});

/*SCROLL ARROW*/
window.addEventListener("scroll", () => {
  if (window.scrollY <= 150) {
    scrollArrowUp.style.opacity = "0";
  } else if (window.scrollY >= 150) {
    scrollArrowUp.style.display = "block";
    scrollArrowUp.style.opacity = ".5";

    scrollArrowUp.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

/*DARK & LIGHT MODE SWITCHER*/
const switchTheme = (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
  }
};

switcher.addEventListener("change", switchTheme);

/*LOGIN FORM*/
const noName = document.querySelector(".notificationName");
const noEmail = document.querySelector(".notificationEmail");
const noPassword = document.querySelector(".notificationPassword");
const noSecondPassword = document.querySelector(".notificationDiffPassword");

const fullNameInput = document.querySelector(".full-name");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const secondPasswordInput = document.querySelector(".second-password");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginFormWarning = (warning, input) => {
    if (input.value === "") {
      warning.style.display = "block";
      input.style.border = "1px solid red";
    } else {
      warning.style.display = "none";
      input.style.border = "1px solid green";
    }
  };

  loginFormWarning(noName, fullNameInput);
  loginFormWarning(noEmail, emailInput);
  loginFormWarning(noPassword, passwordInput);
  loginFormWarning(noSecondPassword, secondPasswordInput);

  if (passwordInput.value !== secondPasswordInput.value) {
    noSecondPassword.style.display = "block";
    secondPasswordInput.style.border = "1px solid red";
    noSecondPassword.textContent = "Your password does not match";
  }
});
