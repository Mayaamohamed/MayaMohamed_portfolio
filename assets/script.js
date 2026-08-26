// ============================================
// Maya Mohamed — Data Analyst Portfolio
// scroll-spy nav · project galleries
// ============================================

(function () {
  "use strict";

  const body = document.body;

  /* ---------- Scroll-spy navigation (sidebar + mobile tabs) ---------- */
  const sections = Array.from(document.querySelectorAll("main .section[id]"));
  const allNavLinks = Array.from(document.querySelectorAll(".nav-link"));

  function setActiveLink(id) {
    allNavLinks.forEach(function (link) {
      link.classList.toggle("active", link.dataset.target === id);
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    const observer = new IntersectionObserver(
      function (entries) {
        // Pick the entry closest to the top of the viewport that's intersecting
        let best = null;
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            if (!best || entry.boundingClientRect.top < best.boundingClientRect.top) {
              best = entry;
            }
          }
        });
        if (best) setActiveLink(best.target.id);
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Smooth-scroll on click + immediate active state (nice on slow scrolls)
  allNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setActiveLink(link.dataset.target);
    });
  });

  /* ---------- Project gallery tabs ---------- */
  const galleryCards = document.querySelectorAll(".project-card[data-gallery]");

  galleryCards.forEach(function (card) {
    const tabs = card.querySelectorAll(".media-tab");
    const activeImg = card.querySelector("img[data-active-img]");

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        if (tab.classList.contains("active")) return;

        tabs.forEach(function (t) {
          t.classList.remove("active");
        });
        tab.classList.add("active");

        const newSrc = tab.getAttribute("data-img");
        if (activeImg && newSrc) {
          activeImg.src = newSrc;
        }
      });
    });
  });
})();
