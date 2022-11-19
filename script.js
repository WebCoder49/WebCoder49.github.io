var projects = {};
var cards = [["n", "<em>The projects or page structure could not be loaded using AJAX. It might work if you reload the page.</em>"]];

const emojis = "👨‍💻,👩‍💻,🎮,💻,🚀,🐛,⚡,💡,🚀,💻,💧,🐱,⭐,🌟,✨,🐧,☕,🌈".split(",");
const random_snippets = [
{
    lang: "Python",
    body: "# You can load a JSON file as a dictionary\nimport json\nprojects = json.load(open('data.json'))"
},
{
    lang: "Python",
    body: "# The built-in Python eval and exec functions can be used to interpret custom expressions and source code from strings.\n# Use them creatively, but wisely\nresult = eval(\"2 + 2\") # returns 4\nexec(custom_code) # runs source code stored in custom_code variable"
},
];

/* Load data through AJAX */
function loadData() {

    // Easter Eggs
    addEmojis(document.querySelector("#gradient-text"));
    
    $(document).ajaxError(function(exc) {
        projects = {};
        onDataLoaded();
    });
    $.get("data/projects.json", function(data, status) {
        if(status == "success") {
            projects = data;
            $.get("data/page.json", function(data, status) {
                if(status == "success") {
                    cards = data;
                    onDataLoaded();
                }
            });
        }
    });
}
window.onload = loadData;

function addEmojis(element) {
    element.setAttribute("data-emoji-before", emojis[Math.floor(Math.random() * emojis.length)]); // emoji-before
    element.setAttribute("data-emoji-after", emojis[Math.floor(Math.random() * emojis.length)]); // emoji-before
}

function onDataLoaded() {
    if(location.hash != "" && location.hash != "#" && location.hash != undefined && location.hash != null) {
        if(location.hash.substring(1) in projects) {
            loadProject(location.hash.substring(1));
        } else {
            document.querySelector("main").innerHTML += "<div class='card can-be-closed'><span class='close' onclick='this.parentElement.classList.toggle(\"closed\");'>×</span><p><em>The project in the link could not be found. It may have been renamed or deleted.</em></p>";
        }
        addCards();
    } else {
        addCards();
    }
}

const logos = {
    github: "images/icons/github.png",
    web: "images/icons/website.png",
    rss: "images/icons/rss.svg",
    codepen: "images/icons/codepen.png",
    replit: "images/icons/coding.png",
    itchio: "images/icons/joystick.png",
    wordpress: "images/icons/wordpress.png",
    youtube: "images/icons/youtube.svg"
}
const logoNames = {
    github: "GitHub",
    web: "the WorldWide Web",
    rss: "an RSS feed",
    codepen: "CodePen",
    replit: "Replit",
    itchio: "itch.io",
    wordpress: "WordPress",
    youtube: "YouTube"
}

