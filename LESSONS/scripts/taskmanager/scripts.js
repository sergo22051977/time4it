'use strict';

function addTask() {
  let li = document.createElement('li');
  li.className = 'tasks-list__item';
  if (task.value !== '') {
    li.innerHTML = `
    <span>${task.value}</span>
    <div>
      <button class="tasks-list__edit-task">Edit</button>
      <button class="tasks-list__delete-task">Delete</button>
    </div>  
  `;
    
    list.append(li);
    task.value = '';
  };  
}

function interationTask() {
  let target = event.target;
  
  if (target.className === 'tasks-list__delete-task') {
    let del = document.querySelector('.tasks-list__delete-task');
  
    target.parentElement.parentElement.remove();
  };
  if (target.className === 'tasks-list__edit-task') {
    let value = target.parentElement.parentElement.children[0].innerHTML;
    value = prompt('Исправьте задачу', value);
    
    target.parentElement.parentElement.children[0].innerHTML = value;
  }
}

let list = document.querySelector('.tasks-list');
let task = document.querySelector('.form__add_task');
let add = document.querySelector('.form__submit');

add.addEventListener('click', addTask);
list.addEventListener('click', interationTask);


//add.addEventListener('click', ()=>console.log('кнопка нажата'));
//document.querySelector('.form').addEventListener('click', ()=>console.log('форма нажата'));