if(location.hash != "" && location.hash != "#" && location.hash != undefined && location.hash != null) {
    window.onload = function() {
        loadProject(location.hash.substr(1));
        addCards();
    }
} else {
    window.onload = function() {
        addCards();
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
    replit: "Repl.it",
    itchio: "itch.io",
    wordpress: "WordPress",
    youtube: "YouTube"
}

function addCards() {
    cards.forEach(function(item) {
        if(item[0] == "p") {
            project = projects[item[1]];
            document.getElementsByTagName("main")[0].innerHTML += '<a href="#' + item[1] + '" onclick="loadProject(\'' + item[1] + '\');"><div class=\"project card\" title="View Details and Open ' + project.title + '" style=\"background-image: url(\' ' + project.image + ' \');\">\r\n<div class=\"description\">\r\n<p>' + project.description + '<\/p>\r\n<img src="' + logos[project.logo] + '" title="Made and Hosted on ' + logoNames[project.logo] + '" class="logo"/><\/div>\r\n<div class=\"title\">' + project.title + '<\/div>\r\n<\/div></a>'
        } else if(item[0] == "c") {
            document.getElementsByTagName("main")[0].innerHTML += '<div class=\"card\"><p>' + item[1] + '</p><\/div>';
        } else if(item[0] == "t") {
            document.getElementsByTagName("main")[0].innerHTML += '<div class=\"card title\"><p>' + item[1] + '</p><\/div>';
        }
    });
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
    blog: {
        title: "My Blog",
        description: "<b>Tutorials, Quick Tips</b> and <b>more!</b>",
        image: "images/blog.png",
        body: "<p>Hello! I am WebCoder49,  a <b>keen coder and web developer</b>! I created this website and blog, <a href='https://webcoder49.wordpress.com/'>webcoder49.wordpress.com</a>, to <b>teach you how to code the web</b> and learn codes which let you <b>be creative</b>! I will also use it to showcase my <b>projects</b>, so you can play and enjoy them, as well as being able to <b>see the code</b>!</p>",
        authors: "WebCoder49",
        date: "Mon, 7 Sep 2020",
        categories: ["Free", "HTML", "CSS", "JavaScript", "Tutorials"],
        link: "https://webcoder49.wordpress.com/",
        logo: "wordpress"
    },
    itchio: {
        title: "My itch.io Games",
        description: "<b>My videogames, in one place!</b>",
        image: "images/itchio.png",
        body: '<p>Hello! This is where you can <strong>play the games I have coded</strong>. If you want to <strong>learn how to code games like this</strong>, please go to <a href="http://webcoder49.wordpress.com" >my website</a> or&nbsp;<a href="https://www.youtube.com/channel/UCRGa9FlO3g-InDThc9Qk6Lw" >my YouTube channel</a> where you can find <strong>tutorials on web development.</strong> I put <strong>other coding projects</strong> on <a href="https://repl.it/@OG49" >repl.it</a> and <a href="https://github.com/WebCoder49" >GitHub</a>. Just follow the links to <strong>see more&nbsp;</strong>or <strong>play my games here, at <a href="https://webcoder49.itch.io/">webcoder49.itch.io</a>!</strong></p>',
        authors: "WebCoder49 and others",
        date: "Sun, 06 Sep 2020",
        categories: ["Free", "Videogames"],
        link: "https://webcoder49.itch.io/",
        logo: "itchio"
    },
    youtube: {
        title: "My YouTube channel",
        description: "<b>Videos, Game run-throughs</b> and <b>more!</b>",
        image: "images/youtube.png",
        body: '<h2><a href="https://www.youtube.com/channel/UCRGa9FlO3g-InDThc9Qk6Lw?sub_confirmation=1">Please like and subscribe!<img class="icon" src="images/icons/thumbsup.svg"/></a></h2><p><b>Please <a href=\"https:\/\/www.youtube.com\/channel\/UCRGa9FlO3g-InDThc9Qk6Lw\/\">start watching my videos by clicking here<\/a>, or read the description below...<\/b>\r\n\r\n<iframe width=\"424\" height=\"238\" src=\"https:\/\/www.youtube.com\/embed\/QTy_Pdzplys\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen><\/iframe>\r\n\r\n<p>Hello! This channel aims to teach you and show you how many different things can be made on the web, from computer games to websites and prime number programs.<\/p>\r\n\r\n<p>To see what I\'ve made using HTML, CSS and JavaScript (coding languages on the web), see my site below and enter the world of web development!<\/p>\r\n\r\n<p><a href=\"https:\/\/webcoder49.wordpress.com\">https:\/\/webcoder49.wordpress.com<\/a><\/p>\r\n\r\n<p>If you don\'t want to learn web development, you can have fun playing these games, but if you do want to learn it, why not learn it?<\/p>\r\n\r\n<p>The coding languages that make up the web are very useful as they can be used to create many different programs! Web development can be your hobby in the future, or even your job if you work hard enough! Once you\'ve started learning, you can release your creativity in code!<\/p>\r\n\r\n<p>What can you create?<br\/>\r\n<\/p>',
        authors: "WebCoder49",
        date: "Thu, 23 Jul 2020",
        categories: ["Free", "Videos", "Tutorials", "HTML", "CSS", "JavaScript"],
        link: "https://www.youtube.com/channel/UCRGa9FlO3g-InDThc9Qk6Lw",
        logo: "youtube"
    },
    github: {
        title: "GitHub",
        description: "View my open-source code.",
        image: "images/github.png",
        body: '<p>My GitHub account is <a href="https://github.com/webcoder49/">@WebCoder49</a>.</p>',
        authors: "WebCoder49",
        date: "Sat, 1 Aug 2020",
        categories: ["Free", "Source Code"],
        link: "https://github.com/webcoder49/",
        logo: "github"
    },
    replit: {
        title: "Repl.it",
        description: "View the code for some of my projects.",
        image: "images/replit.png",
        body: '<p>My Repl.it account is <a href="https://repl.it/@OG49/">@OG49</a>.</p>',
        authors: "WebCoder49",
        date: "Sat, 1 Aug 2020",
        categories: ["Free", "Source Code"],
        link: "https://repl.it/@OG49/",
        logo: "replit"
    },
    codepen: {
        title: "CodePen",
        description: "View the code for my small, front-end design projects.",
        image: "images/codepen.png",
        body: '<p>My CodePen account is <a href="https://codepen.io/WebCoder49/">@WebCoder49</a>.</p>',
        authors: "WebCoder49",
        date: "Sun, 16 Aug 2020",
        categories: ["Free", "Source Code"],
        link: "https://codepen.io/WebCoder49/",
        logo: "codepen"
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
    ["t", "<u><b><img src='images/logo.png' class='icon'/> WebCoder49 <img src='images/icons/coding.png' class='icon'/></b></u><br/> <br/>I'm a keen <b>programmer and web developer</b> who enjoys coding <b>videogames, websites, and maths-based projects</b>, as well as the occasional <b>tutorial</b>. <br/><img src='images/icons/website.png' class='icon'/>"],
    ["t", "<b>My other websites</b>"],
    ["p", "blog"],
    ["p", "itchio"],
    ["p", "youtube"],
    ["p", "github"],
    ["p", "replit"],
    ["p", "codepen"],
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
    document.documentElement.classList.add("modal-open");
    project = projects[projectID];
    document.getElementById("project-title").innerHTML = project.title;
    document.getElementById("project-description").innerHTML = project.description;
    document.getElementById("project-image").src = project.image;
    if(project.link === undefined) {
        document.getElementById("project-contents").innerHTML = project.body;
    } else {
        if(project.body == undefined) {
            document.getElementById("project-contents").innerHTML = "<a href='" + project.link + "'><button style='font-size: 30px;''>Direct Link <img class='icon' src='images/icons/link.svg'/></button></a>";
        } else {
            document.getElementById("project-contents").innerHTML = project.body + "<a href='" + project.link + "'><button style='font-size: 30px;''>Direct Link <img class='icon' src='images/icons/link.svg'/></button></a>";
        }
    }
    document.getElementById("project-authors").innerHTML = project.authors;
    document.getElementById("project-date").innerHTML = project.date;
    document.getElementById("project-categories").innerHTML = project.categories.join(", ");
    document.getElementById("project-logo-name").innerHTML = logoNames[project.logo];
    document.getElementById("project-logo").src = logos[project.logo];
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
        button.innerHTML = "Done! <img class='icon' src='images/icons/thumbsup.svg'/>";
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

        button.innerHTML = "Done! <img class='icon' src='images/icons/thumbsup.svg'/>";
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