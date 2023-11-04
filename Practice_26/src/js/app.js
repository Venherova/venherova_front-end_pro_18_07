import { showUserMessage } from "./messagesHelpers.js";
import '../scss/styles.scss';

document.querySelector('input').addEventListener('click', () => {
  showUserMessage('hello');
  showUserMessage('bye');
  showUserMessage('fire');
});