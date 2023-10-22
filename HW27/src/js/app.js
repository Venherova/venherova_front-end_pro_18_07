const amountOfTime = Math.floor(Math.random() * 10000) + 1000; 
const inactivityTime = 40000;
let inactivityTimer;

document.forms[0].elements.message.addEventListener('input', () => {
  resetInactivityTimer();
});

document.getElementById('send').addEventListener('click', () => {
  sendMessage();
  resetInactivityTimer();
});

function greetings() {
  addMessage('Вітаю! Поспілкуємось?', 'bot');
}

function sendMessage() {
  let myMessage = document.forms[0].elements.message.value.trim();
  
  if (!myMessage) {
    return;
  }

  addMessage(myMessage, 'user');

  if (myMessage.toLowerCase() === 'час для розмови вичерпано') {
    setTimeout(() => {
      addMessage('Гарного дня! До побачення!', 'bot');
      hideForm();
      clearActivityTimer();
    }, amountOfTime);
    return;
  }
  
  startBotThinking();
}

function hideForm() {
  document.forms[0].style = 'display: none';
}

function clearActivityTimer() {
  clearTimeout(inactivityTimer);
}

function addMessage(message, sender) {  
  document.forms[0].elements.message.value = null;

  const chatElement = document.getElementById('chat');
  const messageElement = document.createElement('div');
  messageElement.className = sender;
  messageElement.textContent = message;
  chatElement.appendChild(messageElement);
}

function startBotThinking() {
  setTimeout(botMessaging, amountOfTime);
}

function resetInactivityTimer() {
  if (inactivityTimer) {
    clearActivityTimer();
  }

  inactivityTimer = setTimeout(() => {
    addMessage('Браузер завершив розмову через неактивність', 'bot');
    hideForm();
  }, inactivityTime);
}

function botMessaging() {
  const massageIndex = Math.floor(Math.random() * botMessages.length);
  const botMessage = botMessages[massageIndex];
  addMessage(botMessage, 'bot');
}

greetings();