function addCards() {
    for(let i = 0; i < cards.length; i++) {
        let item = cards[i];
        if(item[0] == "p") {
            project = projects[item[1]];
            document.getElementsByTagName("main")[0].innerHTML += `<a href="#${item[1]}" onclick="loadProject(\'${item[1]}\');"><div class=\"project card\" title="View Details and Open ${project.title}" style=\"background-image: url(\' ${project.image} \');\">\r\n<div class=\"title\">${project.title}<\/div>\r\n<div class=\"description\">\r\n<p>${project.description}<\/p>\r\n<img src="${logos[project.logo]}" title="Made and Hosted on ${logoNames[project.logo]}" class="logo"/><\/div>\r\n<\/div></a>`;
        } else if(item[0] == "category") {
            let html = "";
            for(name in projects) {
                project = projects[name];
                // Add project
                if(item[1] == "*" || project.categories.includes(item[1])) {
                    html += `<a href="#${name}" onclick="loadProject(\'${name}\');"><div class=\"project card\" title="View Details and Open ${project.title}" style=\"background-image: url(\' ${project.image} \');\">\r\n<div class=\"title\">${project.title}<\/div>\r\n<div class=\"description\">\r\n<p>${project.description}<\/p>\r\n<img src="${logos[project.logo]}" title="Made and Hosted on ${logoNames[project.logo]}" class="logo"/><\/div>\r\n<\/div></a>`;
                }
            }
            console.log("Category: " + html);
            document.getElementsByTagName("main")[0].innerHTML += html;
        } else if(item[0] == "c") {
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card\"><p>${item[1]}</p><\/div>`;
        } else if(item[0] == "t") {
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card title\"><p>${item[1]}</p><\/div>`;
        } else if(item[0] == "n") { // note
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card can-be-closed\"><span class='close' onclick='this.parentElement.classList.toggle(\"closed\");'>×</span><p><em>${item[1]}</em></p><\/div>`;
        } else if(item[0] == "s") { // snippet
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card snippet\"><pre class="language-${item[1]}" data-lang="${item[1]}" data-title="${item[2]}"><code>${item[3].replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;")}</code></p><\/div>`;
        } else if(item[0] == "random-s") { // Random Snippet
            let snippet = random_snippets[Math.floor(Math.random() * random_snippets.length)]
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card snippet\"><pre class="language-${snippet.lang}" data-lang="${snippet.lang}" data-title="A random snippet of ${snippet.lang} ${emojis[Math.floor(Math.random() * emojis.length)]}"><code>${snippet.body.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;")}</code></p><\/div>`;
        }
    }

    // Syntax highlight
    let preCodes = document.querySelectorAll("pre code");
    for(let i = 0; i < preCodes.length; i++) {
        Prism.highlightElement(preCodes[i]);
    }
}

let currentProject = "";
function loadProject(projectID) {
    currentProject = projectID;
    document.getElementById("modal-overlay").classList.add("modal-open");
    project = projects[projectID];
    document.getElementById("project-title").innerHTML = project.title;
    document.getElementById("project-description").innerHTML = project.description;
    document.getElementById("project-image").src = project.image;
    if(project.link === undefined) {
        document.getElementById("project-contents").innerHTML = project.body;
    } else {
        if(project.body == undefined) {
            document.getElementById("project-contents").innerHTML = "<a href='" + project.link + "'><button style='font-size: 30px; text-align: center; width: 100%;''>Launch Project <img class='icon' src='images/icons/link.svg'/></button></a>";
        } else {
            document.getElementById("project-contents").innerHTML = "<a href='" + project.link + "' target='project-tab'><button style='font-size: 30px; text-align: center; width: 100%;''>Launch Project <img class='icon' src='images/icons/link.svg'/></button></a>" + project.body;
        }
    }
    document.getElementById("project-authors").innerHTML = project.authors;
    document.getElementById("project-date").innerHTML = project.date;
    document.getElementById("project-categories").innerHTML = project.categories.join(", ");
    document.getElementById("project-logo-name").innerHTML = logoNames[project.logo];
    document.getElementById("project-logo").src = logos[project.logo];
}
function closeModal(modal) {
    let scroll_pos = document.documentElement.scrollTop;
    console.log(scroll_pos);

    modal.classList.remove('modal-open');
    document.location.hash = '#';

    document.documentElement.scrollTop = scroll_pos;
}

function share(button) {
    if (navigator.share) {
        let project = projects[currentProject];
        project.description = document.getElementById("project-description").innerText;
        navigator.share(
          {
            title: project.title,
            text: project.description,
            url: location.href
          }
        );
        button.innerHTML = "Done! <img class='icon' src='images/icons/thumbsup.png'/>";
        setTimeout(function() {
            button.innerHTML = "Share <img class='icon' src='images/icons/share.png'/>";
        }, 3000);
    } else {
        button.innerHTML = "Share is not supported on your browser. 😢";
    }
}
function email(button) {
        let project = projects[currentProject];
        project.description = document.getElementById("project-description").innerText;
        
        window.open("mailto:?subject=" + encodeURIComponent(project.title) + "&body=" + encodeURIComponent(project.description + "\n\n Link: " + location.href))

        button.innerHTML = "Done! <img class='icon' src='images/icons/thumbsup.png'/>";
        setTimeout(function() {
            button.innerHTML = "Email <img class='icon' src='images/icons/email.svg'/>";
        }, 3000);
}

