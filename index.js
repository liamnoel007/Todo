let todoInput = document.querySelector('.input'),
  todoAddBtn = document.querySelector('.todo_add_btn'),
  todoItems = document.querySelector('.todo_items');
todoCompleted = document.querySelector('.todo');
let todoCountAll = document.querySelector('#all'),
  todoCountFinished = document.querySelector('#finished');

let todos = [];

todoAddBtn.addEventListener('click', () => {
  let newTodo = {
    id: Math.random(),
    text: todoInput.value,
    isCompleted: false,
  };

  todos.push(newTodo);

  todoInput.value = '';

  console.log(todos);

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `<li class = 'todo ${item.isCompleted ? 'completed' : ''}'  onclick = 'todoFinish(${
          item.id
        })' >
        ${item.text}
        
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

  todoItems.innerHTML = todos
    .map(
      (item) =>
        `<li class = 'todo ${item.isCompleted ? 'completed' : ''}'  onclick = 'todoFinish(${
          item.id
        })' >
      ${item.text}
   
  </li>`
    )
    .join('');

  console.log(todos);
}
