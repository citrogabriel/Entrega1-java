alert ("Bienvenido/a")
let nombre = prompt ("¿Como es tu nombre?")

let edad = prompt ("¿Que edad tenes?")

alert ("Vamos a presentarte las siguientes opciones!")

const color = [ "Azul", "Amarillo", "Verde", "Violeta"]
color.push("Arena")

console.log (color)

let confirmar = confirm ("Recorda que solo podes elejir 3 colores como maximo!")

let cantidad = "1";

if(cantidad == "1" ){
    console.log("No aplica descuentos");
}else{console.warn("Descuento del 30%");
}


let buttonEnviar = document.getElementById("buttonEnviar")
buttonEnviar.addEventListener("click",formularioGuardado)


function formularioGuardado(){
    const formulario = document.getElementById("Formulario")
    const datosDeFormulario = { 
        nombre: formulario.nombre.value,
        edad: formulario.edad.value,
        color: formulario.color.value,
    }

    const formularioJson = JSON.stringify(datosDeFormulario)

    localStorage.setItem("informacion",formularioJson)
}
