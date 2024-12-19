// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
  }
  
  // Функция вывода текущего времени в консоль
  function logCurrentTime() {
    const currentTime = new Date();
    const hours = String(currentTime.getHours()).padStart(2, '0');
    const minutes = String(currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(currentTime.getSeconds()).padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
  }
  
  // Вызов функции showMessage с сообщением "Скрипт загружен!"
  showMessage("Скрипт загружен!");
  logCurrentTime();
  
  // Функция изменения цвета фона страницы
  function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
  }
  
  // Функция сброса цвета фона к исходному значению
  function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
  }
  
  // Функция переключения видимости элемента
  function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
  }
  
  // Обработчик события DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function() {
    // Вызов функции resetBackgroundColor
    resetBackgroundColor();
    // Вызов функции changeBackgroundColor с цветом фона "lightblue"
    changeBackgroundColor("lightblue");
  
    // Вызов функции toggleVisibility с селектором ".content"
    toggleVisibility(".content");
  });
  
  // Функция обработки параметра utm_term в URL
  function processUtmTerm() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    if (utmTerm) {
      const h1Element = document.querySelector('h1');
      if (h1Element) {
        h1Element.textContent = utmTerm;
      }
    }
  }
  
  // Вызов функции processUtmTerm при загрузке страницы
  window.addEventListener('load', processUtmTerm);
  