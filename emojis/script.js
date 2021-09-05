const emojis = "👨‍💻,👩‍💻,🎮,💻,🚀,🐛,⚡,💡,🚀,💻,💧,🐱,⭐,🌟,✨,🐧,☕,🌈,👍🏿,👍🏾,👍🏽,👍🏼,👍🏻,👍,🐶,🎈,💭,🌐,❔,🎏,📟,📱,🎆,🎇,🥳,🎉".split(",");
window.setInterval(function() {
    let emoji_elems = document.querySelectorAll(".emoji");
    for(let i = 0; i < emoji_elems.length; i++) {
        let emoji = emoji_elems[i];
        let y_percent = Number(emoji.style.top.substring(0, emoji.style.top.length-1));
        if(y_percent >= 120) {
            document.body.removeChild(emoji);
        } else {
            emoji.style.top = (y_percent + 1) + "%"; // Remove, increment, then add % again
        }
    }

    // Add emoji
    let emoji = document.createElement("div");
    emoji.className = "emoji";
    emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.floor(Math.random() * 100) + "vw";
    emoji.style.top = -20 + "%";
    emoji.style.fontSize = (Math.floor(Math.random() * 100) + 5) + "px";
    document.body.appendChild(emoji);
}, 100); // 100ms - 10 times every second