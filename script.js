if(location.hash != "" && location.hash != "#" && location.hash != undefined && location.hash != null) {
    window.onload = function() {
        loadProject(location.hash.substr(1));
    }
} else {
    window.onload = function() {
        addCards();
    };
}

function addCards() {
    cards.forEach(function(item) {
        if(item[0] == "p") {
            project = projects[item[1]];
            document.getElementsByTagName("main")[0].innerHTML += '<a href="./#' + item[1] + '"><div class=\"project card\" style=\"background-image: url(\' ' + project.image + ' \');\">\r\n<div class=\"description\">\r\n<p>' + project.description + '<\/p>\r\n<\/div>\r\n<div class=\"title\">' + project.title + '<\/div>\r\n<\/div></a>'
        } else if(item[0] == "c") {
            document.getElementsByTagName("main")[0].innerHTML += '<div class=\"card\"><p>' + item[1] + '</p><\/div>';
        }
    });
}

const projects = {
    youareacat: {
        title: "You Are A Cat! Game",
        description: "In this videogame, you are a cat exploring a <b>world</b> of pixels!",
        image: "https://img.itch.zone/aW1nLzQxOTMwOTcucG5n/original/3EVOIn.png",
        contents: "<h2>Play the free game below!</h2><p>You can play in singleplayer <b>or multiplayer</b> and discover new <b>biomes</b>! How far can you explore?</p><iframe frameborder='0' src='https://itch.io/embed-upload/2687712?color=add8e6' allowfullscreen='' width='809' height='520'><a href='https://webcoder49.itch.io/youareacat-game'>Play You Are A  Cat ! on itch.io</a></iframe>",
        authors: "J, S, WebCoder49 and others",
        date: "Mon, 7 Sep 2020",
        categories: ["HTML5 Canvas", "JavaScript", "Videogames"],
        link: "https://webcoder49.itch.io/youareacat-game"
    }
}

const cards = [
    ["c", "<u>Videogames</u>"],
    ["p", "youareacat"]
];

let currentProject = "";
function loadProject(projectID) {
    currentProject = projectID;
    document.documentElement.classList.add("modal-open");
    project = projects[projectID];
    document.getElementById("project-title").innerHTML = project.title;
    document.getElementById("project-description").innerHTML = project.description;
    document.getElementById("project-image").src = project.image;
    if(project.link === undefined) {
        document.getElementById("project-contents").innerHTML = project.contents;
    } else {
        if(project.contents == undefined) {
            document.getElementById("project-contents").innerHTML = "<a href='" + project.link + "'><button style='font-size: 30px;''>▶ Direct Link 🌐</button></a>";
        } else {
            document.getElementById("project-contents").innerHTML = project.contents + "<a href='" + project.link + "'><button style='font-size: 30px;''>▶ Direct Link 🌐</button></a>";
        }
    }
    document.getElementById("project-authors").innerHTML = project.authors;
    document.getElementById("project-date").innerHTML = project.date;
    document.getElementById("project-categories").innerHTML = project.categories.join(", ");
}

function share(button) {
    if (navigator.share) {
        let project = projects[currentProject];
        if(project.link === undefined) {
            project.link = location.href;
        }
        project.description = document.getElementById("project-description").innerText;
        navigator.share(
          {
            title: project.title,
            text: project.description,
            url: project.link
          }
        );
        button.innerHTML = "Done! ✔";
        setTimeout(function() {
            button.innerHTML = "Share 💨";
        }, 3000);
    } else {
        button.innerHTML = "Share is not supported on your browser. 😢";
    }
}
function email(button) {
        let project = projects[currentProject];
        if(project.link === undefined) {
            project.link = location.href;
        }
        project.description = document.getElementById("project-description").innerText;
        
        window.open("mailto:?sub=" + encodeURIComponent(project.title) + "&body=" + encodeURIComponent(project.description + "\n" + project.link))

        button.innerHTML = "Done! ✔";
        setTimeout(function() {
            button.innerHTML = "Email 📧";
        }, 3000);
}