//Ejercicios 2 y 3:
//let mySelector = document.querySelector(".button");
//mySelector.style.backgroundColor = "green";
//console.log(mySelector);

//Ejercicio 4:
document.querySelector("#new-todo").addEventListener("submit", (alertSomething));

function alertSomething(evento) {
  evento.preventDefault();
  let text = evento.target.elements.text.value.trim();
  console.log(text);
}

//Otra manera de hacer el ejercicio 4:
//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault()
//    const text = e.target.elements.text.value.trim()
//    console.log(text)
//})



//Contenido del archivo inicial:
//alert("hello!");

//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault();
//    const text = e.target.elements.text.value.trim();
//    alert(text);
//})