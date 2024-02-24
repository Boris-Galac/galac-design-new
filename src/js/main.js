document.addEventListener("DOMContentLoaded", () => {
  if (window.location.href.length === 22) {
    document.querySelector(".splashscreen").setAttribute("data-active", "true");
    setTimeout(() => {
      document.querySelector(".splashscreen").remove();
    }, 4000);
  } else {
    return;
  }
});
//// 💡💡💡💡💡💡 INDEX

if (window.location.href.length === 22 || window.location.href.length === 32) {
  // SPLASH SCREEN
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
}

//// 💡💡💡💡💡💡 GRAFICKI DIZAJN

if (window.location.href.includes("graficki-dizajn")) {
  // baguuette library
  baguetteBox.run(".gallery");

  const projects = document.querySelectorAll(".graph-project");
  const projectBtns = document.querySelectorAll(".project-btn");
  const layoutBtn = document.querySelector(".layout-btn");

  layoutBtn.addEventListener("click", (e) => {
    projects.forEach((project) => {
      project.setAttribute("data-active", "false");
      layoutBtn.setAttribute("data-active", "false");
    });
  });
  projectBtns.forEach((btn) => {
    // layoutBtn.addEventListener("click", (e) => {});
    btn.addEventListener("click", (e) => {
      projects.forEach((project) => {
        project.setAttribute("data-active", "false");
        if (btn.dataset.project === project.id) {
          layoutBtn.setAttribute("data-active", "true");
          project.setAttribute("data-active", "true");
        }
      });
    });
  });
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

////// 💡💡💡💡💡💡 CIJENE

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
////// 💡💡💡💡💡💡 KONTAKT

if (window.location.href.includes("kontakt")) {
  // EMAIL CONSULTATION

  document.getElementById("emailForm").addEventListener("submit", (e) => {
    e.preventDefault(); // Spriječava slanje obrasca

    // Dohvati uneseni e-mail korisnika
    const userEmail = document.getElementById("userEmail").value;

    // Provjeri ispravnost e-mail adrese
    if (!isValidEmail(userEmail)) {
      alert("Molimo unesite ispravnu e-mail adresu.");
      return;
    }

    // Pošalji e-mail na određenu adresu
    const emailBody = `Korisnikov e-mail: ${userEmail}`;
    const mailtoLink = `mailto:boris.galac@gmail.com?subject=Novi e-mail&body=${encodeURIComponent(
      emailBody
    )}`;
    window.location.href = mailtoLink;
  });

  // Funkcija za provjeru ispravnosti e-mail adrese
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
////// 💡💡💡💡💡💡 WEB PORTFOLIO

if (window.location.href.includes("web-portfolio")) {
  // swiper slider
  var swiper = new Swiper(".mySwiper-portfolio", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
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
