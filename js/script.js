/* ==========================================================
   NAVEEN KUMAR PORTFOLIO — script.js
   Edit the DATA section below to change content.
   ========================================================== */
(() => {
  "use strict";

  /* ---------- DATA (easy to customize) ---------- */
  const PROJECTS = [
      {
      t: "Billing software website",
      c: ["#667f91", "#8da99c", "#547384"],
      images: [
        "assets/images/billbook1.png",
        "assets/images/bilbook2.png",
        "assets/images/billbook3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/YourBillBook",
      tech: ["Python", "Django_rest", "HTML","javascript","react", "CSS", "Bootstrap", "MySQL"],
      f: [
        "Create and manage bills",
        "Search billing records",
        "Organize customer transactions",
        "Authentication",
        "Responsive billing interface",
      ],
    },
        {
      t: "Quickkart Ecommerce",
      c: ["#a77952", "#697f91", "#8a704e"],
      images: [
        "assets/images/Quickkart1.png",
        "assets/images/Quickkart2.png",
        "assets/images/Qucikkart3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Clonewebpage",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap","python","mysql"],
      f: [
        "Browse products and categories",
        "Explore product details",
        "Interactive shopping interface",
        "Responsive ecommerce layout",
      ],
    },
    
    {
      t: "Travel ticket booking",
      c: ["#a77952", "#697f91", "#8a704e"],
      images: [
        "assets/images/Travel1.png",
        "assets/images/travel2.png",
        "assets/images/travel3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Clonewebpage",
      tech: ["HTML", "CSS", "JavaScript","react", "Bootstrap","python","mysql"],
      f: [
        "Explore travel and ticket options",
        "Browse trip information",
        "Streamlined booking experience",
        "Responsive booking interface",
      ],
    },
    {
      t: "E-Commerce Website",
      c: ["#9a7849", "#c39c63", "#76583a"],
      images: [
        "assets/images/shopkart1.png",
        "assets/images/shopkart2.png",
        "assets/images/shopkart3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Ecomwebsite",
      tech: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MySQL",
      ],
      f: [
        "User authentication",
        "Product browsing",
        "Shopping cart",
        "Product management",
        "Order management",
        "Responsive UI",
      ],
    },
    {
      t: "Patient Details Management System",
      c: ["#667f91", "#8da99c", "#547384"],
      images: [
        "assets/images/patientdetail1.png",
        "assets/images/patientdetails2.png",
        "assets/images/patientdetail3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/PatientDetailsManagement",
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
      f: [
        "Patient CRUD",
        "Search",
        "Appointment management",
        "Authentication",
        "Responsive interface",
      ],
    },


    {
      t: "Portfolio Website",
      c: ["#9a7849", "#6b8290", "#c39c63"],
      images: [
        "assets/images/portfolio1.png",
        "assets/images/portfolio2.png",
        "assets/images/portfolio3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Official_Portfolio",
      demo: "https://official-portfolio-opal.vercel.app",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      f: [
        "Showcase projects and skills",
        "Explore profile and education",
        "Responsive portfolio layout",
        "Quick contact and social links",
      ],
    },

  ];
  // Set a college's final URL in the last field to make its logo link to that site.
  const EDUCATION = [
    [
      "M.Sc.",
      "Information Technology",
      "Postgraduate",
      "Yadava College, Madurai",
      "assets/images/yadava_collegelogo.jpg",
      "Yadava College logo",
      "https://www.yadavacollege.ac.in/",
    ],
    [
      "B.Sc.",
      "Information Technology",
      "Undergraduate",
      "Syed Ammal Arts and Science College, Ramanathapuram",
      "assets/images/syedammalcollegelogo.jpg",
      "Syed Ammal Arts and Science College logo",
      "https://www.saasc10.com/",
    ],
    [
      "HSC",
      "Higher Secondary",
      "Higher Secondary",
      "Ayira Vaisya Higher Secondary School, Paramakudi",
      "assets/images/av_higher_secondary_school_logo.jpg",
      "Ayira Vaisya Higher Secondary School logo",
      "",
    ],
    [
      "SSLC",
      "Secondary School Leaving Certificate",
      "Secondary",
      "Ayira Vaisya Higher Secondary School, Paramakudi",
      "assets/images/av_higher_secondary_school_logo.jpg",
      "Ayira Vaisya Higher Secondary School logo",
      "",
    ],
  ];
  const SERVICES = [
    [
      "bi-globe2",
      "Web Development",
      "Fast, modern websites built from clean, maintainable code.",
    ],
    [
      "bi-layers",
      "Full Stack Development",
      "Frontend, backend and database delivered as one product.",
    ],
    [
      "bi-phone",
      "Responsive Website Development",
      "Layouts that work on phones, tablets and desktops.",
    ],
    [
      "bi-brush",
      "UI Implementation",
      "Design files turned into pixel-accurate interfaces.",
    ],
    [
      "bi-filetype-py",
      "Django Development",
      "Secure Django apps with authentication and admin tools.",
    ],
    [
      "bi-database-gear",
      "Database Integration",
      "MySQL and SQLite schemas, queries and data flows.",
    ],
  ];

  /* ---------- ENV FLAGS ---------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = matchMedia("(hover: none), (pointer: coarse)").matches;
  const small = innerWidth < 768;
  if (!touch && !reduce) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      const particles = [];
      const maxParticles = 48;
      let width = innerWidth;
      let height = innerHeight;
      let lastX = null;
      let lastY = null;
      let frameId = 0;
      let lastFrameTime = 0;

      canvas.className = "cursor-particle-canvas";
      canvas.setAttribute("aria-hidden", "true");
      document.body.append(canvas);

      const resizeCanvas = () => {
        const pixelRatio = Math.min(devicePixelRatio || 1, 2);
        width = innerWidth;
        height = innerHeight;
        canvas.width = Math.round(width * pixelRatio);
        canvas.height = Math.round(height * pixelRatio);
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      };

      const animateParticles = (time) => {
        const elapsed = lastFrameTime ? Math.max(time - lastFrameTime, 0) : 16;
        const movementStep = Math.min(elapsed, 32) / 16;
        lastFrameTime = time;
        context.clearRect(0, 0, width, height);

        for (let index = particles.length - 1; index >= 0; index -= 1) {
          const particle = particles[index];
          particle.age += elapsed;
          if (particle.age >= particle.life) {
            particles.splice(index, 1);
            continue;
          }

          const progress = particle.age / particle.life;
          const fade = (1 - progress) ** 2;
          particle.x += particle.vx * movementStep;
          particle.y += particle.vy * movementStep;
          context.beginPath();
          context.fillStyle = `rgba(${particle.color}, ${fade * 0.72})`;
          context.shadowColor = `rgba(${particle.color}, ${fade * 0.55})`;
          context.shadowBlur = particle.size * 3;
          context.arc(
            particle.x,
            particle.y,
            particle.size * (0.65 + fade * 0.35),
            0,
            Math.PI * 2,
          );
          context.fill();
        }

        context.shadowBlur = 0;
        if (particles.length) {
          frameId = requestAnimationFrame(animateParticles);
        } else {
          frameId = 0;
          lastFrameTime = 0;
        }
      };

      const addParticle = (x, y, directionX, directionY) => {
        if (particles.length >= maxParticles) particles.shift();
        particles.push({
          x,
          y,
          vx: Math.random() * 0.7 - 0.35 - directionX * 0.2,
          vy: Math.random() * 0.7 - 0.35 - directionY * 0.2,
          size: 1.1 + Math.random() * 1.4,
          age: 0,
          life: 420 + Math.random() * 260,
          color: Math.random() > 0.2 ? "202, 151, 67" : "245, 207, 126",
        });
      };

      window.addEventListener(
        "pointermove",
        (event) => {
          if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
          if (lastX === null || lastY === null) {
            addParticle(event.clientX, event.clientY, 0, 0);
            lastX = event.clientX;
            lastY = event.clientY;
          } else {
            const deltaX = event.clientX - lastX;
            const deltaY = event.clientY - lastY;
            const distance = Math.hypot(deltaX, deltaY);
            if (distance >= 3) {
              const count = Math.min(3, Math.max(1, Math.floor(distance / 10)));
              for (let index = 1; index <= count; index += 1) {
                const progress = index / (count + 1);
                addParticle(
                  lastX + deltaX * progress,
                  lastY + deltaY * progress,
                  Math.sign(deltaX),
                  Math.sign(deltaY),
                );
              }
              lastX = event.clientX;
              lastY = event.clientY;
            }
          }
          if (!frameId && particles.length) {
            frameId = requestAnimationFrame(animateParticles);
          }
        },
        { passive: true },
      );

      window.addEventListener(
        "pointerleave",
        () => {
          lastX = null;
          lastY = null;
        },
        { passive: true },
      );
      window.addEventListener("resize", resizeCanvas, { passive: true });
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          particles.length = 0;
          if (frameId) cancelAnimationFrame(frameId);
          frameId = 0;
          lastFrameTime = 0;
          context.clearRect(0, 0, width, height);
        }
      });
      resizeCanvas();
    }
  }
  const about = $("#about"),
    aboutLightSwitch = $("#aboutLightSwitch"),
    aboutContent = $("#aboutContent"),
    aboutLightState = $("#aboutLightState");
  aboutLightSwitch.addEventListener("click", () => {
    const isLit = !about.classList.contains("is-lit");
    about.classList.toggle("is-lit", isLit);
    aboutLightSwitch.setAttribute("aria-pressed", String(isLit));
    aboutLightSwitch.setAttribute(
      "aria-label",
      isLit ? "Turn studio lamp off" : "Turn studio lamp on",
    );
    $(".about-light-switch-label", aboutLightSwitch).textContent = isLit
      ? "Turn me off"
      : "Turn me on to reveal";
    aboutLightState.textContent = isLit ? "ON" : "OFF";
    aboutContent.setAttribute("aria-hidden", String(!isLit));
    aboutContent.inert = !isLit;
  });

  /* ---------- RENDER DATA ---------- */
  const escapeXml = (value) =>
    value.replace(/[<>&'"]/g, (character) => {
      const entities = {
        "<": "&lt;",
        ">": "&gt;",
        "&": "&amp;",
        "'": "&apos;",
        '"': "&quot;",
      };
      return entities[character];
    });
  const thumb = (project, frame) => {
    const accent = project.c[frame];
    const title = escapeXml(project.t);
    const layouts = [
      `<rect x="36" y="36" width="568" height="42" rx="10" fill="#fff" opacity=".95"/><circle cx="62" cy="57" r="8" fill="${accent}"/><rect x="82" y="51" width="120" height="12" rx="6" fill="#42505d"/><rect x="470" y="49" width="104" height="16" rx="8" fill="${accent}"/><rect x="36" y="98" width="350" height="224" rx="14" fill="#fff" opacity=".95"/><rect x="58" y="122" width="170" height="13" rx="6" fill="#263544"/><rect x="58" y="150" width="278" height="9" rx="5" fill="#9da8b2"/><rect x="58" y="170" width="238" height="9" rx="5" fill="#c3cbd1"/><rect x="58" y="208" width="130" height="78" rx="11" fill="${accent}" opacity=".84"/><rect x="204" y="208" width="154" height="78" rx="11" fill="#e7e9e9"/>`,
      `<rect x="36" y="36" width="568" height="42" rx="10" fill="#fff" opacity=".95"/><circle cx="62" cy="57" r="8" fill="${accent}"/><rect x="82" y="51" width="120" height="12" rx="6" fill="#42505d"/><rect x="36" y="98" width="172" height="224" rx="14" fill="#fff" opacity=".95"/><rect x="226" y="98" width="378" height="104" rx="14" fill="#fff" opacity=".95"/><rect x="226" y="218" width="178" height="104" rx="14" fill="#fff" opacity=".95"/><rect x="420" y="218" width="184" height="104" rx="14" fill="#fff" opacity=".95"/><rect x="58" y="124" width="120" height="11" rx="5" fill="${accent}"/><rect x="58" y="154" width="94" height="9" rx="5" fill="#9da8b2"/><rect x="58" y="177" width="108" height="9" rx="5" fill="#c3cbd1"/><rect x="248" y="124" width="160" height="12" rx="6" fill="#263544"/><rect x="248" y="151" width="312" height="9" rx="5" fill="#c3cbd1"/><rect x="248" y="242" width="116" height="54" rx="9" fill="${accent}" opacity=".82"/><rect x="442" y="242" width="142" height="9" rx="5" fill="#9da8b2"/><rect x="442" y="264" width="118" height="9" rx="5" fill="#c3cbd1"/>`,
      `<rect x="36" y="36" width="568" height="42" rx="10" fill="#fff" opacity=".95"/><circle cx="62" cy="57" r="8" fill="${accent}"/><rect x="82" y="51" width="120" height="12" rx="6" fill="#42505d"/><rect x="36" y="98" width="568" height="224" rx="14" fill="#fff" opacity=".95"/><rect x="60" y="121" width="208" height="13" rx="6" fill="#263544"/><rect x="60" y="154" width="520" height="132" rx="12" fill="${accent}" opacity=".16"/><path d="M76 258 C132 226 172 253 225 193 S320 231 367 174 S454 220 502 158 S548 181 566 143" fill="none" stroke="${accent}" stroke-width="8" stroke-linecap="round"/><circle cx="367" cy="174" r="8" fill="${accent}"/><rect x="60" y="299" width="204" height="8" rx="4" fill="#b8c0c7"/><rect x="282" y="299" width="142" height="8" rx="4" fill="#d0d5d9"/>`,
    ];
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#e9e5dc"/><rect x="16" y="16" width="608" height="328" rx="20" fill="#d8d3c9"/>${layouts[frame]}<text x="40" y="337" fill="#293342" font-family="Arial,sans-serif" font-size="11" font-weight="600">${title}</text></svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  };
  const projectImages = (project) =>
    project.images || project.c.map((_, frame) => thumb(project, frame));

  $("#projectGrid").innerHTML = PROJECTS.map(
    (p, i) => {
      const images = projectImages(p);
      return `
  <div class="project-slide reveal" data-delay="${(i % 2) * 100}"><article class="project glass">
    <div class="project-preview" role="img" aria-label="Slideshow of ${p.t}">
      ${images.map((image) => `<div class="project-preview-slide"><img src="${image}" alt="" aria-hidden="true" loading="${i < 3 ? "eager" : "lazy"}" width="640" height="360"></div>`).join("")}
    </div>
    <div class="p-body"><h3>${p.t}</h3>
      <div>${p.tech.map((t) => `<span class="badge-t">${t}</span>`).join("")}</div>
      ${p.f.length ? `<ul>${p.f.map((f) => `<li>${f}</li>`).join("")}</ul>` : '<div class="mb-3"></div>'}
      <div class="p-actions">
        <button class="btn-x primary sm view" type="button" data-project-view="${i}" aria-haspopup="dialog">View Project</button>
        <a href="${p.repo}" class="btn-x ghost sm" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i> GitHub</a>
      </div></div></article></div>`;
    },
  ).join("");

  const projectDialog = $("#projectDialog");
  const openProjectDialog = (index) => {
    const project = PROJECTS[index];
    $("#projectDialogTitle").textContent = project.t;
    $("#projectDialogDescription").textContent = project.demo
      ? "Explore the live project or browse its source code on GitHub."
      : "This project preview and feature summary are available here. Open the source code on GitHub to explore the implementation.";
    $("#projectDialogGallery").innerHTML = `<div class="thumb">${projectImages(project).map((image) => `<img src="${image}" alt="" aria-hidden="true" width="640" height="360">`).join("")}</div>`;
    $("#projectDialogTech").innerHTML = project.tech
      .map((technology) => `<span class="badge-t">${technology}</span>`)
      .join("");
    $("#projectDialogFeatures").innerHTML = project.f.length
      ? project.f.map((feature) => `<li>${feature}</li>`).join("")
      : "<li>Project details will be added soon.</li>";
    if (project.demo) {
      $("#projectDialogDescription").innerHTML += ` <a href="${project.demo}" target="_blank" rel="noopener noreferrer">Open live demo</a>`;
    }
    projectDialog.showModal();
  };
  $$(".project [data-project-view]").forEach((button) => {
    button.addEventListener("click", () =>
      openProjectDialog(Number(button.dataset.projectView)),
    );
  });
  $(".project-dialog-close").addEventListener("click", () =>
    projectDialog.close(),
  );
  projectDialog.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      projectDialog.close();
    }
  });
  projectDialog.addEventListener("click", (event) => {
    if (event.target === projectDialog) projectDialog.close();
  });

  $("#educationGrid").innerHTML = EDUCATION.map(
    ([degree, field, level, institution, logo, logoAlt, collegeUrl], i) => {
      const locked = i > 0;
      const logoImage = `<img class="education-logo" src="${logo}" alt="${logoAlt}" width="68" height="68" loading="eager" decoding="async" onerror="this.hidden = true">`;
      const logoMarkup = collegeUrl
        ? `<a class="education-logo-link" href="${collegeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${institution} website">${logoImage}</a>`
        : logoImage;
      return `<article class="education-card reveal${locked ? " is-locked" : ""}" data-education-card data-delay="${i * 80}"${locked ? ' aria-hidden="true"' : ""}><div class="education-card-header"><span class="education-level">${level}</span>${logoMarkup}</div><div class="education-card-content"><h3>${degree}</h3><p>${field}</p><p class="education-institution">${institution}</p></div></article>`;
    },
  ).join("");

  /* ---------- EDUCATION PULL REVEAL ---------- */
  const educationStage = $("#educationStage"),
    educationPullZone = $("#educationPullZone"),
    educationIconWrap = $(".education-icon-wrap"),
    educationIcon = $("#educationIcon"),
    educationCards = $$("[data-education-card]");
  let educationDrag = false,
    educationStartY = 0,
    educationPullDistance = 0,
    educationUnlocked = false,
    suppressEducationClick = false;
  const setEducationIcon = (state) => {
    const images = {
      idle: "assets/images/sad.gif",
      pulling: "assets/images/in-love.gif",
      unlocked: "assets/images/happy.gif",
    };
    educationIcon.src = images[state];
  };

  const setEducationProgress = (value) => {
    const progress = Math.min(100, Math.max(0, value));
    educationPullZone.style.setProperty("--pull-progress", progress / 100);
  };

  const setEducationExpanded = (expanded) => {
    educationUnlocked = expanded;
    $("#educationGrid").classList.toggle("is-unlocked", expanded);
    educationPullZone.classList.toggle("is-unlocked", expanded);
    educationPullZone.setAttribute("aria-expanded", String(expanded));
    educationPullZone.setAttribute(
      "aria-label",
      expanded
        ? "Drag up to hide the additional education entries"
        : "Drag down to reveal the remaining education entries",
    );
    educationCards.forEach((card, index) => {
      if (index === 0) return;
      card.classList.toggle("is-locked", !expanded);
      card.classList.toggle("is-unlocked", expanded);
      card.setAttribute("aria-hidden", String(!expanded));
    });
    setEducationIcon(expanded ? "unlocked" : "idle");
    educationPullZone.querySelector(".education-pull-title").textContent =
      expanded ? "Drag up to hide entries" : "Drag down to reveal entries";
    const arrow = $(".education-pull-icon i", educationPullZone);
    arrow.classList.toggle("bi-arrow-up", expanded);
    arrow.classList.toggle("bi-arrow-down", !expanded);
    setEducationProgress(expanded ? 100 : 0);
    AOS.refreshHard();
  };

  const resetEducationPull = () => {
    educationPullZone.style.transform = "";
    setEducationProgress(educationUnlocked ? 100 : 0);
    educationDrag = false;
    educationPullDistance = 0;
    educationPullZone.classList.remove("is-dragging");
    educationIconWrap.style.removeProperty("--emoji-x");
    educationIconWrap.style.removeProperty("--emoji-y");
    setEducationIcon(educationUnlocked ? "unlocked" : "idle");
  };

  educationPullZone.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    educationDrag = true;
    educationStartY = event.clientY;
    educationPullDistance = 0;
    educationPullZone.classList.add("is-dragging");
    educationPullZone.setPointerCapture(event.pointerId);
    setEducationIcon("pulling");
  });

  educationPullZone.addEventListener("pointermove", (event) => {
    if (!educationDrag) return;
    const distance = event.clientY - educationStartY;
    educationPullDistance = Math.max(-150, Math.min(distance, 150));
    const resistance = 0.72;
    const offset = educationPullDistance * resistance;
    educationPullZone.style.transform = `translate3d(0, ${offset}px, 0)`;
    setEducationProgress((Math.abs(educationPullDistance) / 150) * 100);
    educationIconWrap.style.setProperty(
      "--emoji-x",
      `${Math.sign(educationPullDistance) * Math.min(10, Math.abs(educationPullDistance) * 0.07)}px`,
    );
    educationIconWrap.style.setProperty(
      "--emoji-y",
      `${Math.sign(educationPullDistance) * Math.min(16, Math.abs(educationPullDistance) * 0.1)}px`,
    );
  });

  educationPullZone.addEventListener("pointerup", (event) => {
    if (!educationDrag) return;
    educationDrag = false;
    educationPullZone.classList.remove("is-dragging");
    if (educationPullZone.hasPointerCapture(event.pointerId))
      educationPullZone.releasePointerCapture(event.pointerId);

    const shouldToggle =
      Math.abs(educationPullDistance) >= 120 &&
      (educationUnlocked ? educationPullDistance < 0 : educationPullDistance > 0);
    const nextExpanded = !educationUnlocked;
    if (Math.abs(educationPullDistance) >= 120) {
      suppressEducationClick = true;
      window.setTimeout(() => {
        suppressEducationClick = false;
      }, 0);
    }
    resetEducationPull();
    if (shouldToggle) setEducationExpanded(nextExpanded);
  });

  educationPullZone.addEventListener("pointercancel", resetEducationPull);
  educationPullZone.addEventListener("click", (event) => {
    if (suppressEducationClick) {
      event.preventDefault();
      return;
    }
    setEducationExpanded(!educationUnlocked);
  });

  educationStage.addEventListener("pointermove", (event) => {
    if (educationUnlocked || reduce) return;
    const rect = educationStage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    educationIconWrap.style.setProperty("--emoji-x", `${x * 9}px`);
    educationIconWrap.style.setProperty("--emoji-y", `${y * 7}px`);
  });

  educationStage.addEventListener("pointerleave", () => {
    educationIconWrap.style.removeProperty("--emoji-x");
    educationIconWrap.style.removeProperty("--emoji-y");
  });

  /* ---------- PROJECT CAROUSEL ---------- */
  const projectTrack = $("#projectGrid"),
    projectPrev = $("#projectPrev"),
    projectNext = $("#projectNext");
  let dragStartX = 0,
    dragScrollStart = 0,
    dragging = false,
    dragged = false;
  const updateProjectControls = () => {
    projectPrev.disabled = projectTrack.scrollLeft <= 1;
    projectNext.disabled =
      projectTrack.scrollLeft + projectTrack.clientWidth >=
      projectTrack.scrollWidth - 1;
  };
  const slideProjects = (direction) => {
    const firstSlide = $(".project-slide", projectTrack);
    if (!firstSlide) return;
    const gap = parseFloat(getComputedStyle(projectTrack).columnGap) || 0;
    projectTrack.scrollBy({
      left: direction * (firstSlide.getBoundingClientRect().width + gap),
      behavior: reduce ? "auto" : "smooth",
    });
  };
  projectPrev.addEventListener("click", () => slideProjects(-1));
  projectNext.addEventListener("click", () => slideProjects(1));
  projectTrack.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    if (event.target.closest("a, button")) return;
    dragging = true;
    dragged = false;
    dragStartX = event.clientX;
    dragScrollStart = projectTrack.scrollLeft;
    projectTrack.classList.add("is-dragging");
    projectTrack.setPointerCapture(event.pointerId);
  });
  projectTrack.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    const distance = event.clientX - dragStartX;
    if (Math.abs(distance) > 4) dragged = true;
    projectTrack.scrollLeft = dragScrollStart - distance;
  });
  const endProjectDrag = () => {
    dragging = false;
    projectTrack.classList.remove("is-dragging");
  };
  projectTrack.addEventListener("pointerup", endProjectDrag);
  projectTrack.addEventListener("pointercancel", endProjectDrag);
  projectTrack.addEventListener(
    "click",
    (event) => {
      if (!dragged) return;
      event.preventDefault();
      event.stopPropagation();
      dragged = false;
    },
    true,
  );
  projectTrack.addEventListener("scroll", updateProjectControls, {
    passive: true,
  });
  addEventListener("resize", updateProjectControls);
  updateProjectControls();

  /* ---------- PRELOADER ---------- */
  const pl = $("#preloader"),
    fill = $("#plFill"),
    pct = $("#plPct");
  $("#footerYear").textContent = new Date().getFullYear();
  document.body.style.overflow = "hidden";
  const DURATION = reduce ? 100 : small ? 350 : 500,
    t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / DURATION, 1),
      e = 1 - Math.pow(1 - p, 3);
    fill.style.width = e * 100 + "%";
    pct.textContent = Math.round(e * 100) + "%";
    if (p < 1) requestAnimationFrame(tick);
    else {
      pl.classList.add("done");
      document.body.style.overflow = "";
      window.setTimeout(triggerHeroFlick, 180);
      setTimeout(() => pl.remove(), 800);
    }
  })(t0);

  /* ---------- THEME (saved in localStorage) ---------- */
  const root = document.documentElement,
    themeBtn = $("#themeBtn");
  const setTheme = (t) => {
    root.dataset.theme = t;
    themeBtn.innerHTML = `<i class="bi ${t === "dark" ? "bi-moon-stars" : "bi-sun"}"></i>`;
    try {
      localStorage.setItem("portfolio-theme", t);
    } catch (e) {}
  };
  let saved = "light";
  try {
    saved = localStorage.getItem("portfolio-theme") || "light";
  } catch (e) {}
  setTheme(saved);
  themeBtn.addEventListener("click", () =>
    setTheme(root.dataset.theme === "dark" ? "light" : "dark"),
  );

  /* ---------- TYPEWRITER ---------- */
  const heroGreeting = $(".hero .hello"),
    heroName = $(".hero .display-title"),
    heroIntro = $("#heroIntro");
  const setHeroLanguage = (language) => {
    [heroGreeting, heroName].forEach((element) => {
      const isTamil = language === "ta";
      element.textContent = isTamil
        ? element.dataset.tamil
        : element.dataset.english;
      element.lang = language;
    });
  };
  [heroGreeting, heroName].forEach((element) => {
    element.dataset.english = element.textContent.trim();
  });
  heroIntro.addEventListener("pointerenter", (event) => {
    if (event.pointerType === "mouse") setHeroLanguage("ta");
  });
  heroIntro.addEventListener("pointerleave", (event) => {
    if (event.pointerType === "mouse") setHeroLanguage("en");
  });
  heroGreeting.classList.add("cursor-active");
  heroName.classList.remove("cursor-active");

  const typewriter = $("#typewriter");
  if (!reduce) {
    const phrases = [
      "Python Developer",
      "Django Developer",
      "Full Stack Developer",
    ];
    typewriter.textContent = "";
    let phrase = 0,
      character = 0,
      deleting = false;
    const typeNext = () => {
      const text = phrases[phrase];
      character += deleting ? -1 : 1;
      typewriter.textContent = text.slice(0, character);
      let delay = deleting ? 35 : 75;
      if (character === 0) {
        deleting = false;
        phrase = (phrase + 1) % phrases.length;
        delay = 250;
      } else if (character === text.length) {
        deleting = true;
        delay = 1200;
      }
      setTimeout(typeNext, delay);
    };
    typeNext();
  }

  /* ---------- NAVBAR: solid on scroll, active link, close mobile menu ---------- */
  const nav = $("#nav"),
    links = $$(".nav-link"),
    secs = links.map((l) => $(l.getAttribute("href")));
  const menu = $("#menu");
  links.forEach((l) =>
    l.addEventListener("click", () => {
      if (menu.classList.contains("show"))
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }),
  );
  const spy = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting)
          links.forEach((l) =>
            l.classList.toggle(
              "active",
              l.getAttribute("href") === "#" + e.target.id,
            ),
          );
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  secs.forEach((s) => s && spy.observe(s));

  /* ---------- SCROLL: nav state, back-to-hero, parallax ---------- */
  const toHero = $("#toHero");
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("scrolled", y > 40);
    toHero.classList.toggle("show", y > 500);
    ticking = false;
  };
  addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );
  onScroll();
  toHero.addEventListener("click", () =>
    $("#home").scrollIntoView({ behavior: reduce ? "auto" : "smooth" }),
  );

  /* ---------- REVEAL + COUNT-UP ---------- */
  function startReveal() {
    $$(".reveal").forEach((el) => {
      el.dataset.aos = el.classList.contains("scale") ? "zoom-in" : "fade-up";
      if (el.dataset.delay) el.dataset.aosDelay = el.dataset.delay;
    });
    $$(".skill, .project, .education-card, .service, .stat, .profile").forEach(
      (el) => {
        el.dataset.tilt = "";
        if (!el.closest(".reveal")) {
          el.dataset.aos = "fade-up";
          if (el.dataset.delay) el.dataset.aosDelay = el.dataset.delay;
        }
      },
    );
    const mobileMotion = matchMedia("(max-width: 767px)").matches;
    AOS.init({
      duration: reduce ? 0 : mobileMotion ? 500 : 650,
      easing: "ease-out-cubic",
      once: true,
      offset: mobileMotion ? 28 : 48,
      mirror: false,
      throttleDelay: 16,
      disable: reduce,
    });

    const co = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          $$("[data-count]", e.target).forEach((n) => {
            const end = +n.dataset.count,
              s = performance.now();
            (function step(now) {
              const p = Math.min((now - s) / 1400, 1);
              n.textContent = Math.round(end * (1 - Math.pow(1 - p, 3)));
              if (p < 1) requestAnimationFrame(step);
            })(s);
          });
          co.disconnect();
        }),
      { threshold: 0.4 },
    );
    const stats = $("#stats");
    if (stats) co.observe(stats);
  }
  startReveal();

  /* ---------- HERO FLICK + 3D TILT (cards) ---------- */
  if (!touch && !reduce) {
    $$(".about-metric-card").forEach((card) => {
      card.addEventListener(
        "pointermove",
        (event) => {
          const bounds = card.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / bounds.width;
          const y = (event.clientY - bounds.top) / bounds.height;
          card.style.setProperty("--pointer-x", `${x * 100}%`);
          card.style.setProperty("--pointer-y", `${y * 100}%`);
          card.style.setProperty("--tilt-x", `${(x - 0.5) * 8}deg`);
          card.style.setProperty("--tilt-y", `${(0.5 - y) * 8}deg`);
        },
        { passive: true },
      );
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--pointer-x");
        card.style.removeProperty("--pointer-y");
        card.style.removeProperty("--tilt-x");
        card.style.removeProperty("--tilt-y");
      });
    });
  }

  const heroPhoto = $("#heroPhoto");
  const triggerHeroFlick = () => {
    if (reduce) return;
    const mobileHero = matchMedia(
      "(max-width: 767px), (hover: none), (pointer: coarse)",
    ).matches;
    const animationClass = mobileHero ? "is-mobile-flicking" : "is-flicking";
    heroPhoto.classList.remove("is-flicking", "is-mobile-flicking");
    void heroPhoto.offsetWidth;
    heroPhoto.classList.add(animationClass);
  };
  heroPhoto.addEventListener("click", triggerHeroFlick);
  heroPhoto.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      triggerHeroFlick();
    }
  });
  heroPhoto.addEventListener("animationend", (event) => {
    if (event.animationName === "hero-flick")
      heroPhoto.classList.remove("is-flicking");
    if (event.animationName === "portrait-vibrate")
      heroPhoto.classList.remove("is-mobile-flicking");
  });

  if (!touch && !reduce) {
    $$("[data-tilt]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect(),
          x = (e.clientX - r.left) / r.width - 0.5,
          y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = `perspective(900px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg) translateY(-4px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });

    /* Magnetic buttons */
    $$(".magnetic").forEach((b) => {
      b.addEventListener("pointermove", (e) => {
        const r = b.getBoundingClientRect();
        b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
      });
      b.addEventListener("pointerleave", () => (b.style.transform = ""));
    });

    /* Hero scene + laptop follow the mouse */
    const scene = $("#heroScene"),
      depth = [0.4, 0.9, 1.1, 1, 1.2, 0.8, 1, 0.7];
    if (scene) {
      scene.addEventListener(
        "pointermove",
        (e) => {
          const r = scene.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width - 0.5,
            y = (e.clientY - r.top) / r.height - 0.5;
          $$(".layer", scene).forEach(
            (l, i) =>
              (l.style.transform = `translate3d(${x * 18 * depth[i % depth.length]}px,${y * 16 * depth[i % depth.length]}px,0)`),
          );
        },
        { passive: true },
      );
      scene.addEventListener("pointerleave", () =>
        $$(".layer", scene).forEach((layer) => (layer.style.transform = "")),
      );
    }

    const stage = $("#laptopStage"),
      lap = stage && $(".laptop", stage);
    if (stage && lap) {
      stage.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        lap.style.transform = `rotateX(${8 - ((e.clientY - r.top) / r.height - 0.5) * 16}deg) rotateY(${-16 + ((e.clientX - r.left) / r.width - 0.5) * 24}deg)`;
      });
      stage.addEventListener("pointerleave", () => (lap.style.transform = ""));
    }
  }
  /* Reduced 3D on mobile: laptop stays mostly flat */
  const laptop = $(".laptop");
  if ((touch || small) && laptop)
    laptop.style.transform = "rotateX(4deg) rotateY(-6deg)";
})();
