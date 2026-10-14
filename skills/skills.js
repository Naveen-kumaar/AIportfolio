(() => {
  "use strict";

  const showcase = document.querySelector(".skills-showcase");
  const book = showcase?.querySelector(".skills-book");
  if (showcase && book) {
    const pages = [...book.querySelectorAll(".skills-book-leaf")];
    const previousButton = showcase.querySelector('[data-page-direction="-1"]');
    const nextButton = showcase.querySelector('[data-page-direction="1"]');
    const indicator = showcase.querySelector(".skills-book-indicator");
    const progress = showcase.querySelector(".skills-book-progress-track > span");
    const pageCount = pages.length;
    let currentPage = 0;
    let isAnimating = false;
    let animationTimer;
    let animationFrame;
    let touchStartX = null;
    let sectionIsActive = false;

    if (
      pageCount !== 5 ||
      !previousButton ||
      !nextButton ||
      !indicator ||
      !progress
    ) {
      throw new Error("The skills book requires five pages and complete navigation controls.");
    }

    const renderBookState = () => {
      pages.forEach((page, index) => {
        const turned = index < currentPage;
        page.classList.toggle("is-turned", turned);
        page.classList.toggle("is-current", index === currentPage);
        page.setAttribute("aria-hidden", String(index !== currentPage));
        page.style.zIndex = String(turned ? index + 1 : pageCount - index);
      });
      previousButton.disabled = isAnimating || currentPage === 0;
      nextButton.disabled = isAnimating || currentPage === pageCount - 1;
      indicator.textContent = `Page ${currentPage + 1} of ${pageCount}`;
      progress.style.width = `${((currentPage + 1) / pageCount) * 100}%`;
    };

    const getTransformTransitionTime = (element) => {
      const style = getComputedStyle(element);
      const properties = style.transitionProperty.split(",").map((value) => value.trim());
      const durations = style.transitionDuration.split(",").map((value) => value.trim());
      const delays = style.transitionDelay.split(",").map((value) => value.trim());
      const transformIndex = properties.findIndex((property) => property === "transform" || property === "all");
      if (transformIndex < 0) return 0;

      const toMilliseconds = (value) =>
        value.endsWith("ms") ? Number.parseFloat(value) : Number.parseFloat(value) * 1000;
      const duration = toMilliseconds(durations[transformIndex % durations.length]);
      const delay = toMilliseconds(delays[transformIndex % delays.length]);
      return duration + delay;
    };

    const turnPage = (direction) => {
      if (isAnimating) return;
      const nextPage = currentPage + direction;
      if (nextPage < 0 || nextPage >= pageCount) return;

      // Rotating the top leaf exposes the next front, or restores the previous one.
      const turningPage = pages[direction > 0 ? currentPage : currentPage - 1];
      isAnimating = true;
      turningPage.classList.add("is-turning");
      turningPage.classList.add(direction > 0 ? "is-turning-forward" : "is-turning-backward");
      turningPage.style.zIndex = String(pageCount + 1);
      previousButton.disabled = true;
      nextButton.disabled = true;

      const finishTurn = () => {
        if (!isAnimating) return;
        clearTimeout(animationTimer);
        cancelAnimationFrame(animationFrame);
        turningPage.removeEventListener("transitionend", onTransitionEnd);
        turningPage.classList.remove("is-turning", "is-turning-forward", "is-turning-backward");
        currentPage = nextPage;
        isAnimating = false;
        renderBookState();
      };
      const onTransitionEnd = (event) => {
        if (event.target === turningPage && event.propertyName === "transform") {
          finishTurn();
        }
      };

      turningPage.addEventListener("transitionend", onTransitionEnd);
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        turningPage.classList.toggle("is-turned", direction > 0);
        finishTurn();
      } else {
        // Let the raised leaf and its moving shadow paint before rotating it.
        animationFrame = requestAnimationFrame(() => {
          turningPage.classList.toggle("is-turned", direction > 0);
          animationTimer = setTimeout(
            finishTurn,
            getTransformTransitionTime(turningPage) + 100,
          );
        });
      }
    };

    previousButton.addEventListener("click", () => turnPage(-1));
    nextButton.addEventListener("click", () => turnPage(1));

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        sectionIsActive = entry.isIntersecting;
      },
      { threshold: 0.25 },
    );
    visibilityObserver.observe(showcase);

    document.addEventListener("keydown", (event) => {
      if (!sectionIsActive || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement && event.target.closest("button, input, textarea, select, a")) return;
      if (event.key === "ArrowRight" && currentPage < pageCount - 1) {
        event.preventDefault();
        turnPage(1);
      } else if (event.key === "ArrowLeft" && currentPage > 0) {
        event.preventDefault();
        turnPage(-1);
      }
    });

    book.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "touch") touchStartX = event.clientX;
    });
    book.addEventListener("pointerup", (event) => {
      if (touchStartX === null) return;
      const distance = event.clientX - touchStartX;
      touchStartX = null;
      if (Math.abs(distance) >= 45) turnPage(distance < 0 ? 1 : -1);
    });
    book.addEventListener("pointercancel", () => {
      touchStartX = null;
    });

    renderBookState();
    return;
  }

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