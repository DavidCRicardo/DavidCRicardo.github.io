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
        title: "Speedy Runner",
        desc: "Fast-paced endless runner built in Unreal Engine",
        img: "img/projects/speedyRunner_thumbnail.png",
        link: "https://david-ricardo.itch.io/speedy-runner",
        category: "unreal",
        tags: ["UE5", "Personal"]
    },
    {
        title: "Raven Landscape",
        desc: "Stunning open-world environment with Blueprints",
        img: "img/projects/RL_thumbnail.png",
        link: "https://david-ricardo.itch.io/raven-landscape",
        category: "unreal",
        tags: ["UE5", "Personal"]
    },
    {
        title: "Inventory System C++",
        desc: "Robust C++ inventory system for Unreal Engine",
        img: "img/projects/IS_thumbnail.png",
        link: "https://youtu.be/oyq-Yn8kdJI",
        category: "unreal",
        tags: ["C++", "UE5"]
    },
    {
        title: "Friendly Lords",
        desc: "Bannerlord mod — Diplomacy & vassal system",
        img: "img/projects/FriendlyLords.jpeg",
        link: "https://www.nexusmods.com/mountandblade2bannerlord/mods/3230",
        category: "mod",
        tags: ["C#", "Mod"]
    },
    {
        title: "Kan Samurai Demo",
        desc: "Complete action-adventure demo (solo dev)",
        img: "img/projects/devlog.png",
        link: "https://david-ricardo.itch.io/kansamurai",
        category: "unreal",
        tags: ["UE5", "Solo"]
    },
    {
        title: "Asteroids Clone",
        desc: "Complete space shooter demo (solo dev)",
        img: "img/projects/Asteroids_Clone.png",
        link: "https://david-ricardo.itch.io/asteroids-clone",
        category: "unreal",
        tags: ["UE4", "2019"]
    },
    {
        title: "Tales Of Shadows",
        desc: "Complete action-adventure demo (solo dev)",
        img: "img/projects/TalesOfShadows.png",
        link: "https://david-ricardo.itch.io/tales-of-shadows",
        category: "unreal",
        tags: ["UE4", "2019"]
    },
    {
        title: "Two-Factor Authentication",
        desc: "Developed using C# and Xamarin on Visual Studio",
        img: "img/projects/PG1.png",
        link: "https://github.com/DavidCRicardo/TwoFactor-Authentication",
        category: "others",
        tags: ["Academic", "2019"]
    },
    {
        title: "Launcher Prototype",
        desc: "Developed using C# on Visual Studio",
        img: "img/projects/launcher-demo2.png",
        link: "https://github.com/DavidCRicardo/Launcher_prototype",
        category: "others",
        tags: ["Others", "2019"]
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