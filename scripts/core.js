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
        return `<a href=`+ this.urlref + `onclick="return clickableProject(this)" target="_blank">
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

var mainProjects=[
    new PortfolioProject(
        "TalesOfShadows",
        "https://youtu.be/_FWghbuVxX8",
        "img/projects/TalesOfShadows_Menu.png",
        "img/projects/TalesOfShadows_Menu.png",
        `Developed using C++ and Blueprints with Unreal Engine.
        I'm the only developer.`,
        "Personal Project"
    ),
    
    new PortfolioProject(
        "EscapeLab",
        "https://youtu.be/0mXcU1xA88U",
        "img/projects/escapelab_gameplay.png",
        "img/projects/escapeLab_Menu.png",
        `Developed using C# with Unity.
        I'm the only developer.`,
        "Personal Project"
    )
],

releasedProjects=[
    new PortfolioProject(
        "RPG 2D",
        "https://youtu.be/TdcC63ItCzk",
        "img/projects/rpg_2d_demo.png",
        "img/projects/rpg2D_Menu2.png",
        `Developed using HTML, CSS and Javascript.
        I'm the only developer.`,
        "Personal Project"
    ),

    new PortfolioProject(
        "BreakOut",
        "https://youtu.be/W5P5F5Ryh-8",
        "img/projects/breakout.png",
        "img/projects/BreakOut_Menu.png",
        `Developed using C# on Visual Studio.
        I'm the only developer.`,
        "Personal Project"
    ),

    new PortfolioProject(
        "PingPong",
        "https://youtu.be/iodkJTezckY",
        "img/projects/pingpong.png",
        "img/projects/Ping_Pong_Menu.png",
        `Developed using C# on Visual Studio.
        I'm the only developer.`,
        "Personal Project"
    )    
],

var otherProjects = [
    new PortfolioProject(
        
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