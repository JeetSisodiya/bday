function showSurprise() {
  const container = document.getElementById('floating-hearts');
  
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 2 + 's';
    container.appendChild(heart);

    // Remove heart after animation ends
    setTimeout(() => {
      container.removeChild(heart);
    }, 5000);
  }
  
  setTimeout(() => {
    alert("💖 You're amazing! Have a magical birthday filled with laughter and love! 🌸");
  }, 2000);
}
