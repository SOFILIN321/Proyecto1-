function descuento(cantidad,categoria) {
    let estudiante = 0.2
    let trainee = 0.5
    let junior = 0.85
    let resultado = 0
  
    if (categoria == "estudiante"){
        resultado = cantidad * 200 * estudiante
    }else if (categoria == "trainee") {
         resultado = cantidad * 200 * trainee
    } else {
        resultado = cantidad * 200 * junior
    }
    return resultado
  }
  
  let formulario = document.getElementById("form_compra")
  
  let categorias = document.getElementById("categoria")
  
  let cantidades = document.getElementById("cantidad")
  
  let divTotal = document.getElementById("total")
  
  formulario.addEventListener("reset", ()=>{
    divTotal.textContent = "Total a pagar: "
  })
  
  formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    divTotal.textContent = "Total a pagar: $" + descuento(cantidades.value,categorias.value)
  })





