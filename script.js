const aiButton = document.getElementById('ai-button');
const chatPopup = document.getElementById('chat-popup');
const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const messages = document.getElementById('messages');

// Toggle chat popup
aiButton.addEventListener('click', () => {
  chatPopup.style.display = chatPopup.style.display === 'flex' ? 'none' : 'flex';
});

// Add messages to chat
function addMessage(text, type) {
  const div = document.createElement('div');
  div.className = `message ${type}`;
  div.textContent = text;
  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight;
}

// Handle user input
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';

  // Placeholder bot response
  setTimeout(() => {
    addMessage("I don’t have enough information from this website to answer that accurately.", 'bot');
  }, 500);
});
