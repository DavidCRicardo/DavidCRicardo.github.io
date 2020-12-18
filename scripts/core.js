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

var mainProjects = [
    new PortfolioProject(

    )
];

var releasedProjects = [
    new PortfolioProject(
        "PingPong",
        "https://youtu.be/iodkJTezckY",
        "img/projects/pingpong.png",
        "img/projects/pingpong.png",
        `It is the first game-project done for academic purposes.
        Game for 2 players, WASD and arrows being the controls.
        Developed using C# on Visual Studio with a the focus in start creating a game.
        I'm the only developer.`,
        "Personal Project"
    )
];

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