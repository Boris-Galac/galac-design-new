document.addEventListener("DOMContentLoaded", () => {
  if (
    window.location.href.length === 22 ||
    window.location.href.length === 28
  ) {
    document.querySelector(".splashscreen").setAttribute("data-active", "true");
    setTimeout(() => {
      document.querySelector(".splashscreen").remove();
    }, 4000);
  } else {
    if (document.querySelector(".splashscreen")) {
      document.querySelector(".splashscreen").remove();
    }
  }
});
//// 💡💡💡💡💡💡 INDEX

if (
  window.location.href.length === 22 ||
  window.location.href.length === 32 ||
  window.location.href.includes("offer") ||
  window.location.href.includes("index")
) {
  // HOME SCREEN BANNER
  var swiper = new Swiper(".flip", {
    effect: "flip",
    loop: true,
    speed: 2000,
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
  const windowWidth = window.innerWidth;

  if (windowWidth > 1024) {
    // gsap animation for website img
    gsap.registerPlugin(ScrollTrigger);
    const imgWbeiste = document.querySelector(".hero__website-slider");
    gsap.to(imgWbeiste, {
      x: 2000,
      scrollTrigger: {
        scrub: 2,
        trigger: ".hero",
        toggleActions: "restart none none none", ///  1. onEnter 2. onLeave  3. onEnterBack  4. onLeaveBack
        start: "bottom 100%",
        end: "bottom 5%",
      },
    });
  } else {
    // gsap animation for website img
    gsap.registerPlugin(ScrollTrigger);
    const imgWbeiste = document.querySelector(".hero__website-slider");
    gsap.to(imgWbeiste, {
      x: 1000,
      scrollTrigger: {
        scrub: 2,
        trigger: ".hero",
        toggleActions: "restart none none none", ///  1. onEnter 2. onLeave  3. onEnterBack  4. onLeaveBack
        start: "bottom 100%",
        end: "bottom 5%",
        // markers: true,
      },
    });
  }
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

////// 💡💡💡💡💡💡 USLUGE & CIJENE

if (
  window.location.href.includes("usluge") ||
  window.location.href.includes("katalog")
) {
  // TAB SOLUTIONS
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((btn) => btn.setAttribute("data-active", "false"));
      e.target.setAttribute("data-active", "true");
      document.querySelectorAll(".tab-content").forEach((tab) => {
        tab.setAttribute("data-active", "false");
        if (e.target.dataset.tab === tab.dataset.tabcontent) {
          tab.setAttribute("data-active", "true");
        }
      });
    });
  });
}

////// 💡💡💡💡💡💡 KATALOG

if (window.location.href.includes("katalog")) {
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
  //// OFFER GMAIL CONTACT FORM
  document.querySelectorAll(".upit-offer-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const offerHeading =
        btn.parentElement.parentElement.firstElementChild.innerText;
      const bodyText =
        "Poštovani,\n\nZanimam se za navedenu ponudu. Možete mi se javiti povratno što je prije moguće da bi ostvarili suradnju. \n\nLijep Vam pozdrav!"; // Add additional text after "Poštovani,\n\n"
      const subject = encodeURIComponent(`Ponuda: ${offerHeading}`);
      const body = encodeURIComponent(bodyText);
      const recipient = "boris.galac@gmail.com";

      // Compose the mailto link with recipient, subject, and body
      const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Open the mail client
      window.location.href = mailtoLink;
    });
  });
  //// OFFER CALL CONTACT FORM
  document.querySelectorAll(".call-offer-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const phoneNumber = "+385996682736"; // Phone number to call
      window.location.href = `tel:${phoneNumber}`;
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
  document
    .querySelectorAll(".clr-theme-icon")
    .forEach((clrIcon) => clrIcon.setAttribute("data-active", "false"));

  if (bodyElement.classList.contains("light-theme")) {
    document
      .querySelector('.clr-theme-icon[data-id="light"]')
      .setAttribute("data-active", "true");
    document
      .querySelector('.clr-theme-icon[data-id="dark"]')
      .setAttribute("data-active", "false");
    localStorage.setItem("currentTheme", "themeActive");
  } else {
    document
      .querySelector('.clr-theme-icon[data-id="light"]')
      .setAttribute("data-active", "false");
    document
      .querySelector('.clr-theme-icon[data-id="dark"]')
      .setAttribute("data-active", "true");
    localStorage.removeItem("currentTheme");
  }
});

///////// HAM BTN

const hamBtn = document.querySelector(".ham-btn");
const nav = document.querySelector(".nav");

hamBtn.addEventListener("click", (e) => {
  if (hamBtn.getAttribute("data-active") === "true") {
    hamBtn.setAttribute("data-active", "false");
    nav.setAttribute("aria-expanded", "false");
    const overlay = document.querySelector(".overlay");
    overlay.setAttribute("data-visible", "false");
    overlay.setAttribute("aria-expanded", "false");
    overlay.addEventListener("animationend", (e) => {
      overlay.remove();
    });
  } else {
    hamBtn.setAttribute("data-active", "true");
    nav.setAttribute("aria-expanded", "true");
    // overlay
    const overlay = document.createElement("div");
    overlay.setAttribute("class", "overlay overlay--darker");
    overlay.setAttribute("data-visible", "true");
    overlay.setAttribute("aria-expanded", "true");
    overlay.append(nav);
    document.body.append(overlay);
    overlay.addEventListener("click", (e) => {
      if (e.target !== e.currentTarget) return;

      overlay.setAttribute("data-visible", "false");
      hamBtn.setAttribute("data-active", "false");

      overlay.addEventListener("animationend", (e) => {
        overlay.remove();
      });
    });
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