/* Use console to auto-generate RSS feed */
function rss() {
    feed = "<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\r\n<rss version=\"2.0\">\r\n\r\n<channel>\n<title>WebCoder49\'s Projects<\/title>\r\n  <link>https:\/\/www.webcoder49.gtihub.io<\/link>\r\n  <description>Websites, Videogames, Tutorials and more!<\/description><image>\r\n    <url>https:\/\/webcoder49.wordpress.com\/favicon.ico<\/url>\r\n    <title>WebCoder49<\/title>\r\n    <link>https:\/\/webcoder49.github.io\/<\/link>\r\n  <\/image>";
    for(projectID in projects) {
        p = projects[projectID]
        feed += "<item>\r\n    <title>" + p.title + "<\/title>\r\n    <link>https://webcoder49.github.io/#" + projectID + "<\/link>\r\n    <description>" + p.description + "<\/description>\r\n<pubDate>" + p.date + "<\/pubDate>\r\n<\/item>";
    }
    feed += "<\/channel>\r\n\r\n<\/rss>";
    return feed;
}
function r() {
    document.write("<h1>RSS Feed Code</h1><h2>(Please reload if you are not a developer.)</h2><pre><code id='code'></code></pre>");
    document.getElementById("code").innerText = rss();
}

/* Search projects */
function search(query, output) {
    if(query != "" && query != " ") {

        output.innerHTML = `<div class="title card"><p><span id="search-result-number">Loading</span> search result(s) for '${query}'</p></div>`;
        query = query.toUpperCase(); // Case insensitive
        let words = query.split(" ");

        /* Get project relevances */
        let projects_by_relevance = {};
        for(project in projects) {
            projects_by_relevance[project] = 0;

            if(projects[project].title.toUpperCase().includes(query)) {
                projects_by_relevance[project] += 50; // 50 for exact title match
            }
            for(let i = 0; i < projects[project].categories.length; i++) {
                if(projects[project].categories[i].toUpperCase() == query) {
                    projects_by_relevance[project] += 50; // 50 for exact c match
                }
            }
            if(projects[project].description.toUpperCase().includes(query)) {
                projects_by_relevance[project] += 10; // 10 for exact description match
            }
            if(projects[project].body.toUpperCase().includes(query)) {
                projects_by_relevance[project] += 5; // 5 for exact body match
            }
        }

        for(let i = 0; i < words.length; i++) {
            word = words[i];

            if(word != "") {
                for(project in projects_by_relevance) {
                    if(projects[project].title.toUpperCase().includes(word)) {
                        projects_by_relevance[project] += 25; // 25 for title match
                    }
                    for(let i = 0; i < projects[project].categories.length; i++) {
                        if(projects[project].categories[i].toUpperCase() == query) {
                            projects_by_relevance[project] += 25; // 25 for exact c match
                        }
                    }
                    if(projects[project].description.toUpperCase().includes(word)) {
                        projects_by_relevance[project] += 4; // 4 for description match
                    }
                    if(projects[project].body.toUpperCase().includes(word)) {
                        projects_by_relevance[project] += 1; // 1 for body match
                    }
                }
            }
        }
        console.log(projects_by_relevance);
        search_results = [];
        for(project in projects_by_relevance) {
            search_results.push({
                relevance: projects_by_relevance[project],
                project: project
            });
        }
        search_results.sort(function(a, b) {
            // Descending order by relevance
            b.relevance - a.relevance;
        });

        let n_results = 0;
        // Print results
        for(let i = 0; i < search_results.length; i++) {
            let result = search_results[i];
            if(result.relevance > 0) {
                n_results++;
                let project = projects[result.project];
                output.innerHTML += `<a href="#${result.project}" onclick="loadProject(\'${result.project}\');"><div class=\"project card\" title="View Details and Open ${project.title}" style=\"background-image: url(\' ${project.image} \');\">\r\n<div class=\"title\">${project.title}<\/div>\r\n<div class=\"description\">\r\n<p>${project.description}<\/p>\r\n<img src="${logos[project.logo]}" title="Made and Hosted on ${logoNames[project.logo]}" class="logo"/><\/div>\r\n<\/div></a>`;
            }
        }
        document.getElementById("search-result-number").innerHTML = n_results;
    } else {
        output.innerHTML = "";
    }
}
