function showSurprise() {
  const confetti = document.getElementById('confetti');
  confetti.classList.remove('hidden');
  setTimeout(() => {
    alert("🎉 Surprise! May all your wishes come true. Have an amazing year ahead! 🎂");
  }, 2000);
}
