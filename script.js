if(location.hash != "" && location.hash != "#" && location.hash != undefined && location.hash != null) {
    window.onload = function() {
        if(location.hash.substr(1) in projects) {
            loadProject(location.hash.substr(1));
        } else {
            document.querySelector("main").innerHTML += "<div class='card can-be-closed'><span class='close' onclick='this.parentElement.classList.toggle(\"closed\");'>×</span><p><em>The project in the link could not be found. It may have been renamed or deleted.</em></p>";
        }
        addCards();
        window.onload = function() {};
    }
} else {
    window.onload = function() {
        addCards();
        window.onload = function() {};
    };
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
        } else if(item[0] == "c") {
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card\"><p>${item[1]}</p><\/div>`;
        } else if(item[0] == "t") {
            document.getElementsByTagName("main")[0].innerHTML += `<div class=\"card title\"><p>${item[1]}</p><\/div>`;
        }
    }
}

const projects = {
    youareacat: {
        title: "You Are A Cat! Game",
        description: "In this videogame, you are a cat exploring a <b>world</b> of pixels!",
        image: "https://img.itch.zone/aW1nLzQxOTMwOTcucG5n/original/3EVOIn.png",
        body: "<h2>Play the free game below!</h2><p>You can play in singleplayer <b>or multiplayer</b> and discover new <b>biomes</b>! How far can you explore?</p><iframe frameborder='0' src='https://itch.io/embed-upload/2687712?color=add8e6' allowfullscreen='' width='809' height='520'><a href='https://webcoder49.itch.io/youareacat-game'>Play You Are A  Cat ! on itch.io</a></iframe>",
        authors: "J, S, WebCoder49 and others",
        date: "Mon, 7 Sep 2020",
        categories: ["HTML5 Canvas", "JavaScript", "Videogames", "Free"],
        link: "https://webcoder49.itch.io/youareacat-game",
        logo: "itchio"
    },
    guessthehexcolour: {
        title: "Guess the HEX colour!",
        description: "A python game which tests your knowledge of HEX colours...",
        image: "images/guessthehexcolor.png",
        body: '<h2><u>How to play:</u></h2><ol><li>Open the game <a href="https://repl.it/@OG49/Colours" target="_blank">here</a> and click <b>Run</b>.</li><li>Type how many colours you want to guess in the Python console.</li><li>Search the internet for a "HEX colour picker" and try to make it match the colour displayed in the console.</li><li>Type the HEX code (look on the colour picker - the code is something like <b>#8f4d90</b>) into the console. Don\'t type the "#"; it is already there.</li><li>Once you have guessed all the colours, look at the console for your score! <b>How well did you do?</b></li><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/Colours?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p></ol><h2>What are HEX Codes?</h2><p>HEX Codes are colour codes used in <b>web development</b> to specify specific colours in CSS for elements.</p>',
        authors: "WebCoder49",
        date: "Wed, 24 Jun 2020",
        categories: ["Free", "Videogame", "Python"],
        link: "https://repl.it/@OG49/Colours",
        logo: "replit"
    },
    turingtape: {
        title: "TuringTape",
        description: "A <b>Turing Machine</b> simulation...",
        image: "images/turingtape.png",
        body: '<p>This project is a tribute to the computer scientist <b>Alan Turing</b>, and is a simulation of a machine in one of his thought experiments. When you are writing the algorithm, hover over a field to see what it is.</p><h2>The Code and The Project</h2><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/TuringTape?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p><p><iframe height="600px" width="100%" frameborder="0" src="https://TuringTape.og49.repl.co">Oh. Iframes are not supported.</iframe><a href="https://TuringTape.og49.repl.co" target="_blank">Open project in a new tab</a></p>',
        authors: "WebCoder49",
        date: "Fri, 26 Jul 2020",
        categories: ["Free", "Videogame", "Python"],
        link: "https://TuringTape.og49.repl.co",
        logo: "replit"
    },
    namethecolourproject: {
        title: "Name the Colour!",
        description: "A <b>PHP project where you can name colours yourself</b> and <b>put them on the server!</b>",
        image: "images/namethecolourproject.png",
        body: '<p>Use the colour picker to find your colour, then choose a <b>creative name</b> and submit the form! You can search the database, too.</p><p><iframe height="600px" width="100%" frameborder="0" src="https://name-the-colour-project.og49.repl.co/">Oops. Iframes are not supported.</iframe></p><p>This uses PHP, a server-side programming language that edits a text file on the server to change the database.</p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/Name-the-Colour-Project?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p><p><i>Font from Google Fonts</i></p>',
        authors: "WebCoder49",
        date: "Mon, 29 Jul 2020",
        categories: ["Free", "Database", "PHP"],
        link: "https://name-the-colour-project.og49.repl.co/",
        logo: "replit"
    },
    unicodechargenerator: {
        title: "Unicode Character Generator",
        description: "<b>Every character on a computer has a code</b>, which you can find out!",
        image: "images/unicodechargenerator.png",
        body: '<p><iframe height="600" width="100%" frameborder="0" src="https://unicode-character-generator.og49.repl.co/">Oops. Iframes are not supported.</iframe></p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/Unicode-Character-Generator?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Sat, 06 Jul 2020",
        categories: ["Free", "JavaScript"],
        link: "https://unicode-character-generator.og49.repl.co/",
        logo: "replit"
    },
    hashtagfinder: {
        title: "Hashtag Finder",
        description: "<b>Search lots of social media platforms for a hashtag in just two clicks!</b>",
        image: "images/hashtagfinder.png",
        body: '<p><iframe height="200" width="100%" frameborder="0" src="https://hashtagfinder.og49.repl.co/">Oops. Iframes are not supported.</iframe></p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/HashtagFinder?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Fri, 05 Jul 2020",
        categories: ["Free", "JavaScript"],
        link: "https://unicode-character-generator.og49.repl.co/",
        logo: "replit"
    },
    safekey: {
        title: "SafeKey File Encrypter",
        description: "<b>Encrypt files with a key only you know!</b>",
        image: "images/safekey.png",
        body: '<p><b>Please note: </b><i>I cannot ensure that this is perfectly secure as your browser would have access to the key while you are using this.</i></p><p><iframe height="600" width="100%" frameborder="0" src="https://safekey-file-encoder.og49.repl.co/">Oops. Iframes are not supported.</iframe></p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/SafeKey-File-Encoder?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Thu, 22 Oct 2020",
        categories: ["Free", "JavaScript", "Base64"],
        link: "https://SafeKey-File-Encoder.og49.repl.co/",
        logo: "replit"
    },
    battlepythonconsole: {
        title: "Battle! - Python Console Game",
        description: "<b>Choose the characteristics of two characters, and make them battle in the Python console!</b>",
        image: "images/battlepythonconsole.png",
        body: '<p><iframe height="400px" width="100%" src="https://repl.it/@OG49/Battle-Python-Console-Game?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Fri, 05 Jul 2020",
        categories: ["Free", "Python", "Videogame"],
        link: "https://SafeKey-File-Encoder.og49.repl.co/",
        logo: "replit"
    },
    cssonlygame: {
        title: "Bubbles - the CSS-only game",
        description: "<b>A game made with only pure HTML and CSS...</b>",
        image: "images/cssonlygame.png",
        body: '<p>CSS is so powerful; you can even make a game with it! That\'s what I did...</p><p>Press Play to play the game in the frame below, and try to pop (click), as many bubbles as you can in the <b>10-second time limit!</b></p><h2><a href="https://CSS-Only-Game.og49.repl.co" target="gameframe">Play</a></h2><p><iframe height="600" width="100%" name="gameframe" style="background-color: white; border: 1px solid blue;">Oops. Iframes are not supported.</iframe></p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/CSS-Only-Game?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Wed, 11 Nov 2020",
        categories: ["Free", "CSS", "Videogame"],
        link: "https://CSS-Only-Game.og49.repl.co/",
        logo: "replit"
    },
    phrasetogradient: {
        title: "Phrase To Gradient",
        description: "<b>An AI which converts phrases, words and numbers you type to a gradient - Each phrase has its unique gradient!</b>",
        image: "images/phrasetogradient.png",
        body: '<p><b>Warning: </b>If you do not want to see quickly changing colours, please do not type in the box.</p><p><iframe height="600" width="100%" src="https://phrase-to-gradient-ai.og49.repl.co/" style="background-color: black; border: 1px solid black;">Oops. Iframes are not supported.</iframe></p><p><iframe height="400px" width="100%" src="https://repl.it/@OG49/Phrase-To-Gradient-AI?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe></p>',
        authors: "WebCoder49",
        date: "Fri, 05 Jul 2020",
        categories: ["Free", "JavaScript", "Videogame"],
        link: "https://phrase-to-gradient-ai.og49.repl.co/",
        logo: "replit"
    },
}

