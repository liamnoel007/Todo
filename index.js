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

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `
        <div><li class = 'todos ${item.isCompleted ? 'completed' : ''}'})' >
          ${item.text} 
          <button >
        
          </li>
          <button onclick = 'todoDelete(${item.id})'> Удалить</button>
          <button onclick = 'todoFinish(${item.id})'>Завершить</button>
          </div>
  `
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

  //   for (let i = 0; i < todos.length; i++) {
  //     if (todos[i].isCompleted && todos[i].id == id) {
  //       numTodoFinished += 1;
  //       todoCountFinished.value = numTodoFinished;
  //     } else if (todos[i].isCompleted == false && todos[i].id == id) {
  //       numTodoFinished -= 1;
  //       todoCountFinished.value = numTodoFinished;
  //     }
  //   }

  todoCountFinished.value = todos.filter((todo) => todo.isCompleted).length;

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `
        <div>
        <li class = 'todos ${item.isCompleted ? 'completed' : ''}'})' >
          ${item.text} 
          </li>
          <button onclick = 'todoDelete(${item.id})'> Удалить</button>
          <button onclick = 'todoFinish(${item.id})'>Завершить</button>
          </div>
  `
    )
    .join('');
}

function todoDelete(id) {
  const newTodos = todos.filter((todo) => todo.id !== id);

  todos = newTodos;

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `
      <div><li class = 'todos ${item.isCompleted ? 'completed' : ''}'})' >
        ${item.text} 
        <button >
      
        </li>
        <button onclick = 'todoDelete(${item.id})'> Удалить</button>
        <button onclick = 'todoFinish(${item.id})'>Завершить</button>
        </div>
`
    )
    .join('');

  todoCountAll.value = todos.length;
}
