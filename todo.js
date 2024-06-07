// function to load todos
function loadTodo() {
    const todo = JSON.parse(localStorage.getItem("todos")) || { "todolist": [] };
    console.log(todo);
    return todo;
}
// function to add todos to local storage of the browser
function addTodoToLocalStorage(todoText) {
    const todo = loadTodo();
    todo.todolist.push(todoText)
    localStorage.setItem("todos", JSON.stringify(todo));
}
//function to append element in html
function appendTodoInHTML(todoText){
    const list = document.getElementById("ul"); //fetch ul
    const todo = document.createElement("li"); // create li tag
    todo.textContent = todoText; // add text in li
    list.appendChild(todo); // add li as a child in list
}
// an event listner which is activated when dom content is loaded (async)
document.addEventListener("DOMContentLoaded", () => {

    const todoInput = document.getElementById("input"); //return input element
    const todoSubmit = document.getElementById("submit");// return submit button element
    const list = document.getElementById("ul");
// when submit button is clicked this event is to be executed
    todoSubmit.addEventListener("click", () => {
        const todoText = todoInput.value; // return the text entered by the user
        if (todoText == "") {
            alert("Write something") // displays alert if submit is clicked without any text
        }
        else {
            addTodoToLocalStorage(todoText); //adds the text to the local storage
            appendTodoInHTML(todoText); //append text to html
            todoInput.value = ""; // make value null after appending
        }
    })
// when mouse clicked out of focus (after writing) event activates
    todoInput.addEventListener("change", (event) => {
        const todoText = event.target.value; //is same as todoInput.value
        event.target.value = todoText.trim();// trims the extra space
        console.log(event.target.value)
    })
   const todo_list =  loadTodo(); // returns the key value pair
    todo_list.todolist.forEach(element => {
        const todo = document.createElement("li"); // for each element create a li tag
        todo.textContent = element // add text to each li
        list.appendChild(todo); //  append to ul
    });
})