const showMessage = (message, config) => {
  console.log(config.name, message);
}
  


export function showUserMessage(message) {
  showMessage(message, { name: 'User: ' });
}

export function showBotMessage(message) {
  showMessage(message, { name: 'Bot: ' });
}
