/* ==========================================================
   NAVEEN KUMAR PORTFOLIO — script.js
   Edit the DATA section below to change content.
   ========================================================== */
(() => {
  "use strict";

  /* ---------- DATA (easy to customize) ---------- */
  const PROJECTS = [
    {
      number: "01",
      t: "Personal Portfolio Website",
      description:
        "A responsive developer portfolio featuring interactive animations, a modern interface, and selected project showcases.",
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
    {
      number: "02",
      t: "E-commerce Website",
      description:
        "An online shopping platform with product browsing, user authentication, a shopping cart, and product management.",
      images: [
        "assets/images/Quickkart1.png",
        "assets/images/Quickkart2.png",
        "assets/images/Qucikkart3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Clonewebpage",
      tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      f: [
        "Browse products and categories",
        "Explore product details",
        "Shopping cart and authentication",
        "Responsive ecommerce layout",
      ],
    },
    {
      number: "06",
      t: "E-commerce Website",
      description:
        "A full-stack shopping experience for discovering products, managing a cart, and handling products and orders.",
      images: [
        "assets/images/shopkart1.png",
        "assets/images/shopkart2.png",
        "assets/images/shopkart3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Ecomwebsite",
      tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
      f: [
        "User authentication",
        "Product browsing and management",
        "Shopping cart and order management",
        "Responsive user interface",
      ],
    },
    {
      number: "03",
      t: "Online Ticket Booking System",
      description:
        "A ticket booking platform with interactive interfaces and backend API integration.",
      images: [
        "assets/images/Travel1.png",
        "assets/images/travel2.png",
        "assets/images/travel3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/Clonewebpage",
      tech: ["React", "Django REST Framework", "MySQL"],
      f: [
        "Explore ticket and travel options",
        "Browse trip information",
        "Interactive booking experience",
        "Backend API integration",
      ],
    },
    {
      number: "04",
      t: "Patient Details Management System",
      description:
        "A patient management application with CRUD operations, search, authentication, and appointment management.",
      images: [
        "assets/images/patientdetail1.png",
        "assets/images/patientdetails2.png",
        "assets/images/patientdetail3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/PatientDetailsManagement",
      tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL"],
      f: [
        "Patient record CRUD",
        "Patient search",
        "Appointment management",
        "Authentication and responsive interface",
      ],
    },
    {
      number: "05",
      t: "Billing Management System",
      description:
        "A billing application designed to organize customer details, billing records, and transaction information.",
      images: [
        "assets/images/billbook1.png",
        "assets/images/bilbook2.png",
        "assets/images/billbook3.png",
      ],
      repo: "https://github.com/Naveen-kumaar/YourBillBook",
      tech: ["Python", "HTML", "CSS", "JavaScript", "MySQL"],
      f: [
        "Create and manage bills",
        "Search billing records",
        "Organize customer transactions",
        "Responsive billing interface",
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
      "[Add completion year]",
    ],
    [
      "B.Sc.",
      "Information Technology",
      "Undergraduate",
      "Syed Ammal Arts and Science College, Ramanathapuram",
      "assets/images/syedammalcollegelogo.jpg",
      "Syed Ammal Arts and Science College logo",
      "https://www.saasc10.com/",
      "[Add completion year]",
    ],
    [
      "HSC",
      "Higher Secondary",
      "Higher Secondary",
      "Ayira Vaisya Higher Secondary School, Paramakudi",
      "assets/images/av_higher_secondary_school_logo.jpg",
      "Ayira Vaisya Higher Secondary School logo",
      "",
      "[Add completion year]",
    ],
    [
      "SSLC",
      "Secondary School Leaving Certificate",
      "Secondary",
      "Ayira Vaisya Higher Secondary School, Paramakudi",
      "assets/images/av_higher_secondary_school_logo.jpg",
      "Ayira Vaisya Higher Secondary School logo",
      "",
      "[Add completion year]",
    ],
  ];
  const EXPERIENCE = [
    {
      title: "Internship at Shanthi IT Solution",
      category: "Internship",
      icon: "skills/assets/icons/collaboration.svg",
      iconAlt: "Collaboration",
      date: "[Add duration]",
      role: "[Add internship role]",
      description: "[Add a short description of responsibilities]",
      technologies: ["[Add technologies learned]"],
    },
    {
      title: "Internship at Elysium Technologies",
      category: "Internship",
      icon: "skills/assets/icons/collaboration.svg",
      iconAlt: "Collaboration",
      date: "[Add duration]",
      role: "[Add internship role]",
      description: "[Add a short description of responsibilities]",
      technologies: ["[Add technologies learned]"],
    },
    {
      title: "LeetCode Journey",
      category: "Technical learning",
      icon: "skills/assets/icons/problem-solving.svg",
      iconAlt: "Problem solving",
      date: "[Add period]",
      role: "[Add number of problems solved]",
      description: "A record of coding practice and problem-solving progress.",
      technologies: ["Python", "Problem solving"],
    },
  ];
  const EXPERIENCE_CAROUSEL = [
    ...EXPERIENCE.map((experience) => ({
      ...experience,
      image: experience.icon,
      imageAlt: experience.iconAlt,
      imageFit: "contain",
      kind: "Experience",
    })),
    ...PROJECTS.slice(0, 2).map((project) => ({
      title: project.t,
      category: "Selected project",
      date: "Project work",
      role: "Full-stack development",
      description: project.description,
      technologies: project.tech.slice(0, 4),
      image: project.images[0],
      imageAlt: `${project.t} project preview`,
      imageFit: "cover",
      kind: "Project",
    })),
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
        { passive: true }
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
    const accent =
      project.c?.[frame] || ["#9a7849", "#697f91", "#8a704e"][frame % 3];
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
    project.images?.length
      ? project.images
      : [0, 1, 2].map((frame) => thumb(project, frame));
  const technologyIcons = {
    HTML: "html",
    CSS: "css",
    JavaScript: "javascript",
    Bootstrap: "bootstrap",
    Python: "python",
    Django: "django",
    "Django REST Framework": "django",
    MySQL: "mysql",
    React: "react",
  };

  $("#projectGrid").innerHTML = PROJECTS.map(
    (p, i) => {
      const image = projectImages(p)[0];
      return `
  <article class="project-slide" data-project-slide="${i}" aria-label="${p.number}: ${p.t}">
    <div class="project">
      <div class="project-preview">
        <img src="${image}" alt="${p.t} project screenshot" width="640" height="360" loading="${i < 2 ? "eager" : "lazy"}" decoding="async">
        <span class="project-image-label">PROJECT ${p.number}</span>
      </div>
      <div class="p-body">
        <p class="project-category">SELECTED WORK <span>/</span> ${p.number}</p>
        <h3>${p.t}</h3>
        <p class="project-description">${p.description}</p>
        <div class="project-tech-list" aria-label="Technologies: ${p.tech.join(", ")}">
          ${p.tech.map((technology) => `<span class="project-tech">${technologyIcons[technology] ? `<img src="skills/assets/icons/${technologyIcons[technology]}.svg" alt="" width="16" height="16" loading="lazy">` : ""}${technology}</span>`).join("")}
        </div>
        <div class="p-actions">
          <button class="btn-x primary sm view" type="button" data-project-view="${i}" aria-haspopup="dialog">View Project <i class="bi bi-arrow-up-right" aria-hidden="true"></i></button>
          ${p.repo ? `<a href="${p.repo}" class="btn-x ghost sm" target="_blank" rel="noopener noreferrer"><i class="bi bi-github" aria-hidden="true"></i> GitHub</a>` : ""}
        </div>
      </div>
    </div>
  </article>`;
    },
  ).join("");

  const projectDialog = $("#projectDialog");
  const openProjectDialog = (index) => {
    const project = PROJECTS[index];
    $("#projectDialogTitle").textContent = project.t;
    $("#projectDialogDescription").textContent = project.description;
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

  const educationStatus = {
    Postgraduate: "PG",
    Undergraduate: "UG",
    "Higher Secondary": "HSC",
    Secondary: "SSLC",
  };
  $("#educationTimeline").innerHTML = EDUCATION.map(
    ([degree, field, level, institution, logo, logoAlt, collegeUrl, year], i) => {
      const logoImage = `<img class="journey-icon journey-education-icon" src="${logo}" alt="${logoAlt}" width="48" height="48" loading="lazy" decoding="async">`;
      const logoMarkup = collegeUrl
        ? `<a class="journey-logo-link" href="${collegeUrl}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${institution} website">${logoImage}</a>`
        : logoImage;
      return `
        <li class="journey-entry${i > 0 ? " is-education-locked" : ""}" data-journey-index="${i}"${i > 0 ? ' aria-hidden="true" inert' : ""}>
          <button class="journey-node" type="button" aria-label="Focus ${degree}, ${institution}">
            <span>${String(i + 1).padStart(2, "0")}</span>
          </button>
          <article class="journey-card journey-education-card" id="educationMilestone${i + 1}" tabindex="-1" style="--journey-delay:${i * 90}ms">
            <header class="journey-card-header">
              <span class="journey-type">${educationStatus[level] || level}</span>
              ${logoMarkup}
            </header>
            <h4>${degree} ${field}</h4>
            <p class="journey-institution">${institution}</p>
            <p class="journey-meta">${year}</p>
          </article>
        </li>`;
    },
  ).join("");

  $("#experienceOrbitStage").innerHTML = EXPERIENCE_CAROUSEL.map(
    (card, i) => `
      <article class="experience-orbit-card" data-carousel-index="${i}" aria-label="${card.kind}: ${card.title}">
        <div class="experience-card-artwork">
          <img src="${card.image}" alt="${card.imageAlt}" class="experience-card-image is-${card.imageFit}" width="640" height="360" loading="${i < 2 ? "eager" : "lazy"}" decoding="async">
          <span class="experience-card-number">${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="experience-card-copy">
          <div class="experience-card-kicker">
            <span class="journey-type">${card.category}</span>
            <span class="experience-card-date">${card.date}</span>
          </div>
          <h4>${card.title}</h4>
          <p class="journey-role">${card.role}</p>
          <p class="journey-description">${card.description}</p>
          <ul class="journey-tags" aria-label="Technologies and skills">
            ${card.technologies.map((technology) => `<li>${technologyIcons[technology] ? `<img src="skills/assets/icons/${technologyIcons[technology]}.svg" alt="" width="14" height="14" loading="lazy">` : ""}${technology}</li>`).join("")}
          </ul>
        </div>
      </article>`,
  ).join("");
  const journeyActiveStage = $("#journeyActiveStage");
  const journeyPanels = $$(".journey-panel");
  const journeyExplorer = $(".journey-explorer");
  const journeyContent = $("#journeyContent");
  const educationTimeline = $("#educationTimeline");
  const educationScrollViewport = $("#educationScrollViewport");
  const educationPullZone = $("#educationPullZone");
  const educationIcon = $("#educationIcon");
  const educationPullIcon = $(".education-icon-wrap");
  const educationEntries = $$(".journey-entry", educationTimeline);
  let journeyExpanded = false;
  let educationDragStartY = 0;
  let educationPullDistance = 0;
  let educationDragging = false;
  let suppressEducationClick = false;
  const setEducationIcon = (state) => {
    const icons = {
      idle: "assets/images/sad.gif",
      pulling: "assets/images/in-love.gif",
      expanded: "assets/images/happy.gif",
    };
    educationIcon.src = icons[state];
  };
  const setEducationPullProgress = (progress) => {
    educationPullZone.style.setProperty(
      "--pull-progress",
      String(Math.min(1, Math.max(0, progress))),
    );
  };
  let educationRevealEntries = () => {};
  let experienceRevealEntries = () => {};
  const setEducationExpanded = (expanded) => {
    journeyExpanded = expanded;
    journeyExplorer.classList.toggle("is-expanded", expanded);
    journeyContent.classList.toggle("is-expanded", expanded);
    journeyContent.setAttribute("aria-hidden", String(!expanded));
    journeyContent.inert = !expanded;
    educationPullZone.classList.toggle("is-unlocked", expanded);
    educationPullZone.setAttribute("aria-expanded", String(expanded));
    educationPullZone.setAttribute(
      "aria-label",
      expanded
        ? "Drag up to hide the education and experience journeys"
        : "Drag down to reveal the education and experience journeys",
    );
    educationPullZone.querySelector(".education-pull-title").textContent =
      expanded ? "Pull up to hide my journey" : "Pull down to explore my journey";
    $(".education-pull-icon i", educationPullZone).className = expanded
      ? "bi bi-arrow-up"
      : "bi bi-arrow-down";
    educationRevealEntries(expanded);
    experienceRevealEntries(expanded);
    if (!expanded) educationScrollViewport.scrollTop = 0;
    setEducationPullProgress(expanded ? 1 : 0);
    setEducationIcon(expanded ? "expanded" : "idle");
    scheduleEducationProgress();
  };
  const resetEducationPull = () => {
    educationPullZone.style.transform = "";
    educationPullZone.classList.remove("is-dragging");
    educationPullIcon.style.removeProperty("--emoji-x");
    educationPullIcon.style.removeProperty("--emoji-y");
    setEducationPullProgress(journeyExpanded ? 1 : 0);
    setEducationIcon(journeyExpanded ? "expanded" : "idle");
    educationDragging = false;
    educationPullDistance = 0;
  };
  educationPullZone.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    educationDragging = true;
    educationDragStartY = event.clientY;
    educationPullDistance = 0;
    educationPullZone.classList.add("is-dragging");
    educationPullZone.setPointerCapture(event.pointerId);
    setEducationIcon("pulling");
  });
  educationPullZone.addEventListener("pointermove", (event) => {
    if (!educationDragging) return;
    educationPullDistance = Math.max(
      -150,
      Math.min(event.clientY - educationDragStartY, 150),
    );
    educationPullZone.style.transform =
      `translate3d(0, ${educationPullDistance * 0.72}px, 0)`;
    setEducationPullProgress(Math.abs(educationPullDistance) / 120);
    educationPullIcon.style.setProperty(
      "--emoji-y",
      `${Math.sign(educationPullDistance) * Math.min(16, Math.abs(educationPullDistance) * 0.1)}px`,
    );
  });
  educationPullZone.addEventListener("pointerup", (event) => {
    if (!educationDragging) return;
    if (educationPullZone.hasPointerCapture(event.pointerId))
      educationPullZone.releasePointerCapture(event.pointerId);
    const shouldToggle =
      Math.abs(educationPullDistance) >= 120 &&
      (journeyExpanded ? educationPullDistance < 0 : educationPullDistance > 0);
    const didPullFarEnough = Math.abs(educationPullDistance) >= 120;
    resetEducationPull();
    if (didPullFarEnough) {
      suppressEducationClick = true;
      window.setTimeout(() => {
        suppressEducationClick = false;
      }, 0);
    }
    if (shouldToggle) setEducationExpanded(!journeyExpanded);
  });
  educationPullZone.addEventListener("pointercancel", resetEducationPull);
  educationPullZone.addEventListener("click", (event) => {
    if (suppressEducationClick) {
      event.preventDefault();
      return;
    }
    setEducationExpanded(!journeyExpanded);
  });
  const setActiveJourneyEntry = (panel, entry) => {
    $$(".journey-entry", panel).forEach((item) => {
      const active = item === entry;
      item.classList.toggle("is-active", active);
      $(".journey-node", item).setAttribute("aria-current", String(active));
    });
    const sectionName = panel.dataset.journeyName;
    const title = entry.querySelector("h4").textContent.trim();
    journeyActiveStage.textContent = `${sectionName} · ${title}`;
  };

  const experienceCarousel = $("#experienceCarousel");
  const experienceRegion = $("#experienceTimeline");
  const experienceOrbit = $("#experienceOrbitStage");
  const experienceCards = $$(".experience-orbit-card", experienceOrbit);
  const experienceStatus = $("#experienceCarouselStatus");
  const experiencePrev = $("#experiencePrev");
  const experienceNext = $("#experienceNext");
  const orbitDepth = 152;
  const orbitDuration = 1100;
  let activeExperience = 0;
  let orbitAnimating = false;
  let orbitHovered = false;
  let orbitFocused = false;
  let orbitTimer = 0;
  let orbitStates = [];
  let orbitRadius = 140;

  const experienceState = (index, activeIndex, radius) => {
    const count = experienceCards.length;
    const nextIndex = (activeIndex + 1) % count;
    const previousIndex = (activeIndex + count - 1) % count;
    if (index === activeIndex) {
      return { x: 0, y: 0, z: 0, rotateY: 0, scale: 1, opacity: 1 };
    }
    if (index === nextIndex) {
      return {
        x: radius * 0.42,
        y: 2,
        z: -orbitDepth,
        rotateY: -12,
        scale: 0.86,
        opacity: 0.72,
      };
    }
    if (index === previousIndex) {
      return {
        x: -radius * 0.36,
        y: 12,
        z: -orbitDepth - 20,
        rotateY: 14,
        scale: 0.82,
        opacity: 0.56,
      };
    }
    const distance = (index - activeIndex + count) % count;
    const side = distance % 2 === 0 ? -1 : 1;
    return {
      x: side * radius * 0.68,
      y: 8 + (distance % 2) * 8,
      z: -orbitDepth - 54,
      rotateY: side * -18,
      scale: 0.76,
      opacity: 0.4,
    };
  };
  const paintExperienceCard = (card, state) => {
    card.style.transform =
      `translate(-50%, -50%) translate3d(${state.x}px, ${state.y}px, ${state.z}px) rotateY(${state.rotateY}deg) scale(${state.scale})`;
    card.style.opacity = String(state.opacity);
    card.style.zIndex = String(Math.round(1000 + state.z));
  };
  const setExperienceAccessibility = () => {
    experienceCards.forEach((card, index) => {
      const current = index === activeExperience;
      card.classList.toggle("is-current", current);
      card.setAttribute("aria-hidden", String(!current));
    });
    const card = EXPERIENCE_CAROUSEL[activeExperience];
    experienceStatus.textContent =
      `${String(activeExperience + 1).padStart(2, "0")} / ${String(experienceCards.length).padStart(2, "0")} · ${card.title}`;
    if (journeyExpanded)
      journeyActiveStage.textContent = `Experience · ${card.title}`;
  };
  const restExperienceOrbit = () => {
    if (orbitAnimating) return;
    orbitRadius = Math.min(160, experienceOrbit.clientWidth * 0.34);
    orbitStates = experienceCards.map((_, index) =>
      experienceState(index, activeExperience, orbitRadius),
    );
    experienceCards.forEach((card, index) =>
      paintExperienceCard(card, orbitStates[index]),
    );
  };
  const easeOrbit = (progress) => {
    const x1 = 0.22;
    const y1 = 1;
    const x2 = 0.36;
    const y2 = 1;
    let low = 0;
    let high = 1;
    let parameter = progress;
    for (let i = 0; i < 12; i += 1) {
      const inverse = 1 - parameter;
      const x =
        3 * inverse * inverse * parameter * x1 +
        3 * inverse * parameter * parameter * x2 +
        parameter * parameter * parameter;
      if (Math.abs(x - progress) < 0.001) break;
      if (x < progress) low = parameter;
      else high = parameter;
      parameter = (low + high) / 2;
    }
    const inverse = 1 - parameter;
    return (
      3 * inverse * inverse * parameter * y1 +
      3 * inverse * parameter * parameter * y2 +
      parameter * parameter * parameter
    );
  };
  const advanceExperience = (direction) => {
    if (orbitAnimating || experienceCards.length < 2) return;
    const fromIndex = activeExperience;
    const toIndex =
      (fromIndex + direction + experienceCards.length) % experienceCards.length;
    const fromStates = orbitStates.map((state) => ({ ...state }));
    const radius = Math.min(160, experienceOrbit.clientWidth * 0.34);
    orbitRadius = radius;
    const startedAt = performance.now();
    orbitAnimating = true;

    if (reduce) {
      activeExperience = toIndex;
      orbitAnimating = false;
      restExperienceOrbit();
      setExperienceAccessibility();
      return;
    }

    const animate = (now) => {
      const progress = Math.min(1, (now - startedAt) / orbitDuration);
      const eased = easeOrbit(progress);
      const angle = Math.PI * eased;
      const orbitSide = direction > 0 ? -1 : 1;
      const incomingIndex = toIndex;
      const outgoingTarget = experienceState(fromIndex, toIndex, radius);
      const incomingStart = fromStates[incomingIndex];
      const outgoing = {
        x:
          outgoingTarget.x * eased +
          orbitSide * radius * 0.55 * Math.sin(angle),
        y: outgoingTarget.y * eased + orbitSide * 14 * Math.sin(angle),
        z:
          outgoingTarget.z * eased -
          (orbitDepth / 2) * (1 - Math.cos(angle)) * (1 - eased),
        rotateY:
          outgoingTarget.rotateY * eased +
          orbitSide * 90 * Math.sin(angle),
        scale:
          1 +
          (outgoingTarget.scale - 1) * eased -
          0.08 * Math.sin(angle),
        opacity:
          1 +
          (outgoingTarget.opacity - 1) * eased -
          0.1 * Math.sin(angle),
      };
      const incoming = {
        x:
          incomingStart.x * (1 - eased) -
          orbitSide * radius * 0.35 * Math.sin(angle),
        y: incomingStart.y * (1 - eased) - orbitSide * 12 * Math.sin(angle),
        z:
          incomingStart.z * (1 - eased) -
          (orbitDepth / 2 + (orbitDepth / 2) * Math.cos(angle)) * eased,
        rotateY:
          incomingStart.rotateY * (1 - eased) -
          orbitSide * 90 * Math.sin(angle),
        scale:
          incomingStart.scale +
          (1 - incomingStart.scale) * eased +
          0.06 * Math.sin(angle),
        opacity: incomingStart.opacity + (1 - incomingStart.opacity) * eased,
      };
      experienceCards.forEach((card, index) => {
        let state;
        if (index === fromIndex) {
          state = outgoing;
        } else if (index === incomingIndex) {
          state = incoming;
        } else {
          const destination = experienceState(index, toIndex, radius);
          const origin = fromStates[index];
          state = {
            x: origin.x + (destination.x - origin.x) * eased,
            y: origin.y + (destination.y - origin.y) * eased,
            z: origin.z + (destination.z - origin.z) * eased,
            rotateY:
              origin.rotateY + (destination.rotateY - origin.rotateY) * eased,
            scale: origin.scale + (destination.scale - origin.scale) * eased,
            opacity:
              origin.opacity + (destination.opacity - origin.opacity) * eased,
          };
        }
        orbitStates[index] = state;
        paintExperienceCard(card, state);
      });
      if (progress < 1) {
        requestAnimationFrame(animate);
        return;
      }
      activeExperience = toIndex;
      orbitAnimating = false;
      restExperienceOrbit();
      setExperienceAccessibility();
    };
    requestAnimationFrame(animate);
  };
  const setExperienceCarouselEnabled = (enabled) => {
    if (orbitTimer) {
      clearInterval(orbitTimer);
      orbitTimer = 0;
    }
    if (enabled) setExperienceAccessibility();
    if (enabled && !reduce) {
      orbitTimer = window.setInterval(() => {
        if (!orbitHovered && !orbitFocused && !document.hidden)
          advanceExperience(1);
      }, 3600);
    }
  };
  experiencePrev.addEventListener("click", () => advanceExperience(-1));
  experienceNext.addEventListener("click", () => advanceExperience(1));
  experienceCarousel.addEventListener("mouseenter", () => {
    orbitHovered = true;
  });
  experienceCarousel.addEventListener("mouseleave", () => {
    orbitHovered = false;
  });
  experienceCarousel.addEventListener("focusin", () => {
    orbitFocused = true;
  });
  experienceCarousel.addEventListener("focusout", (event) => {
    if (!experienceCarousel.contains(event.relatedTarget)) orbitFocused = false;
  });
  experienceRegion.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      advanceExperience(-1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      advanceExperience(1);
    }
  });
  if ("ResizeObserver" in window) {
    new ResizeObserver(restExperienceOrbit).observe(experienceOrbit);
  } else {
    window.addEventListener("resize", restExperienceOrbit);
  }
  restExperienceOrbit();
  setExperienceAccessibility();
  experienceRevealEntries = setExperienceCarouselEnabled;

  journeyPanels.forEach((panel) => {
    const timeline = $(".journey-timeline", panel);
    if (!timeline) return;
    const entries = $$(".journey-entry", timeline);
    let highestVisibleIndex = -1;
    const isEducation = timeline === educationTimeline;
    const revealEntry = (entry, index) => {
      entry.classList.add("is-visible");
      if (index >= highestVisibleIndex) {
        highestVisibleIndex = index;
        if (!isEducation) {
          timeline.style.setProperty(
            "--journey-progress",
            String((index + 1) / entries.length),
          );
        }
        setActiveJourneyEntry(panel, entry);
      }
    };
    const revealObserver = new IntersectionObserver(
      (observations) => {
        observations.forEach((observation) => {
          if (!observation.isIntersecting) return;
          const entry = observation.target;
          const index = Number(entry.dataset.journeyIndex);
          revealEntry(entry, index);
          revealObserver.unobserve(entry);
        });
      },
      {
        threshold: 0.22,
        root: isEducation ? educationScrollViewport : null,
        rootMargin: "0px 0px -12% 0px",
      },
    );
    if (isEducation) {
      educationRevealEntries = (expanded) => {
        entries.forEach((entry) => {
          const hidden = !expanded;
          entry.classList.toggle("is-education-locked", hidden);
          entry.setAttribute("aria-hidden", String(hidden));
          entry.inert = hidden;
          if (expanded) {
            revealObserver.observe(entry);
          } else {
            revealObserver.unobserve(entry);
            entry.classList.remove("is-visible", "is-active");
            $(".journey-node", entry).setAttribute("aria-current", "false");
          }
        });
        if (!expanded) {
          highestVisibleIndex = -1;
          timeline.style.setProperty("--journey-progress", "0");
          journeyActiveStage.textContent = "Pull down to explore";
        } else if (reduce) {
          entries.forEach((entry, index) => revealEntry(entry, index));
        }
      };
    } else {
      experienceRevealEntries = (expanded) => {
        entries.forEach((entry) => {
          if (expanded) {
            revealObserver.observe(entry);
          } else {
            revealObserver.unobserve(entry);
            entry.classList.remove("is-visible", "is-active");
            $(".journey-node", entry).setAttribute("aria-current", "false");
          }
        });
        if (!expanded) {
          highestVisibleIndex = -1;
          timeline.style.setProperty("--journey-progress", "0");
        } else if (reduce) {
          entries.forEach((entry, index) => revealEntry(entry, index));
        }
      };
    }

    $$(".journey-node", timeline).forEach((node) => {
      node.addEventListener("click", () => {
        const entry = node.closest(".journey-entry");
        const card = $(".journey-card", entry);
        if (isEducation && entry.classList.contains("is-education-locked"))
          setEducationExpanded(true);
        entry.classList.add("is-visible", "is-active");
        timeline.style.setProperty(
          "--journey-progress",
          String((Number(entry.dataset.journeyIndex) + 1) / entries.length),
        );
        setActiveJourneyEntry(panel, entry);
        if (isEducation) {
          const cardBounds = card.getBoundingClientRect();
          const viewportBounds = educationScrollViewport.getBoundingClientRect();
          educationScrollViewport.scrollTo({
            top:
              educationScrollViewport.scrollTop +
              cardBounds.top -
              viewportBounds.top -
              (educationScrollViewport.clientHeight - cardBounds.height) / 2,
            behavior: reduce ? "auto" : "smooth",
          });
        } else {
          card.scrollIntoView({
            behavior: reduce ? "auto" : "smooth",
            block: "center",
          });
        }
        card.focus({ preventScroll: true });
      });
    });
  });

  let educationProgressFrame = 0;
  const updateEducationScrollProgress = () => {
    educationProgressFrame = 0;
    const scrollRange =
      educationScrollViewport.scrollHeight -
      educationScrollViewport.clientHeight;
    const progress =
      scrollRange > 0 ? educationScrollViewport.scrollTop / scrollRange : 0;
    educationTimeline.style.setProperty(
      "--journey-progress",
      String(Math.min(1, Math.max(0, progress))),
    );
  };
  const scheduleEducationProgress = () => {
    if (educationProgressFrame) return;
    educationProgressFrame = requestAnimationFrame(updateEducationScrollProgress);
  };
  educationScrollViewport.addEventListener("scroll", scheduleEducationProgress, {
    passive: true,
  });
  educationScrollViewport.addEventListener("wheel", scheduleEducationProgress, {
    passive: true,
  });
  addEventListener("resize", scheduleEducationProgress);
  updateEducationScrollProgress();

  /* ---------- PROJECT CAROUSEL ---------- */
  const projectTrack = $("#projectGrid"),
    projectPrev = $("#projectPrev"),
    projectNext = $("#projectNext"),
    projectDots = $("#projectDots"),
    projectCounter = $("#projectCounter");
  const projectSlides = $$(".project-slide", projectTrack);
  let activeProject = 0,
    targetProject = 0,
    projectScrollTimer = 0;
  let dragStartX = 0,
    dragScrollStart = 0,
    dragging = false,
    dragged = false;
  projectDots.innerHTML = PROJECTS.map(
    (project, index) =>
      `<button class="project-dot${index === 0 ? " is-active" : ""}" type="button" data-project-index="${index}" aria-label="Show project ${project.number}: ${project.t}" aria-current="${index === 0 ? "true" : "false"}"></button>`,
  ).join("");
  const dotButtons = $$(".project-dot", projectDots);
  const setActiveProject = (index) => {
    activeProject = Math.max(0, Math.min(index, projectSlides.length - 1));
    projectSlides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === activeProject;
      slide.classList.toggle("is-active", isActive);
      slide.inert = !isActive;
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    dotButtons.forEach((dot, dotIndex) => {
      const isActive = dotIndex === activeProject;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
    projectCounter.textContent = `${String(activeProject + 1).padStart(2, "0")} / ${String(projectSlides.length).padStart(2, "0")}`;
    projectPrev.disabled = activeProject === 0;
    projectNext.disabled = activeProject === projectSlides.length - 1;
  };
  const goToProject = (index) => {
    targetProject = Math.max(0, Math.min(index, projectSlides.length - 1));
    projectTrack.scrollTo({
      left: projectSlides[targetProject].offsetLeft -
        projectSlides[0].offsetLeft,
      behavior: reduce ? "auto" : "smooth",
    });
    setActiveProject(targetProject);
  };
  projectDots.addEventListener("click", (event) => {
    const dot = event.target.closest("[data-project-index]");
    if (dot) goToProject(Number(dot.dataset.projectIndex));
  });
  projectPrev.addEventListener("click", () => goToProject(targetProject - 1));
  projectNext.addEventListener("click", () => goToProject(targetProject + 1));
  projectTrack.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    goToProject(targetProject + (event.key === "ArrowRight" ? 1 : -1));
  });
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
    if (dragged) {
      const nearest = Math.round(
        (projectTrack.scrollLeft + projectTrack.clientWidth / 2 -
          projectSlides[0].offsetLeft -
          projectSlides[0].getBoundingClientRect().width / 2) /
          (projectSlides[1]?.offsetLeft - projectSlides[0].offsetLeft ||
            projectSlides[0].getBoundingClientRect().width),
      );
      targetProject = Math.max(0, Math.min(nearest, projectSlides.length - 1));
      goToProject(targetProject);
    }
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
  projectTrack.addEventListener(
    "scroll",
    () => {
      const firstSlide = projectSlides[0];
      const step =
        projectSlides[1]?.offsetLeft - firstSlide.offsetLeft ||
        firstSlide.getBoundingClientRect().width;
      const centeredIndex = Math.round(
        (projectTrack.scrollLeft + projectTrack.clientWidth / 2 -
          firstSlide.offsetLeft -
          firstSlide.getBoundingClientRect().width / 2) /
          step,
      );
      setActiveProject(centeredIndex);
      clearTimeout(projectScrollTimer);
      projectScrollTimer = setTimeout(() => {
        targetProject = activeProject;
      }, 140);
    },
    { passive: true },
  );
  addEventListener("resize", () => goToProject(activeProject));
  setActiveProject(0);

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
