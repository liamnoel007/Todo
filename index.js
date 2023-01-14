let todoInput = document.querySelector('.input'),
  todoAddBtn = document.querySelector('.todo_add_btn'),
  todoItems = document.querySelector('.todo_items');
todoCompleted = document.querySelector('.todo');
let todoCountAll = document.querySelector('#all'),
  todoCountFinished = document.querySelector('#finished');

let todos = [];
let numTodoFinished = 0;

todoAddBtn.addEventListener('click', () => {
  let newTodo = {
    id: Math.random(),
    text: todoInput.value,
    isCompleted: false,
  };

  todos.push(newTodo);

  todoInput.value = '';

  //   console.log(todos);

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `
        <li class = 'todos ${item.isCompleted ? 'completed' : ''}'  onclick = 'todoFinish(${
          item.id
        })' >
        ${item.text}
        
      <button>Удалить</button>
  </li>`
    )
    .join('');

  todoCountAll.value = todos.length;
});

function todoFinish(id) {
  let newTodos = todos.map((item) => {
    if (item.id === id) {
      return { ...item, isCompleted: !item.isCompleted };
    }
    return item;
  });

  todos = newTodos;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].isCompleted && todos[i].id == id) {
      numTodoFinished += 1;
      todoCountFinished.value = numTodoFinished;
    } else if (todos[i].isCompleted == false && todos[i].id == id) {
      numTodoFinished -= 1;
      todoCountFinished.value = numTodoFinished;
    }
  }

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `
        <li class = 'todos ${item.isCompleted ? 'completed' : ''}'  onclick = 'todoFinish(${
          item.id
        })' >
        ${item.text}
        
      <button onclick = 'alert()'>Удалить</button>
  </li>`
    )
    .join('');
  //   console.log(todos);
}

function alert() {
  alert('Hello!');
}
