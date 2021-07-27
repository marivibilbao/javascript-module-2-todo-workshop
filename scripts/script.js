//Ejercicio 6:
const generateTodoDOM = (todo) => { //1. Crear función que toma un parámetro: todo.
    const todoEl = document.createElement('label'); //2. Se crean tres elementos que sólo estan en el JavaScript
    const containerEl = document.createElement('div'); //3.
    const todoText = document.createElement('span'); //4.
    
    todoText.textContent = todo; //5. 
    
    containerEl.appendChild(todoText); //6.
    
    todoEl.classList.add('list-item__container'); //7.
    containerEl.classList.add('list-item__container'); //7.
    
    todoEl.appendChild(containerEl); //8.

    return todoEl; //9. Retornar 
}


//---------------------------------------------------------------------------------------

//.addEventListener Permite crear eventos
//Ejercicio 5:
//let todos = [ ];
//function createTodo (text) {
//.    todos.push(text);
//}

//document.querySelector('#new-todo').addEventListener('submit', (evento) => {
//    evento.preventDefault()
//    const text = evento.target.elements.text.value.trim()

//    if (text.length > 0) {
//        createTodo(text)
//        evento.target.elements.text.value = ''
//    }

//    console.log(todos)
//})

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