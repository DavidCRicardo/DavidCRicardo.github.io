// =============================================
// scripts/core.js - Clean external version
// =============================================

class PortfolioProject {
    constructor(title, desc, img, link, category, tags) {
        this.title = title;
        this.desc = desc;
        this.img = img;
        this.link = link;
        this.category = category;   // can be string or array
        this.tags = tags || [];
    }

    render() {
        return `
            <a href="${this.link}" target="_blank" class="project-card group block bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
                <div class="relative h-64 overflow-hidden">
                    <img src="${this.img}" class="project-img w-full h-full object-cover" alt="${this.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <div class="flex gap-2 mb-4 flex-wrap">
                            ${this.tags.map(tag => `<span class="text-[10px] px-3 py-1 bg-white/10 rounded-full">${tag}</span>`).join('')}
                        </div>
                        <h3 class="text-3xl font-bold tracking-tighter">${this.title}</h3>
                        <p class="text-zinc-400 mt-2 line-clamp-2">${this.desc}</p>
                    </div>
                </div>
            </a>
        `;
    }
};

// ==================== ALL YOUR PROJECTS ====================

const projects = [
    {
        title: "Dune: Awakening",
        desc: "Survive the desert",
        img: "img/projects/duneAwakening.jpg",
        link: "https://duneawakening.com/",
        category: ["unreal", "released"],
        tags: ["UE5", "UI", "AAA"]
    },
    {
        title: "FillMeUp!",
        desc: "Android hydration tracker — no ads, no tracking, fully offline",
        img: "img/projects/WaterReminder.png",
        link: "https://f-droid.org/en/packages/com.david.waterreminder",
        category: ["released", "others"],
        tags: ["Android", "F-Droid", "Solo", "2026"]
    },
    {
        title: "Speedy Runner",
        desc: "Fast-paced endless runner built in Unreal Engine",
        img: "img/projects/speedyRunner_thumbnail.png",
        link: "https://david-ricardo.itch.io/speedy-runner",
        category: "unreal",
        tags: ["UE5", "Solo", "2026"]
    },
    {
        title: "Raven Landscape",
        desc: "Stunning open-world environment with Blueprints",
        img: "img/projects/RL_thumbnail.png",
        link: "https://david-ricardo.itch.io/raven-landscape",
        category: "unreal",
        tags: ["UE5", "Solo", "2022"]
    },
    {
        title: "Inventory System C++",
        desc: "Robust C++ inventory system for Unreal Engine",
        img: "img/projects/IS_thumbnail.png",
        link: "https://youtu.be/oyq-Yn8kdJI",
        category: "unreal",
        tags: ["UE5", "Solo", "2022"]
    },
    {
        title: "Friendly Lords",
        desc: "Bannerlord mod � Diplomacy & vassal system",
        img: "img/projects/FriendlyLords.jpeg",
        link: "https://www.nexusmods.com/mountandblade2bannerlord/mods/3230",
        category: "mod",
        tags: ["C#", "Mod", "Solo", "2022"]
    },
    {
        title: "Kan Samurai Demo",
        desc: "Complete action-adventure demo (solo dev)",
        img: "img/projects/devlog.png",
        link: "https://david-ricardo.itch.io/kansamurai",
        category: "unreal",
        tags: ["UE5", "Solo", "2021"]
    },
    {
        title: "Asteroids Clone",
        desc: "Complete space shooter demo (solo dev)",
        img: "img/projects/Asteroids_Clone.png",
        link: "https://david-ricardo.itch.io/asteroids-clone",
        category: "unreal",
        tags: ["UE4", "Solo", "2019"]
    },
    {
        title: "Tales Of Shadows",
        desc: "Complete action-adventure demo (solo dev)",
        img: "img/projects/TalesOfShadows.png",
        link: "https://david-ricardo.itch.io/tales-of-shadows",
        category: "unreal",
        tags: ["UE4", "Solo", "2019"]
    },
    {
        title: "Two-Factor Authentication",
        desc: "Developed using C# and Xamarin on Visual Studio",
        img: "img/projects/PG1.png",
        link: "https://github.com/DavidCRicardo/TwoFactor-Authentication",
        category: "others",
        tags: ["Academic", "Solo", "2019"]
    },
    {
        title: "Launcher Prototype",
        desc: "Developed using C# on Visual Studio",
        img: "img/projects/launcher-demo2.png",
        link: "https://github.com/DavidCRicardo/Launcher_prototype",
        category: "others",
        tags: ["Others", "Solo", "2019"]
    },
    {
        title: "EscapeLab",
        desc: "Escape before the zombie finds you",
        img: "img/projects/escapelab_gameplay.png",
        link: "https://david-ricardo.itch.io/escapelab",
        category: "others",
        tags: ["Unity", "Solo", "2017"]
    },
    {
        title: "RPG 2D",
        desc: "HTML, CSS and Javascript",
        img: "img/projects/rpg_2d_demo.png",
        link: "https://youtu.be/TdcC63ItCzk",
        category: "others",
        tags: ["VisualStudio", "Solo", "2017"]
    },
    {
        title: "BreakOut",
        desc: "Destroy all the bricks",
        img: "img/projects/BreakOut_Menu.png",
        link: "https://youtu.be/W5P5F5Ryh-8",
        category: "others",
        tags: ["VisualStudio", "Solo", "2017"]
    },
    {
        title: "PingPong",
        desc: "Play with your family and friends",
        img: "img/projects/Ping_Pong_Menu.png",
        link: "https://youtu.be/iodkJTezckY",
        category: "others",
        tags: ["VisualStudio", "Solo", "2017"]
    }
];

