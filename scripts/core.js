class PortfolioProject {
    constructor(_title, _urlref, _imgref, _imghoverref, _description, _type) {
        this.title = _title;
        this.urlref = _urlref;
        this.imgref = _imgref;
        this.imghoverref = _imghoverref;
        this.description = _description;
        this.type = _type;
    }

    SerializeAsMain() {
        return "<a href='" + this.urlref + "' onclick='return clickableProject(this)' target='_blank'> \
        <div class='pBorder'> \
            <article style='background-image:url(" + this.imgref + ")'> \
                <div class='description'> \
                    <h4>" + this.title + "</h4> \
                    <div><p>" + this.description + "</p></div> \
                    <p class='team'>" + this.type + "</p> \
                </div> \
                <div style='background-image:url(" + this.imghoverref + ")' class='hov'></div> \
            </article> \
        </div> \
    </a>";
    }

    SerializeAsRelease() {
        return `<a href=` + this.urlref + `onclick="return clickableProject(this)" target="_blank">
        <div class="pBorder">
            <article style="background-image:url(` + this.imgref + `)">
                <div class="description">
                    <h4>` + this.title + `</h4>
                    <div>
                        <p>` + this.description + `</p>
                    </div>
                    <p class="team">` + this.type + `</p>
                </div>
                <div style="background-image:url(` + this.imghoverref + `)" class="hov"></div>
            </article>
        </div>
    </a>`;
    }
};

var mainProjects = [
    new PortfolioProject(
        "Friendly Lords",
        "https://www.nexusmods.com/mountandblade2bannerlord/mods/3230",
        "img/projects/FriendlyLords.jpeg",
        "img/projects/FriendlyLords2.jpeg",
        `Developed using C# with Visual Studio. 
Bannerlord Mod.`,
        "Academic Project (2021)"
    ),
    new PortfolioProject(
        "Asteroids_Clone",
        "https://david-ricardo.itch.io/asteroids-clone",
        "img/projects/Asteroids_Clone.png",
        "img/projects/Asteroids_Clone_2.png",
        `Developed using C++ with Unreal Engine.
         I'm the only developer.`,
        "Personal Project (2019)"
    ),
    new PortfolioProject(
        "Two-Factor Authentication",
        "https://github.com/DavidCRicardo/TwoFactor-Authentication",
        "img/projects/PG1.png",
        "img/projects/PG2.png",
        `Developed using C# and Xamarin on Visual Studio.
        I'm the only developer.`,
        "Academic Project (2019)"
    )
],

releasedProjects = [       
    
],

otherProjects = [
    new PortfolioProject(
        "Kan Samurai Demo",
        "https://david-ricardo.itch.io/kansamurai",
        "img/projects/devlog.png",
        "img/projects/devlog2.png",
        `Developed using C++ and Blueprints with Unreal Engine.
        I'm the only developer.`,
        "Personal Project (2021)"
    ),
    new PortfolioProject(
        "TalesOfShadows",
        "https://david-ricardo.itch.io/tales-of-shadows",
        "img/projects/TalesOfShadows.png",
        "img/projects/TalesOfShadows_2.png",
        `Developed using C++ and Blueprints with Unreal Engine.
            I'm the only developer.`,
        "Personal Project (2019)"
    ),
    new PortfolioProject(
        "Launcher Prototype",
        "https://github.com/DavidCRicardo/Launcher_prototype",
        "img/projects/launcher-demo1.png",
        "img/projects/launcher-demo2.png",
        `Developed using C# on Visual Studio.
        I'm the only developer.`,
        "Personal Project (2019)"
    ),
    new PortfolioProject(
        "EscapeLab",
        "https://david-ricardo.itch.io/escapelab",
        "img/projects/escapelab_gameplay.png",
        "img/projects/escapeLab_Menu.png",
        `Developed using C# with Unity.
    I'm the only developer.`,
        "Personal Project (2017)"
    ),
   
    new PortfolioProject(
        "RPG 2D",
        "https://youtu.be/TdcC63ItCzk",
        "img/projects/rpg_2d_demo.png",
        "img/projects/rpg2D_Menu2.png",
        `Developed using HTML, CSS and Javascript.
        I'm the only developer.`,
        "Personal Project (2017)"
    ),

    new PortfolioProject(
        "BreakOut",
        "https://youtu.be/W5P5F5Ryh-8",
        "img/projects/breakout_1.png",
        "img/projects/BreakOut_Menu.png",
        `Developed using C# on Visual Studio.
        I'm the only developer.`,
        "Academic Project (2017)"
    ),

    new PortfolioProject(
        "PingPong",
        "https://youtu.be/iodkJTezckY",
        "img/projects/pingpong_1.png",
        "img/projects/Ping_Pong_Menu.png",
        `Developed using C# on Visual Studio.
        I'm the only developer.`,
        "Personal Project (2017)"
    )
];


function insertMainProjects() {
    mainProjects.forEach(project => {
        var portfolioSection = document.getElementById("portfolioProjects");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

function insertReleasedProjects() {
    releasedProjects.forEach(project => {
        var portfolioSection = document.getElementById("releasedProjectsSection");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

function insertOtherProjects() {
    otherProjects.forEach(project => {
        var portfolioSection = document.getElementById("otherProjectsSection");
        portfolioSection.innerHTML += project.SerializeAsMain();
    });
}

window.addEventListener("load", window => {
    insertMainProjects();
    insertReleasedProjects();
    insertOtherProjects();
}, false);