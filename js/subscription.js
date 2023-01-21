let subscribeForm = document.querySelector('.subscribe-form');
let subscribeField = document.querySelector('.subscribe__field');
let subscribeText = document.querySelector('.subscribe-description');

subscribeForm.onsubmit = function (evt) {
  evt.preventDefault();
  subscribeText.textContent = subscribeField.value + ' добавлен в рассылку.'
}
