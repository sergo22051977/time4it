/*
  События мыши:
  - click - нажатие
  - contextmenu - нажатие правой кнопкой
  - mouseover / mouseout - наводится / покидает элемент
  - mousedown / mouseup - нажатие / отжатие
  - mousemove - движение
  
  События на элементах управления:
  - submit - отправление формы
  - focus - фокусировка на input
  
  Клавиатурные события
  - keydown / keyup - нажатие / отжатие
  
  События документа
  - DOMContentLoad - когда HTML получен и обработан, DOM документ полностью построен и доступен
  
  CSS-события
  - transitioned - когда CSS-анимация завершена 
*/


// Подсчет кроликов

function countRabbits() {
  for (let i = 1; i <= 3; i++) {
    console.log(`Кролик №${i}`);
  }
  button.removeEventListener('click', countRabbits);
}

let button = document.getElementById('clickMe');

//button.onclick = countRabbits;

/*
  - addEventListener - добавляет слушателя
  - removeEventListener - убирает слушателя
*/

button.addEventListener('click',countRabbits);
button.addEventListener('click', ()=> console.log('Hi!'));
button.removeEventListener('click', ()=> console.log('Hi!'));