// ==================== JOURNEY TIMELINE ====================
// Each entry is either a milestone (bullets only) or a role/release with
// one card (single project) or several (projects: [...], capped and
// collapsible so a role with a long project list doesn't turn into a wall
// of nested cards).
// `personal: true` marks solo/side work, which the "Personal projects"
// toggle above the timeline can filter out.

const timeline = [
    {
        icon: "💧",
        status: "current",
        date: "2026",
        title: "Software Developer",
        subtitle: "Solo",
        personal: true,
        card: {
            link: "https://f-droid.org/en/packages/com.david.waterreminder",
            img: "img/projects/WaterReminder.png",
            title: "FillMeUp!",
            subtitle: "Android hydration tracker",
            stage: "shipped",
            bullets: [
                "Log water intake with a single tap",
                "No ads, no tracking, fully offline",
                "Released on F-Droid"
            ]
        }
    },
    {
        icon: "🎮",
        status: "current",
        date: "2024 — PRESENT",
        title: "UI Programmer",
        subtitle: "Bacalhau Games",
        maxVisibleProjects: 2,
        projects: [
            {
                date: "2026 — PRESENT",
                img: "img/projects/duneAwakening.jpg",
                title: "To Be Announced",
                subtitle: "",
                stage: "wip",
                bullets: [
                    "Building UI systems in UE5",
                    "Project to be announced soon..."
                ]
            },
            {
                date: "2024 — 2026",
                link: "https://duneawakening.com/",
                img: "img/projects/duneAwakening.jpg",
                title: "Dune: Awakening",
                subtitle: "Open-World Survival MMO",
                stage: "shipped",
                bullets: [
                    "Designed core UI systems in UE5",
                    "Built responsive HUD, inventory, map & other interfaces",
                    "Added support for Dpad navigation"
                ]
            }
            /*,
            {
                date: "2023 — 2024",
                link: "",
                img: "",
                title: "GTR Revival",
                subtitle: "",
                stage: "unreleased",
                bullets: [
                    "Designed core UI systems in Unreal Engine",
                    "Built responsive HUD"
                ]
            }*/
        ]
    },
    {
        icon: "🌌",
        status: "past",
        date: "2023",
        title: "Joined Bacalhau Games 🐟",
        bullets: ["First steps in the game industry"]
    },
    {
        icon: "🌌",
        status: "past",
        date: "2017 — 2023",
        title: "Indie Developer & Modder",
        personal: true,
        bullets: [
            "Developed multiple Unreal Engine and other projects",
            "Popular Bannerlord mods on Nexus Mods",
            "Featured on itch.io"
        ]
    }
];

// Where a project card stands. A boolean couldn't tell "still building
// it" apart from "stopped, never released", so cards carry a `stage`:
//   "wip"        — still working on it (no prefix; its date says PRESENT)
//   "shipped"    — released
//   "unreleased" — worked on it, stopped, never released
// Unknown or missing stage falls back to "wip".
const PROJECT_STAGES = {
    wip:        { prefix: "",              tone: "text-neon",     bullet: "text-emerald-400" },
    shipped:    { prefix: "SHIPPED · ",    tone: "text-zinc-400", bullet: "text-zinc-400" },
    unreleased: { prefix: "", tone: "text-zinc-400",     bullet: "text-zinc-400" }
};

function renderTimelineCard(p) {
    const stage = PROJECT_STAGES[p.stage] || PROJECT_STAGES.wip;
    const tone = stage.tone;
    const bulletTone = stage.bullet;
    const tag = p.link ? "a" : "div";
    const openAttrs = p.link ? ` href="${p.link}" target="_blank" rel="noopener noreferrer"` : "";
    const hoverClass = p.link ? " block hover:border-emerald-400/40 transition-all" : "";

    return `
        <${tag}${openAttrs} class="mt-4 bg-zinc-900 border border-white/10 rounded-3xl p-10${hoverClass}">
            <div class="flex items-center gap-4">
                <img src="${p.img}" class="w-14 h-14 rounded-2xl object-cover" alt="${p.title}">
                <div>
                    ${p.date ? `<div class="text-xs font-mono ${tone} mb-1">${stage.prefix}${p.date}</div>` : ""}
                    <div class="font-semibold text-2xl">${p.title}</div>
                    <div class="text-sm ${tone}">${p.subtitle || ""}</div>
                </div>
            </div>
            <ul class="mt-8 space-y-4 text-zinc-300">
                ${p.bullets.map(b => `<li class="flex gap-3"><span class="${bulletTone}">•</span> ${b}</li>`).join('')}
            </ul>
        </${tag}>
    `;
}