const cards = [
    ["t", "<b>Videogames and other games</b>"],
    ["p", "youareacat"],
    ["p", "guessthehexcolour"],
    ["p", "battlepythonconsole"],
    ["p", "cssonlygame"],
    ["t", "<b>Maths and Science Projects</b>"],
    ["p", "turingtape"],
    ["p", "unicodechargenerator"],
    ["p", "safekey"],
    ["p", "phrasetogradient"],
    ["t", "<b>Collaborative Projects</b>"],
    ["p", "namethecolourproject"],
    ["t", "<b>Other Projects</b>"],
    ["p", "hashtagfinder"],
    ["t", "<img class='icon' src='images/icons/coding.png'/><img class='icon' src='images/icons/joystick.png'/><img class='icon' src='images/icons/website.png'/><img class='icon' src='images/icons/wordpress.png'/><img class='icon' src='images/icons/youtube.svg'/><img class='icon' src='images/icons/github.png'/><img class='icon' src='images/icons/rss.svg'/><img class='icon' src='images/icons/codepen.png'/>"],
    ["c", "<img class='icon' src='images/icons/rss.svg'/><a href='feed.xml'>View the RSS feed here!</a>"],
    ["c", 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>, and fonts by <a href="https://fonts.google.com">Google Fonts</a>.<br/><br/>Hosted on <a href="pages.github.com">GitHub Pages</a>. <img class="icon" src="images/icons/github.png"/>']
];

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
        }

        if(projects[project].title.toUpperCase().includes(query)) {
            projects_by_relevance[project] += 50; // 50 for exact title match
        }
        if(projects[project].description.toUpperCase().includes(query)) {
            projects_by_relevance[project] += 10; // 10 for exact description match
        }
        if(projects[project].body.toUpperCase().includes(query)) {
            projects_by_relevance[project] += 5; // 5 for exact body match
        }

        for(let i = 0; i < words.length; i++) {
            word = words[i];

            if(word != "") {
                for(project in projects_by_relevance) {
                    if(projects[project].title.toUpperCase().includes(word)) {
                        projects_by_relevance[project] += 25; // 25 for title match
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