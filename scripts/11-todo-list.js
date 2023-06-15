const todoList = [
  {
    name:'Make dinner',
   dueDate:'2022-12-22'
   },
  {
    name:'phalu',
    dueDate:'1988-12-22'
  }
];

function renderTodoList(){
  let todoListHtml='';

  for(let i=0; i<todoList.length;i++){
    const todoObject =todoList[i];
    const name = todoObject.name;
    const dueDate =todoObject.dueDate;

    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${i}, 1);
    renderTodoList();
    " class = "delete-todo-button">Delete</button>
    `;
    todoListHtml += html;
  }


  document.querySelector('.js-todo-list').innerHTML=todoListHtml;


}

function addTodo(){

  const inputElement = document.querySelector('.js-name-input');
  const dueDateElement = document.querySelector('.js-due-date-input');


  const name = inputElement.value;
  const dueDate=dueDateElement.value
  console.log(name);
  todoList.push({
   // name:name,
    //dueDate:dueDate
    name,
    dueDate
  });
  console.log(todoList);
  inputElement.value ='';
  renderTodoList()

}