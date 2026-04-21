
    
      /* =============================================
       DATA — single source of truth
    ============================================= */
      const TYPED_STRINGS = [
        "YouTuber!",
        "Frontend Developer!",
        "UI/UX Designer!",
        "Freelancer!",
      ];

      const PROJECTS = [
        {
          title: "Web Design Studio",
          category: "Web Design",
          img: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=700&q=80",
          tags: ["HTML", "CSS", "JavaScript"],
          desc: "A sleek, modern web design studio landing page with advanced animations and smooth interactions. Built with vanilla HTML/CSS/JS, fully responsive across all devices, featuring scroll-triggered reveals and parallax effects.",
          github: "#",
          demo: "#",
        },
        {
          title: "Dark Workstation",
          category: "UI/UX Design",
          img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=700&q=80",
          tags: ["Figma", "React", "Tailwind"],
          desc: "A complete UI/UX redesign of a developer workstation dashboard with dark mode aesthetics. Includes real-time monitoring widgets, task management, and a modular component system built in React.",
          github: "#",
          demo: "#",
        },
        {
          title: "RGB Gaming Setup",
          category: "Portfolio",
          img: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=700&q=80",
          tags: ["CSS", "GSAP", "Three.js"],
          desc: "An immersive RGB gaming portfolio with 3D animations powered by Three.js and GSAP. Features dynamic lighting simulation, interactive hardware showcase, and smooth scene transitions.",
          github: "#",
          demo: "#",
        },
        {
          title: "Minimal Dev Setup",
          category: "Photography",
          img: "https://images.unsplash.com/photo-1524656855800-59465ebcec69?w=700&q=80",
          tags: ["Next.js", "Prisma", "PostgreSQL"],
          desc: "A full-stack developer portfolio with CMS integration using Next.js. Blog support, project management, and a clean admin panel powered by Prisma and PostgreSQL.",
          github: "#",
          demo: "#",
        },
        {
          title: "Smart Desk",
          category: "Web App",
          img: "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=700&q=80",
          tags: ["Vue.js", "Node.js", "MongoDB"],
          desc: "A smart productivity dashboard connecting desk peripherals via IoT. Real-time stats, ambient light control, and sound profiles built with Vue.js frontend and Node/MongoDB backend.",
          github: "#",
          demo: "#",
        },
        {
          title: "Wireless Workspace",
          category: "Branding",
          img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=700&q=80",
          tags: ["Branding", "Illustrator", "Motion"],
          desc: "Complete brand identity and motion design package for a wireless tech startup. Includes logo design, icon system, color palette, type specimen, and animated brand guidelines exported for web.",
          github: "#",
          demo: "#",
        },
      ];

      /* =============================================
       TYPED EFFECT
    ============================================= */
      (function initTyped() {
        let si = 0,
          ci = 0,
          del = false;
        const el = document.getElementById("typed");
        function tick() {
          const word = TYPED_STRINGS[si];
          el.textContent = del ? word.slice(0, ci--) : word.slice(0, ci++);
          if (!del && ci > word.length) {
            del = true;
            setTimeout(tick, 1200);
            return;
          }
          if (del && ci < 0) {
            del = false;
            si = (si + 1) % TYPED_STRINGS.length;
            ci = 0;
          }
          setTimeout(tick, del ? 60 : 120);
        }
        tick();
      })();

      /* =============================================
       BUILD PORTFOLIO GRID
    ============================================= */
      (function buildGrid() {
        const grid = document.getElementById("portfolioGrid");
        PROJECTS.forEach((p, i) => {
          const card = document.createElement("div");
          card.className = "project-card";
          card.innerHTML = `
          <img src="${p.img}" alt="${p.title}" loading="lazy"/>
          <div class="project-overlay">
            <h3>${p.title}</h3>
            <p>${p.category}</p>
            <div class="project-icons">
              <div class="icon-wrap">
                <a href="${p.github}" target="_blank" aria-label="GitHub" onclick="event.stopPropagation()">
                  <i class="fab fa-github"></i>
                </a>
                <span class="icon-tip">GitHub</span>
              </div>
              <div class="icon-wrap">
                <a href="${p.demo}" target="_blank" aria-label="Live Demo" onclick="event.stopPropagation()">
                  <i class="fas fa-external-link-alt"></i>
                </a>
                <span class="icon-tip">Live Demo</span>
              </div>
              <div class="icon-wrap">
                <button aria-label="View Details" onclick="event.stopPropagation();openModal(${i})">
                  <i class="fas fa-expand"></i>
                </button>
                <span class="icon-tip">View Details</span>
              </div>
            </div>
          </div>`;
          grid.appendChild(card);
        });
      })();

      /* =============================================
       MODAL
    ============================================= */
      function openModal(i) {
        const p = PROJECTS[i];
        document.getElementById("modalImg").src = p.img;
        document.getElementById("modalImg").alt = p.title;
        document.getElementById("modalTitle").innerHTML = p.title
          .split(" ")
          .map((w, j) =>
            j === p.title.split(" ").length - 1 ? `<span>${w}</span>` : w,
          )
          .join(" ");
        document.getElementById("modalDesc").textContent = p.desc;
        document.getElementById("modalGithub").href = p.github;
        document.getElementById("modalDemo").href = p.demo;
        document.getElementById("modalTags").innerHTML = p.tags
          .map((t) => `<span class="modal-tag">${t}</span>`)
          .join("");
        document.getElementById("modalOverlay").classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function closeModal() {
        document.getElementById("modalOverlay").classList.remove("open");
        document.body.style.overflow = "";
      }
      function closeModalOutside(e) {
        if (e.target === document.getElementById("modalOverlay")) closeModal();
      }
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
      });

      /* =============================================
       CONTACT
    ============================================= */
      function handleContact(e) {
        e.preventDefault();
        const btn = document.getElementById("contactBtn");
        btn.textContent = "Message Sent! ✓";
        btn.style.background = "#00c896";
        setTimeout(() => {
          btn.innerHTML =
            'Send Message <i class="fas fa-paper-plane" style="margin-left:.4rem"></i>';
          btn.style.background = "";
        }, 3000);
      }

      /* =============================================
       PARTICLES
    ============================================= */
      (function createParticles() {
        const container = document.getElementById("particles");
        for (let i = 0; i < 30; i++) {
          const p = document.createElement("div");
          p.className = "particle";
          const size = Math.random() * 4 + 2;
          p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random() * 100}%;bottom:${Math.random() * 20}%;animation-duration:${6 + Math.random() * 10}s;animation-delay:${Math.random() * 8}s;`;
          container.appendChild(p);
        }
      })();

      /* =============================================
       SCROLL REVEAL
    ============================================= */
      (function initReveal() {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) e.target.classList.add("visible");
            });
          },
          { threshold: 0.18, rootMargin: "0px 0px -60px 0px" },
        );
        document
          .querySelectorAll(
            ".reveal-top,.reveal-bottom,.reveal-left,.reveal-right,.stagger",
          )
          .forEach((el) => obs.observe(el));
      })();

      /* =============================================
       NAVBAR SCROLL + ACTIVE LINK
    ============================================= */
      (function initNav() {
        const nav = document.getElementById("navbar");
        const links = document.querySelectorAll(".nav-links a");
        const sections = document.querySelectorAll("section[id]");
        function onScroll() {
          nav.classList.toggle("scrolled", window.scrollY > 50);
          document
            .getElementById("backTop")
            .classList.toggle("show", window.scrollY > 400);
          let current = "";
          sections.forEach((s) => {
            if (window.scrollY >= s.offsetTop - 120) current = s.id;
          });
          links.forEach((a) =>
            a.classList.toggle(
              "active",
              a.getAttribute("href") === "#" + current,
            ),
          );
        }
        window.addEventListener("scroll", onScroll, { passive: true });
      })();

      /* =============================================
       HAMBURGER
    ============================================= */
      (function initHamburger() {
        const btn = document.getElementById("hamburger");
        const links = document.getElementById("navLinks");
        btn.addEventListener("click", () => {
          btn.classList.toggle("open");
          links.classList.toggle("open");
        });
        links.querySelectorAll("a").forEach((a) =>
          a.addEventListener("click", () => {
            btn.classList.remove("open");
            links.classList.remove("open");
          }),
        );
      })();
    