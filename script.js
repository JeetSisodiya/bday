function showSurprise() {
  // Adding Floating Hearts
  const container = document.getElementById('floating-hearts');
  container.innerHTML = ''; // Clear previous hearts
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(heart);
  }

  // Adding Confetti Surprise
  const confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.innerHTML = `
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
    <div class="confetti-piece"></div>
  `;
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove(); // Remove confetti after animation
    alert("🎉 Surprise! You are truly special. Have an amazing birthday filled with love and joy! 🌸💖");
  }, 3000);
}
