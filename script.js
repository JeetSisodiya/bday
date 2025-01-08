const messageDiv = document.getElementById('message');
const button = document.getElementById('revealMessage');

button.addEventListener('click', async () => {
    button.disabled = true; // Prevent multiple clicks
    button.textContent = "Fetching Surprise... 🎁";

    try {
        const response = await fetch('https://api.quotable.io/random');

        if (!response.ok) {
            throw new Error('Failed to fetch the quote.'); // Handle non-200 status codes
        }

        const data = await response.json();
        const message = `${data.content} — ${data.author}`;

        messageDiv.innerHTML = `<p>${message}</p>`;
        messageDiv.classList.add('active');
    } catch (error) {
        console.error('Error fetching the message:', error);
        messageDiv.innerHTML = `<p>Oops! Something went wrong. Please try again later. 🛠️</p>`;
        messageDiv.classList.add('active');
    } finally {
        button.textContent = "Click for a Surprise 🎁";
        button.disabled = false;
    }
});
