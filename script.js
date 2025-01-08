
        const messageDiv = document.getElementById('message');
        const button = document.getElementById('revealMessage');

        button.addEventListener('click', async () => {
            button.disabled = true; // Prevent double clicks
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            const message = `${data.content} — ${data.author}`;

            messageDiv.innerHTML = `<p>${message}</p>`;
            messageDiv.classList.add('active');

            // Add confetti
            for (let i = 0; i < 50; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.animationDelay = Math.random() * 2 + 's';
                document.body.appendChild(confetti);

                setTimeout(() => confetti.remove(), 3000); // Cleanup confetti
            }
        });
