// Rotating Tips
const tips = [
    "10/12 was a dark day for Site-65",
    "SCP-173 moves only when you aren't looking at it.",
    "Yeke wrote all this with AI assisting to help him learn?",
    "This Community was founded in 2013!",
    "Our server requires you to stay in character"
];

let tipIndex = 0;
setInterval(() => {
    document.getElementById("tips").innerText = tips[tipIndex];
    tipIndex = (tipIndex + 1) % tips.length;
}, 7000);

// Get audio and controls
const audio = document.getElementById('background-audio');
const playBtn = document.getElementById('play-sound');
const pauseBtn = document.getElementById('pause-sound');
const volumeControl = document.getElementById('volume-control');

// Play sound
playBtn.addEventListener('click', () => {
    audio.play();
});

// Pause sound
pauseBtn.addEventListener('click', () => {
    audio.pause();
});

// Adjust volume
volumeControl.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

document.addEventListener('DOMContentLoaded', () => {
    if (!audio) {
        console.error("Background audio element not found in the DOM.");
    }
});
