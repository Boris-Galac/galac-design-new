// SWIPER HOME PAGE
var swiper = new Swiper(".cube", {
  effect: "cube",
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  cubeEffect: {
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
// SWIPER GRAFICKI DIZAJN PAGE
var swiper = new Swiper(".mySwiper-portfolio", {
  effect: "flip",
  grabCursor: true,
  loop: true,
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//// 💡💡💡💡💡💡 INDEX

// SPLASH SCREEN

if (window.location.href.length === 22) {
  document.addEventListener("DOMContentLoaded", function () {
    if (window.location.href.length === 22) {
      document
        .querySelector(".splashscreen")
        .setAttribute("data-active", "true");
    } else {
      document
        .querySelector(".splashScreen")
        .setAttribute("data-active", "false");
    }
  });
}

//// 💡💡💡💡💡💡 GRAFICKI DIZAJN

// GRAFICKI DIZAJN
if (window.location.href.includes("graficki-dizajn")) {
  let currentImageIndex = -1;

  function galleryFunction() {
    const galleryImages = document.querySelectorAll(".project__gallery > img");

    if (galleryImages) {
      galleryImages.forEach((img, index) => {
        img.addEventListener("click", () => {
          currentImageIndex = index;
          createOverlay();
          displayCurrentImage();
          createGalleryBtns();
        });
      });
    }

    function changeImg(changeDir) {
      const newImg = document.getElementById("current-img");
      if (newImg) {
        // Remove any existing classes
        newImg.classList.remove("right-image", "left-image");
      }

      currentImageIndex += changeDir;

      if (currentImageIndex < 0) {
        currentImageIndex = galleryImages.length - 1;
      } else if (currentImageIndex >= galleryImages.length) {
        currentImageIndex = 0;
      }

      // Determine the class to add
      const classToAdd = changeDir === 1 ? "right-image" : "left-image";

      displayCurrentImage(classToAdd);
    }
    const newImg = document.createElement("img");

    function displayCurrentImage(classToAdd) {
      const currentImg = document.getElementById("current-img");

      if (currentImg) {
        currentImg.remove();
      }

      newImg.setAttribute("class", `current-gallery-img ${classToAdd}`);
      newImg.setAttribute("id", "current-img");
      newImg.setAttribute("src", galleryImages[currentImageIndex].src);
      newImgWindow.append(newImg);
    }

    function createGalleryBtns() {
      // prev btn
      const prevBtn = document.createElement("button");
      prevBtn.setAttribute("class", "gallery-btn gallery-btn--prev");
      prevBtn.addEventListener("click", () => {
        changeImg(-1);
      });
      const prevImgIcon = document.createElement("i");
      prevImgIcon.setAttribute("class", "fa-solid fa-chevron-left");
      prevBtn.append(prevImgIcon);
      newImgWindow.append(prevBtn);

      // next btn
      const nextBtn = document.createElement("button");
      nextBtn.setAttribute("class", "gallery-btn gallery-btn--next ");
      nextBtn.addEventListener("click", (e) => {
        changeImg(1);
      });
      const nextImgIcon = document.createElement("i");
      nextImgIcon.setAttribute("class", "fa-solid fa-chevron-right");
      nextBtn.append(nextImgIcon);
      newImgWindow.append(nextBtn);
    }
  }

  // OPEN THE PROJECT & ASIDE BAR
  const layoutBtn = document.querySelector(".layout-btn");

  const asideBarProjectWrapper = document.querySelector(
    ".grafika__projects-wrapper"
  );
  const asideBarProjects = document.querySelector(
    ".grafika__projects-inner-wrapper"
  );
  const projectsWrapper = document.querySelector(".projects");
  const projectsBtns = document.querySelectorAll(".project-btn");

  projectsBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const projectBtn = btn.dataset.project;
      const filteredProjectHrv = projects.filter(
        (obj) => obj.id === projectBtn
      );
      const imgs = filteredProjectHrv[0].images.map((img) => {
        return `<img src="src/assets/images/project-imgs/img (${img}).png" alt="image">`;
      });
      const project = filteredProjectHrv
        .map((obj) => {
          return `
              <figure class="graph-project right-image">
              <div class="project__header">
              <div class="project__col project__col--first-col">
              <span class="project__label">Ime projekta</span>
              <h2 class="project__description project__title--main-heading">${
                obj.nameOfProject
              }</h2>
              </div>
              <div class="project__col">
              <span class="project__label">Opis projekta</span>
              <p class="project__description project__description--paragraph">${
                obj.projectDescription
              }</p>
              </div>
              <div class="project__col">
              <span class="project__label">Tip projekta</span>
              <h2 class="project__description project__description--brand-heading">${
                obj.typeOfProject
              }</h2>
              </div>
              <div class="project__col">
              <span class="project__label">Korištene tehnologije</span>
              <h2 class="project__description project__description__last-col"><img src="src/assets/images/illustrator-tech.png" alt="adobe photoshop"><img src="src/assets/images/ps-tech.png" alt="adobe photoshop">
              </div>
              </div>
              <div class="project__content">
              <div class="project__gallery">
              ${imgs.map((img) => img.replace(/,/g, "")).join("")}
              </div>
              </div>
              </figure>
            `;
        })
        .join("");

      projectsWrapper.setAttribute("data-opened", "true");
      projectsWrapper.innerHTML = project;
      galleryFunction();

      if (
        !asideBarProjectWrapper.classList.contains("opened-project-layout") &&
        !asideBarProjects.classList.contains("aside-projects") &&
        !layoutBtn.classList.contains("active")
      ) {
        asideBarProjectWrapper.classList.add("opened-project-layout");
        asideBarProjects.classList.add("aside-projects");
        layoutBtn.classList.add("active");
      }
    });
  });

  // CHANGE LAYOUT
  layoutBtn.addEventListener("click", (e) => {
    if (
      asideBarProjectWrapper.classList.contains("opened-project-layout") &&
      asideBarProjects.classList.contains("aside-projects") &&
      layoutBtn.classList.contains("active")
    ) {
      asideBarProjectWrapper.classList.remove("opened-project-layout");
      asideBarProjects.classList.remove("aside-projects");
      layoutBtn.classList.remove("active");
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (projectsWrapper.hasChildNodes()) {
      projectsWrapper.firstElementChild.remove();
    }
    projectsWrapper.setAttribute("data-opened", "false");
  });

  function createOverlay() {
    ////////// create overlay for curr img
    newImgWindow = document.createElement("div");
    newImgWindow.setAttribute("class", "overlay-image");

    ////////// when clicks overlay close img
    newImgWindow.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) {
        e.currentTarget.remove();
      }
    });
    document.body.append(newImgWindow);
  }
}

