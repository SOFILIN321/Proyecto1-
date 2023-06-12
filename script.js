function aPagar (cantidad,categoria){
let estudiante = 40
let trainee = 100
let junior = 170
let resultado = 0

if (categoria == "estudiante"){
    resultado = cantidad * estudiante;
} else if (categoria == "trainee"){
 resultado = cantidad * trainee
} else {
 resultado = cantidad * junior
}

return resultado
}

let formulario = document.getElementsByTagName("form")
let categoria = document.getElementsByClassName("categoria")
let cantidad = document.getElementsByClassName("cantidad")
let total = document.getElementsByClassName("total")

formulario.addEventListener("reset", ()=>{
    divTotal.textContent = "Total a pagar: "
  })
  
  formulario.addEventListener("submit", (event)=>{
    event.preventDefault();
    total.textContent = "Total a pagar: $" + descuento(cantidad.value,categoria.value)
  })

//formulario.addEventListener ("submit", (evento)=>{
evento.preventDefault();
total.textContent = "Total a pagar $" + aPagar(cantidad.value,categoria.value);
//})