function renderTimelineEntry(entry, idx) {
    const isRich = Boolean(entry.card || entry.projects);
    const isPast = entry.status === "past";

    const wrapperClass = isRich
        ? "relative flex flex-col md:flex-row gap-10 mb-14 md:gap-10"
        : "relative flex gap-10 mb-14";
    const iconClass = `w-14 h-14 bg-zinc-900 border-2 ${isPast ? "border-white/20" : "border-neon"} rounded-2xl ${isRich ? "" : "flex-shrink-0 "}flex items-center justify-center text-3xl z-10`;
    const dateClass = `text-xs font-mono ${isPast ? "text-zinc-400" : "text-neon"}`;
    const titleClass = `text-3xl font-semibold mt-2${isPast ? " text-zinc-400" : ""}`;

    let body = "";
    if (entry.card) {
        body = renderTimelineCard(entry.card);
    } else if (entry.projects) {
        const cap = entry.maxVisibleProjects || entry.projects.length;
        const visible = entry.projects.slice(0, cap);
        const hidden = entry.projects.slice(cap);

        body = visible.map(renderTimelineCard).join('');

        if (hidden.length) {
            const hiddenId = `timeline-extra-${idx}`;
            body += `
                <div id="${hiddenId}" class="hidden">${hidden.map(renderTimelineCard).join('')}</div>
                <button type="button" onclick="toggleTimelineProjects(${idx})" id="timeline-toggle-${idx}"
                    class="mt-4 text-sm text-neon hover:underline">
                    Show ${hidden.length} earlier project${hidden.length > 1 ? 's' : ''}
                </button>
            `;
        }
    }

    return `
        <div class="${wrapperClass}">
            <div class="${iconClass}">${entry.icon}</div>
            <div class="flex-1">
                <div class="${dateClass}">${entry.date}</div>
                <div class="${titleClass}">${entry.title}</div>
                ${entry.subtitle ? `<div class="text-zinc-400 text-sm">${entry.subtitle}</div>` : ""}
                ${entry.bullets ? `
                    <ul class="mt-4 text-zinc-300">
                        ${entry.bullets.map(b => `<li class="flex gap-3"><span>•</span> ${b}</li>`).join('')}
                    </ul>
                ` : ""}
                ${body}
            </div>
        </div>
    `;
}

// Uses its own `.timeline-toggle` class rather than `.filter-btn`:
// filterProjects() clears `.active` on every `.filter-btn`, which would
// reset this toggle whenever the Projects filters are used.
let timelineShowPersonal = true;

function toggleTimelinePersonal() {
    timelineShowPersonal = !timelineShowPersonal;
    renderTimeline();
}

function renderTimeline() {
    const container = document.getElementById('timeline-entries');
    const entries = timelineShowPersonal ? timeline : timeline.filter(entry => !entry.personal);
    container.innerHTML = entries.map(renderTimelineEntry).join('');

    const btn = document.getElementById('timeline-personal-toggle');
    if (btn) {
        btn.classList.toggle('active', timelineShowPersonal);
        btn.setAttribute('aria-checked', String(timelineShowPersonal));
    }
}

function toggleTimelineProjects(idx) {
    const extra = document.getElementById(`timeline-extra-${idx}`);
    const btn = document.getElementById(`timeline-toggle-${idx}`);
    const isHidden = extra.classList.contains('hidden');

    if (isHidden) {
        btn.dataset.label = btn.textContent;
        btn.textContent = 'Show less';
    } else {
        btn.textContent = btn.dataset.label;
    }
    extra.classList.toggle('hidden');
}

// Render function
function renderProjects(filteredProjects) {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = '';

    filteredProjects.forEach(p => {
        const cardHTML = `
            <a href="${p.link}" target="_blank" class="project-card group block bg-zinc-900 rounded-3xl overflow-hidden border border-white/10">
                <div class="relative h-64 overflow-hidden">
                    <img src="${p.img}" class="project-img w-full h-full object-cover" alt="${p.title}">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8">
                        <div class="flex gap-2 mb-4 flex-wrap">
                            ${p.tags.map(tag => `<span class="text-[10px] px-3 py-1 bg-white/10 rounded-full">${tag}</span>`).join('')}
                        </div>
                        <h3 class="text-3xl font-bold tracking-tighter">${p.title}</h3>
                        <p class="text-zinc-400 mt-2">${p.desc}</p>
                    </div>
                </div>
            </a>`;
        grid.innerHTML += cardHTML;
    });
}

// Filter function
function filterProjects(category) {
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));

    const activeBtn = Array.from(document.querySelectorAll('.filter-btn')).find(btn => {
        if (category === 'all') return btn.textContent === 'All';
        return btn.textContent.toLowerCase() === category;
    });

    if (activeBtn) activeBtn.classList.add('active');

    let filtered = projects;

    if (category !== 'all') {
        filtered = projects.filter(p => {
            if (Array.isArray(p.category)) {
                return p.category.includes(category);
            }
            return p.category === category;
        });
    }

    renderProjects(filtered);
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// Initialize everything
window.onload = () => {
    renderProjects(projects);
    renderTimeline();

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
};