////// 💡💡💡💡💡💡 USLUGE

if (window.location.href.includes("usluge")) {
  // TAB SOLUTIONS
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.setAttribute("data-active", "false"));
      e.target.setAttribute("data-active", "true");
      document.querySelectorAll(".tab-article-content").forEach((tab) => {
        tab.setAttribute("data-active", "false");
        if (e.target.dataset.tab === tab.dataset.tabcontent) {
          tab.setAttribute("data-active", "true");
        }
      });
    });
  });
  // TAB WEB SOLUTIONS MODALS
  document.querySelectorAll(".web-solution-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clickedBtn = btn.dataset.tab;
      const uhu = webMethods.filter((obj) => clickedBtn === obj.id);
      const abc = uhu.map((obj) => {
        return `
        <div id="${obj.id}" class="web-modal" aria-expanded="true" aria-label="Web solutions for you"><img src="${obj.img}"><p class="solution--webdesign-paragraph">${obj.text}</p></div>
        `;
      });
      let overlay = document.createElement("div");
      overlay.setAttribute("class", "overlay overlay--darker");
      overlay.setAttribute("data-visible", "true");
      overlay.setAttribute("aria-expanded", "true");
      overlay.innerHTML = abc;
      document.body.append(overlay);
      overlay.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;

        overlay.setAttribute("data-visible", "false");
        overlay.addEventListener("animationend", (e) => {
          overlay.remove();
        });
      });
    });
  });
}

////// 💡💡💡💡💡💡 USLUGE

if (window.location.href.includes("cijene")) {
  // TAB WEB SOLUTIONS MODALS
  document.querySelectorAll(".offer-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const clickedBtn = btn.dataset.id;
      console.log(clickedBtn);
      const uhu = paketi.filter((obj) => clickedBtn === obj.id);
      const abc = uhu.map((obj) => {
        return `
        <div id="${obj.id}" class="web-modal" aria-expanded="true" aria-label="Web solutions for you"><p class="solution--webdesign-paragraph">${obj.text}</p></div>
        `;
      });
      let overlay = document.createElement("div");
      overlay.setAttribute("class", "overlay overlay--darker");
      overlay.setAttribute("data-visible", "true");
      overlay.setAttribute("aria-expanded", "true");
      overlay.innerHTML = abc;
      document.body.append(overlay);
      overlay.addEventListener("click", (e) => {
        if (e.target !== e.currentTarget) return;

        overlay.setAttribute("data-visible", "false");
        overlay.addEventListener("animationend", (e) => {
          overlay.remove();
        });
      });
    });
  });
}
////// 💡💡💡💡💡💡 FAQ

if (window.location.href.includes("faq")) {
  // FAQ

  const faqQuestion = document.querySelectorAll(".faq__question");
  faqQuestion.forEach((question) => {
    question.addEventListener("click", (e) => {
      const faq__paragraph = question.nextElementSibling;
      const btn = question.firstElementChild.nextElementSibling;
      const btnActive = btn.firstElementChild.classList.contains("active");
      if (!btnActive) {
        btn.firstElementChild.classList.add("active");
        faq__paragraph.classList.add("active");
      } else {
        faq__paragraph.classList.remove("active");
        btn.firstElementChild.classList.remove("active");
      }
    });
  });
}

//// 💡💡💡💡💡💡 GLOBALS

///////// INTERSECTION OBSERVER

// from left stagger

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

const leftStagger = document.querySelectorAll(".hidden-left-stagger");
leftStagger.forEach((el) => observer.observe(el));
// from bottom opacity stagger
const bottomStagger = document.querySelectorAll(".hidden-bottom");
bottomStagger.forEach((el) => observer.observe(el));

////////// SWITCH CHANGE LIGHT/DARK THEME

// Grab elements
const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Something went wrong! Make sure that ${selector} exists/is typed correctly.`
  );
};

// Switch theme/add to local storage
const bodyElement = document.body;
const themeToggleBtn = selectElement(".switch-clr-theme");
const currentTheme = localStorage.getItem("currentTheme");
if (currentTheme) {
  bodyElement.classList.add("light-theme");
}

themeToggleBtn.addEventListener("click", (e) => {
  bodyElement.classList.toggle("light-theme");
  if (bodyElement.classList.contains("light-theme")) {
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    localStorage.removeItem("currentTheme");
  }
});

///////// OVERLAY FUNCTION

function createOverlay(element) {
  let overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay overlay--darker");
  overlay.setAttribute("data-visible", "true");
  overlay.setAttribute("aria-expanded", "true");
  overlay.append(element);
  document.body.append(overlay);
  overlay.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) return;

    overlay.setAttribute("data-visible", "false");
    overlay.addEventListener("animationend", (e) => {
      overlay.remove();
    });
  });
}
