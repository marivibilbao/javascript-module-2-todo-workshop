//Ejercicio 6:
const generateTodoDOM = (todo) => { //1. Crear función que toma un parámetro: todo.
    const todoEl = document.createElement('label'); //2. Se crean tres elementos que sólo estan en el JavaScript
    const containerEl = document.createElement('div'); //3.
    const todoText = document.createElement('span'); //4.
//Ejercicio 10
    const removeBurron = 

    todoText.textContent = todo; //5. Asignar el valor "todo" (parámetro) a "todoText" usando la propiedad ".textContent"
    
    containerEl.appendChild(todoText); //6. Dentro del contenedor poniendo el elemento "todoText" / Contenedor que existe en el javaScript
    
    todoEl.classList.add("list-item"); //7.
    containerEl.classList.add("list-item__container"); //7.
    
    todoEl.appendChild(containerEl); //8.

    return todoEl; //9. Retornar 
}

//---------------------------------------------------------------------------------------

//Ejercicio 7 - Parte I:
const renderTodos = todos => { //1. Crear función
    const todoList = document.querySelector("#todos"); //2
    todoList.innerHTML = ''; //3. Eliminar todo dentro de todoList usando la propiedad: innerHTML

//Ejercicio 8:
    if (todos.length >0) { // Verificar si el arreglo es mayor a 0, quiere decir que no esta vacío si tiene algo mayor a 0.
    //Ejercicio 7 - Parte II:
    todos.forEach((todo) => {
        const newTodo = generateTodoDOM(todo);
        todoList.appendChild(newTodo);
    })
    } else {
        const messageEl = document.createElement("p");
        messageEl.classList.add('empty-message'); //Ejercicio 8:
        messageEl.textContent = 'There are no todos to show'; //Ejercicio 8:
        todoList.appendChild(messageEl);
    }
}

//---------------------------------------------------------------------------------------

//Ejercicio 9:
const removeTodo = todoEl => { //1. Crear una función
    const todoIndex = todos.findIndex((todo)=>{
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//---------------------------------------------------------------------------------------

//.addEventListener Permite crear eventos
//Ejercicio 5:
let todos = [ ];
function createTodo (text) {
    todos.push(text);
}

document.querySelector('#new-todo').addEventListener('submit', (evento) => {
    evento.preventDefault()
    const text = evento.target.elements.text.value.trim()

    if (text.length > 0) {
        createTodo(text)
        evento.target.elements.text.value = ''
       }

    renderTodos(todos);
})

//Ejercicio 8:
renderTodos(todos);

//---------------------------------------------------------------------------------------

//Ejercicio 4:
//document.querySelector("#new-todo").addEventListener("submit", (alertSomething));

//function alertSomething(evento) {
//  evento.preventDefault();
//  let text = evento.target.elements.text.value.trim();
//  console.log(text);
//}

//---------------------------------------------------------------------------------------

//Otra manera de hacer el ejercicio 4:
//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault()
//    const text = e.target.elements.text.value.trim()
//    console.log(text)
//})

//---------------------------------------------------------------------------------------

//Ejercicios 2 y 3:
//let mySelector = document.querySelector(".button");
//mySelector.style.backgroundColor = "green";
//console.log(mySelector);

//---------------------------------------------------------------------------------------

//Contenido del archivo inicial:
//alert("hello!");

//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault();
//    const text = e.target.elements.text.value.trim();
//    alert(text);
//})