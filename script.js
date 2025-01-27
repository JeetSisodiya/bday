document.getElementById('celebrateBtn').addEventListener('click', startCelebration);

function startCelebration() {
    displayRandomMessage();
    startConfetti();
    playMusic();
}

function playMusic() {
    const song = document.getElementById("birthdaySong");
    song.play();
}

function displayRandomMessage() {
    const messages = [
        "🎂 Happy Birthday, Zoya! You deserve all the happiness today and always! 💖",
        "🎉 Wishing you a day filled with love, laughter, and lots of cake! 🍰",
        "✨ Another year older, wiser, and more fabulous! Have an amazing birthday! 🎊",
        "🥳 May this year bring you success, joy, and all your heart desires! 💕",
        "🎈 Zoya, you're truly special! Keep shining and enjoy your day to the fullest! 🌟",
        "🎁 Hope your birthday is as wonderful and amazing as you are! 🥂",
        "💐 Sending you lots of love and warm wishes on your special day! 🌸",
        "🌟 Stay awesome and keep spreading joy everywhere you go! Happy B-Day! 🥳",
        "❤️ Birthdays come once a year, but friends like you are once in a lifetime! 🎂",
        "🎶 Enjoy the little moments today, they make the best memories tomorrow! 🎵"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('birthdayMessage').textContent = messages[randomIndex];
}

function startConfetti() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 6 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 + 1
        });
    }

    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.y > canvas.height) {
                particle.y = 0;
                particle.x = Math.random() * canvas.width;
            }

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
        });

        requestAnimationFrame(animateConfetti);
    }

    animateConfetti();
}//
