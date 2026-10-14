(() => {
  "use strict";

  const section = document.querySelector("#skills");
  if (!section) return;

  const leaves = [...section.querySelectorAll(".skills-book-leaf")];
  const previousButton = section.querySelector("#skillsPrevious");
  const nextButton = section.querySelector("#skillsNext");
  const indicator = section.querySelector("#skillsPageIndicator");
  const progress = section.querySelector("#skillsProgress");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const skillIcons = [...section.querySelectorAll(".skills-icon-action")];
  let currentPage = 1;
  let isTurning = false;
  let isSectionActive = false;
  let finishTimer;

  const sectionObserver = new IntersectionObserver(
    ([entry]) => {
      isSectionActive = entry.isIntersecting;
    },
    { threshold: 0.15 },
  );
  sectionObserver.observe(section);

  const updateControls = () => {
    previousButton.disabled = isTurning || currentPage === 1;
    nextButton.disabled = isTurning || currentPage === leaves.length;
    indicator.textContent = `Page ${currentPage} of ${leaves.length}`;
    progress.style.width = `${(currentPage / leaves.length) * 100}%`;
  };

  const setAccessiblePage = (visibleIndex) => {
    leaves.forEach((leaf, index) => {
      const isVisible = index === visibleIndex;
      leaf.setAttribute("aria-hidden", String(!isVisible));
      leaf.inert = !isVisible;
    });
  };

  const animateSkillIcon = (button) => {
    if (reducedMotion.matches) return;

    const icon = button.querySelector("img");
    if (!icon || icon.classList.contains("is-animating")) return;
    icon.classList.add("is-animating");
  };

  const setPageStack = (visiblePage) => {
    const topZIndex = leaves.length + 1;
    leaves.forEach((leaf, index) => {
      if (index === visiblePage - 1) {
        leaf.style.zIndex = String(topZIndex);
      } else if (index < visiblePage - 1) {
        leaf.style.zIndex = String(index + 1);
      } else {
        leaf.style.zIndex = String(leaves.length - index);
      }
    });
  };

  const turnPage = (direction) => {
    if (isTurning) return;
    const nextPage = currentPage + direction;
    if (nextPage < 1 || nextPage > leaves.length) return;

    const leafIndex = direction > 0 ? currentPage - 1 : nextPage - 1;
    const leaf = leaves[leafIndex];
    isTurning = true;
    if (direction < 0) leaf.style.zIndex = String(leaves.length + 2);
    updateControls();

    const completeTurn = () => {
      if (!isTurning) return;
      isTurning = false;
      window.clearTimeout(finishTimer);
      leaf.removeEventListener("transitionend", handleTransitionEnd);
      currentPage = nextPage;
      leaf.classList.remove("is-turning");
      setPageStack(currentPage);
      setAccessiblePage(currentPage - 1);
      updateControls();
    };

    const handleTransitionEnd = (event) => {
      if (event.target === leaf && event.propertyName === "transform")
        completeTurn();
    };

    leaf.addEventListener("transitionend", handleTransitionEnd);
    leaf.classList.add("is-turning");
    leaf.classList.toggle("is-flipped", direction > 0);
    if (reducedMotion.matches) {
      completeTurn();
      return;
    }
    finishTimer = window.setTimeout(completeTurn, 1000);
  };

  previousButton.addEventListener("click", () => turnPage(-1));
  nextButton.addEventListener("click", () => turnPage(1));
  skillIcons.forEach((button) => {
    const icon = button.querySelector("img");
    if (icon) {
      icon.addEventListener("animationend", () =>
        icon.classList.remove("is-animating"),
      );
    }
    button.addEventListener("pointerenter", () => animateSkillIcon(button));
    button.addEventListener("focus", () => animateSkillIcon(button));
    button.addEventListener("click", () => animateSkillIcon(button));
  });

  document.addEventListener("keydown", (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.repeat) return;
    if (event.target instanceof HTMLElement && (
      event.target.isContentEditable ||
      ["INPUT", "TEXTAREA", "SELECT", "A"].includes(event.target.tagName)
    )) return;
    if (!isSectionActive) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      turnPage(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      turnPage(-1);
    }
  });

  setPageStack(currentPage);
  updateControls();
})();
