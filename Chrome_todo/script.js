document.addEventListener('DOMContentLoaded', function(){
  loadTasks();
  document.getElementById('add').addEventListener('click', addTaskFromInput);
  document.getElementById('input_task').addEventListener('keypress', function(event) {
    if (event.key === "Enter"){
      event.preventDefault();
      document.getElementById('add').click();
    }
  });
})

function addTaskFromInput(){
  const task = document.getElementById('input_task').value;

  if(task){
    addTask(task);
    document.getElementById('input_task').value = '';
    saveTask();
  }
}

function addTask(task, isCompleted = false){
  const list = document.getElementById('list');
  const li = document.createElement('li');
  const button_container = document.createElement('div');
  button_container.id = "button_container"

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = isCompleted;
  checkbox.addEventListener('change', toggleTask);

  const text = document.createElement('span');
  text.textContent = task;
  text.style.textDecoration = isCompleted ? 'line-through' : 'none';

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit'
  editButton.addEventListener('click', editTask);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete'
  deleteButton.addEventListener('click', deleteTask);

  button_container.appendChild(editButton);
  button_container.appendChild(deleteButton);

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(button_container);

  list.appendChild(li);
}

function saveTask(){
  const tasks = []; //list of tasks

  document.querySelectorAll('#list li').forEach(function (taskLi){ //find li tags which is in list(id)
    const text = taskLi.querySelector('span').textContent; //
    const isCompleted = taskLi.querySelector('input').checked;
    tasks.push({text, isCompleted});
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}
 
function loadTasks(){
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  tasks.forEach(function (task){
    addTask(task.text, task.isCompleted);
  });
}

function toggleTask(event){
  const text = event.target.nextElementSibling;
  text.style.textDecoration = event.target.checked ? 'line-through' : 'none';
  text.style.color = event.target.checked ? 'red' : 'none';
  saveTask();
}

function deleteTask(event){
  const li = event.target.parentNode.parentNode; //delete 버튼의 부모 요소를 찾아간다.(즉, 해당 이벤트 타깃의 li태그가 될 것)
  li.parentNode.removeChild(li);
  saveTask();
}

function editTask(event){
  const span = event.target.parentNode.previousElementSibling;
  const newText = prompt("Edit Your Task", span.textContent);
  if(newText !== null) {
    span.textContent = newText;
    saveTask();
  }
}