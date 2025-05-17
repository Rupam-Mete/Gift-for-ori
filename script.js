document.addEventListener("DOMContentLoaded", function() {
    startEmojiAnimation();
});

function startEmojiAnimation() {
    const emojiContainer = document.getElementById("floatingEmojis");
    const emojis = ["❤️", "🪷", "💮", "🌸", "💕", "💝", "❤️", "🫂"];

    for (let i = 0; i < 15; i++) {
        const emoji = document.createElement("div");
        emoji.className = "emoji";
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.bottom = "-10%";
        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 5000);
    }
}

function showSurprise() {
    const overlay = document.getElementById("overlay");
    overlay.style.visibility = "visible";
}

// Close the surprise when clicking outside the image
document.getElementById("overlay").addEventListener("click", function(event) {
    if (event.target !== document.getElementById("surpriseImage")) {
        this.style.visibility = "hidden";
    }
});
