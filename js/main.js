const menuButton = document.getElementById("js_menu_modal_button");
const closeButton = document.getElementById("js_menu_close_button");
const menuModal = document.getElementById("js_menu_modal");
if (menuButton && menuModal) {
  menuButton.addEventListener("click", () => {
    menuModal.classList.add("active");
    history.pushState({ modalOpen: "menu" }, document.title);
  });
}
if (closeButton && menuModal) {
  closeButton.addEventListener("click", () => {
    menuModal.classList.remove("active");
  });
}

const contactButtons = Array.from(
  document.getElementsByClassName("js_contact_button")
);
const closeContactButton = document.getElementById("js_contact_close_button");
const contactModal = document.getElementById("js_contact_modal");
if (contactModal) {
  contactButtons.forEach((b) =>
    b.addEventListener("click", () => {
      contactModal.classList.add("active");
      history.pushState({ modalOpen: "contact" }, document.title);
    })
  );
}
if (closeContactButton && contactModal) {
  closeContactButton.addEventListener("click", () => {
    contactModal.classList.remove("active");
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (!targetId) return;

    const element = document.querySelector(targetId);
    if (!element) return;
    const y = element.getBoundingClientRect().top + window.scrollY - 90;

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: y, behavior: prefersReducedMotion ? "auto" : "smooth" });
  });
});

const navbar = document.getElementById("js_navbar");
let isScrollUpdateScheduled = false;
document.addEventListener(
  "scroll",
  () => {
    if (isScrollUpdateScheduled) return;
    isScrollUpdateScheduled = true;
    requestAnimationFrame(() => {
      isScrollUpdateScheduled = false;
      if (menuModal) menuModal.classList.remove("active");
      if (navbar) navbar.classList.toggle("active", window.scrollY > 200);
    });
  },
  { passive: true }
);

window.addEventListener("popstate", (event) => {
  if (event?.state?.modalOpen) {
    switch (event?.state?.modalOpen) {
      case "menu":
        if (menuModal) menuModal.classList.add("active");
        break;
      case "contact":
        if (contactModal) contactModal.classList.add("active");
        break;
    }
  } else {
    if (contactModal) contactModal.classList.remove("active");
    if (menuModal) menuModal.classList.remove("active");
  }
});

const schedulingButton = document.getElementById("scheduling-button");
if (schedulingButton) {
  const schedulingUrl =
    "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3gtraplbq8iUhA9MHmSO-BwadXWA4TOrokYyyzHBVH5aaFUmuBbd469pJfgmt50n28eh1cePGF?gv=true";
  const schedulingScriptSrc = "/js/sceduling-button.js";
  let schedulingLoadPromise = null;

  const ensureSchedulingReady = () => {
    if (schedulingButton.dataset.schedulingReady === "1") {
      return Promise.resolve();
    }
    if (window.calendar?.schedulingButton?.load) {
      window.calendar.schedulingButton.load({ url: schedulingUrl, target: schedulingButton });
      schedulingButton.dataset.schedulingReady = "1";
      return Promise.resolve();
    }

    if (!schedulingLoadPromise) {
      schedulingLoadPromise = new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = schedulingScriptSrc;
        script.async = true;
        script.onload = resolve;
        script.onerror = () => reject(new Error("Failed to load scheduling script"));
        document.head.appendChild(script);
      }).then(() => {
        if (!window.calendar?.schedulingButton?.load) {
          throw new Error("Scheduling script loaded, but API is missing");
        }
        window.calendar.schedulingButton.load({ url: schedulingUrl, target: schedulingButton });
        schedulingButton.dataset.schedulingReady = "1";
      });
    }

    return schedulingLoadPromise;
  };

  schedulingButton.addEventListener(
    "click",
    async (e) => {
      if (schedulingButton.dataset.schedulingReady === "1") return;

      e.preventDefault();
      e.stopImmediatePropagation();

      const originalText = schedulingButton.textContent;
      schedulingButton.disabled = true;
      schedulingButton.textContent = "Загрузка…";

      try {
        await ensureSchedulingReady();
      } finally {
        schedulingButton.disabled = false;
        schedulingButton.textContent = originalText;
      }

      schedulingButton.click();
    },
    true
  );
}
