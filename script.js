let allMessages = document.querySelector('.scroller-content');
let messages = allMessages.children;
let mesTemplate = document.querySelector('#message-template').content;
let newMesTemplate = mesTemplate.querySelector('.chat-message');
let inputForm = document.querySelector('.chat-form');
let formText = inputForm.querySelector('.chat-form-input');
let me = document.querySelector('.choose-button-me');
let other = document.querySelector('.choose-button-other');
let me_mes = true;
me.addEventListener('click', function(evt) {
  evt.preventDefault();
  me_mes = true;
  other.classList.remove('choose-button-true')
  me.classList.add('choose-button-true')
})

other.addEventListener('click', function(evt) {
  evt.preventDefault();
  me_mes = false;
  me.classList.remove('choose-button-true')
  other.classList.add('choose-button-true')
})
let DeleteMess = function (item) {
    let deleteButton = item.querySelector('.chat-message-button');
    deleteButton.addEventListener('click', function (evt) {
      evt.preventDefault();  
      item.remove();
    });
  };
  for (var i = 0; i < messages.length; i++) {
    addCheckHandler(messages[i]);
  }
inputForm.addEventListener('submit', function (evt) {
    evt.preventDefault();  
    let mesText = formText.value;
    let newMes = newMesTemplate.cloneNode(true);
    let name = newMes.querySelector('span');
    if (me_mes) {
      newMes.classList.remove('chat-message-right');
      newMes.classList.add('chat-message-left');
      name.textContent = 'Я'
    } else {
      newMes.classList.add('chat-message-right');
      newMes.classList.remove('chat-message-left');
      name.textContent = 'Моя шиза'
    } 
    let text = newMes.querySelector('.chat-message-text');
    let time = newMes.querySelector('.chat-message-time');
    var today = new Date();
    time.textContent = today.getHours() + ":" + today.getMinutes();
    text.textContent = mesText;
    formText.value = '';
    DeleteMess(newMes);
    allMessages.appendChild(newMes);
  });


