document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(
    ".about-title, .about-left, .about-right, .hero-title, .hero-left, .hero-right, .timeline-item"
  );

  const contactInfo = document.querySelector(".contact-info");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // ===== Title glow (Hero & About) =====
          if (target.classList.contains("hero-title") || target.classList.contains("about-title")) {
            target.classList.add("show-title");
          }

          // ===== Left slide-in (Hero & About) =====
          if (target.classList.contains("hero-left") || target.classList.contains("about-left")) {
            target.classList.add("show-left");

            // Show contact info after About left
            if (target.classList.contains("about-left") && contactInfo) {
              setTimeout(() => {
                contactInfo.classList.add("show-contact");
              }, 500);
            }
          }

          // ===== Right slide-in (Hero & About) =====
          if (target.classList.contains("hero-right") || target.classList.contains("about-right")) {
            target.classList.add("show-right");
          }

          // ===== Education Timeline animation (Flash effect) =====
          if (target.classList.contains("timeline-item")) {
            target.classList.add("show");   // trigger CSS flashIn animation
          }

          // Stop observing once animation is triggered
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => observer.observe(el));
});
