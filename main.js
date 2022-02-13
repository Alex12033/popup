'use strict'

const chatPopup = document.querySelector('.popup');
const openChat = document.querySelector('.chat-btn');
const send = document.querySelector('.submit');
const chat = document.querySelector('.area');
const inputElm = document.querySelector('input');


openChat.addEventListener('click', () => {
  chatPopup.classList.toggle('show');
})

send.addEventListener('click', () => {
  let userInput = inputElm.value;
  let temp = `<div class="out-msg">
    <span class="my-msg">${userInput}</span>
    </div>`;
  chat.insertAdjacentHTML("beforeend", temp);

  fetch('http://localhost:3000/posts', {
    method: 'POST', // или 'PUT'
    body: JSON.stringify({ 'msg': userInput }), // данные могут быть 'строкой' или {объектом}!
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());

  inputElm.value = '';

})


