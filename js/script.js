// Scroll-reveal animations, mobile nav toggle, PDF download via browser print

(function () {
  const revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  const downloadBtn = document.getElementById("downloadBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", () => window.print());
  }

  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (nav && navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.classList.toggle("is-open", isOpen);
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("is-open");
        navToggle.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Language toggle (EN / ES)
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    const STORAGE_KEY = "cv-lang";
    const textEls = document.querySelectorAll("[data-es]:not([data-i18n-html])");
    const htmlEls = document.querySelectorAll("[data-es][data-i18n-html]");

    textEls.forEach((el) => { el.dataset.en = el.textContent; });
    htmlEls.forEach((el) => { el.dataset.enHtml = el.innerHTML; });

    function applyLang(lang) {
      textEls.forEach((el) => {
        el.textContent = lang === "es" ? el.dataset.es : el.dataset.en;
      });
      htmlEls.forEach((el) => {
        el.innerHTML = lang === "es" ? el.dataset.es : el.dataset.enHtml;
      });
      document.documentElement.lang = lang;
      langToggle.textContent = lang === "es" ? "EN" : "ES";
      langToggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    let currentLang = "en";
    try { currentLang = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
    applyLang(currentLang);

    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "es" : "en";
      applyLang(currentLang);
    });
  }
})();
