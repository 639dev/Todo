var todos = ['item1','item2','item3'];

// It should display all todos
function displayTodos(){
  console.log('My todos:'.todos);
}

// It should add a todo
function addTodo(todo){
  todos.push(todo);
  displayTodos();
}

// It should change a todo
function changeTodo(position,newValue){
  todos[position] = newValue;
  displayTodos();
}

// It should delete a todo
function deleteTodo(position){
  todos.splice(position,1);
  displayTodos();
}