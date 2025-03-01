// Verifică dacă scriptul Calendly există deja pentru a nu-l încărca de mai multe ori
if (
  !document.querySelector(
    'script[src="https://assets.calendly.com/assets/external/widget.js"]'
  )
) {
  let script = document.createElement("script");
  script.src = "https://assets.calendly.com/assets/external/widget.js";
  script.type = "text/javascript";
  script.async = true;
  document.head.appendChild(script);
}

// Așteaptă încărcarea completă a paginii
document.addEventListener("DOMContentLoaded", function () {
  let contactButton = document.querySelector(".card .button");

  if (contactButton) {
    contactButton.addEventListener("click", function (event) {
      event.preventDefault(); // Oprește comportamentul default al linkului

      // Inițializează widgetul Calendly
      Calendly.initPopupWidget({
        url: "https://calendly.com/voluntariat-meditatii/30min",
      });
    });
  }
});

const scrollToTopBtn = document.getElementById("btn-scroll-to-top");

scrollToTopBtn.addEventListener("click", function btn() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.visibility = "visible";
  } else {
    scrollToTopBtn.style.visibility = "hidden";
  }
});
