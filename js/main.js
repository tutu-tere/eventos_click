// Obtenemos el botón por su selector
const botonCambiar = document.querySelector(".boton_sesion");

// Agregamos un evento 'click' al botón
botonCambiar.addEventListener("click", function() {
    // Cambiamos el contenido del botón utilizando this y innerText
    this.innerText = "Cerrar Sesion";
});

//Para desarecer el boton  
const botonDesaparecer = document.querySelector(".desaparece");

botonDesaparecer.addEventListener("click", function(){
  this.style.display = "none";
})

//Botones de me gusta alerta y el contador
const botonlike2 = document.querySelector(".me_gusta1");

botonlike2.addEventListener("click", function(){
  contador++;
  botonlike2.innerHTML = contador + " Me gusta";
  alert("Le diste like a Gatito Atigrado 😺");
})

const botonlike = document.querySelector(".me_gusta");
let contador = 0;
botonlike.addEventListener("click", function(){
  contador++;
  botonlike.innerHTML= contador + " Me gusta";
  alert("Le diste like a Golden Retriever 🐶");
})
