(() => {
  "use strict";

  const showcase = document.querySelector(".skills-showcase");
  const trigger = showcase?.querySelector(".skill-trigger, .gauntlet-button");
  const backgroundVideo = showcase?.querySelector(".skills-background-video");
  let lastPointerType = "";
  let pinnedOpen = false;

  if (!showcase || !trigger) return;

  if (backgroundVideo) {
    const videoVisibility = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        backgroundVideo.play().catch(() => {});
      } else {
        backgroundVideo.pause();
      }
    });

    videoVisibility.observe(showcase);
  }

  const setClosed = (closed) => {
    showcase.classList.toggle("is-closed", closed);
    trigger.setAttribute("aria-expanded", String(closed));
    trigger.setAttribute(
      "aria-label",
      trigger.classList.contains("skill-trigger")
        ? closed ? "Hide technology skills" : "Reveal technology skills"
        : closed
          ? "Open the Infinity Gauntlet and hide skills"
          : "Close the Infinity Gauntlet and reveal skills",
    );
  };

  trigger.addEventListener("pointerdown", (event) => {
    lastPointerType = event.pointerType;
  });

  trigger.addEventListener("click", (event) => {
    const togglesOpenState =
      event.detail === 0 ||
      lastPointerType === "touch" ||
      matchMedia("(hover: none), (pointer: coarse)").matches;

    if (togglesOpenState) {
      pinnedOpen = !pinnedOpen;
      setClosed(pinnedOpen);
      return;
    }

    setClosed(true);
  });

  trigger.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") setClosed(true);
  });

  trigger.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse") {
      pinnedOpen = false;
      setClosed(false);
    }
  });

  trigger.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      pinnedOpen = false;
      setClosed(false);
      trigger.blur();
    }
  });

  showcase.classList.add("is-enhanced");
})();