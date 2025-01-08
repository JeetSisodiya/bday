// Function to fetch a random quote from the Quotable API
async function fetchRandomMessage() {
    try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        return `${data.content} — ${data.author}`;
    } catch (error) {
        console.error('Error fetching the message:', error);
        return "Oops! Couldn't fetch a message. Please try again.";
    }
}

// Function to display a random message
async function displayRandomMessage() {
    const message = await fetchRandomMessage();
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = `<p>${message}</p>`;
    messageDiv.classList.remove('hidden');
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transition = 'opacity 1s ease';
    }, 100); // Slight delay for smooth transition
}

// Event listener for the button to reveal the message
document.getElementById('revealMessage').addEventListener('click', displayRandomMessage);

// Display a random message on page load
window.onload = displayRandomMessage;
