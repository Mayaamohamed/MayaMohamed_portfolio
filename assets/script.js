// ============================================
// Maya Mohamed — Data Analyst Portfolio
// theme toggle · scroll-spy nav · project galleries
// ============================================

(function () {
  "use strict";

  /* ---------- Theme toggle ---------- */
  const body = document.body;
  const themeToggle = document.getElementById("themeToggle");
  const toggleLabel = document.getElementById("toggleLabel");

  function applyTheme(theme) {
    body.setAttribute("data-theme", theme);
    toggleLabel.textContent = theme === "dark" ? "Dark" : "Light";
    try {
      localStorage.setItem("maya-portfolio-theme", theme);
    } catch (e) {
      /* localStorage unavailable — theme just won't persist */
    }
  }

  // Restore saved theme (defaults to the "dark" already set in the HTML)
  try {
    const saved = localStorage.getItem("maya-portfolio-theme");
    if (saved === "dark" || saved === "light") applyTheme(saved);
  } catch (e) {
    /* ignore */
  }

  themeToggle.addEventListener("click", function () {
    const current = body.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

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
