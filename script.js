// Rotating Tips
const tips = [
    "The SCP Foundation contains over 3,000 anomalies worldwide.",
    "SCP-173 moves only when you aren't looking at it.",
    "Always follow your Site Director's orders.",
    "Civil Networks: Where immersion meets professionalism.",
    "Roleplay with respect and stay in character!"
];

let tipIndex = 0;
setInterval(() => {
    document.getElementById("tips").innerText = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}, 7000);

document.addEventListener('DOMContentLoaded', () => {
    const playSoundButton = document.getElementById('play-sound');
    const audio = document.getElementById('background-audio');

    if (playSoundButton) {
        playSoundButton.addEventListener('click', () => {
            audio.play()
                .then(() => {
                    // Hide the button after audio starts playing
                    playSoundButton.style.display = 'none';
                })
                .catch(error => {
                    console.error("Audio playback failed:", error);
                });
        });
    } else {
        console.error("Play sound button not found in the DOM.");
    }

    if (!audio) {
        console.error("Background audio element not found in the DOM.");
    }
});

