document.getElementById('revealMessage').addEventListener('click', function() {
    const messageDiv = document.getElementById('message');
    messageDiv.classList.remove('hidden');
    setTimeout(() => {
        messageDiv.style.opacity = '1';
    }, 100); // Slight delay for smooth transition
});
