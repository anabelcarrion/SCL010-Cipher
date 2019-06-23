
//Boton para realizar el cifrado
const botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", mostrarCifrado);

//Boton para realizar el descifrado
const botonDescifrar = document.getElementById("botonDescifrar");
botonDescifrar.addEventListener("click", mostrarDescifrado);

//Boton para limpiar las areas de texto
const botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener("click", limpiar);

/*/Boton para copiar las areas de texto
const botonCopiar = document.getElementById("botonCopiar");
botonCopiar.addEventListener("click",copiar );*/



//Funcion para mostrar el texto a cifrar
function mostrarCifrado() {
  let desplazamientoCifrar = document.getElementById("entradaDesplazamiento").value;
  let textoCifrar = document.getElementById("textoEntrada").value;
  let mostarTextoCifrado = cipher.encode(textoCifrar, parseInt(desplazamientoCifrar));
  document.getElementById("textoSalida").value = mostarTextoCifrado;
}

//Funcion para mostrar el texto a descifrar
function mostrarDescifrado() {
  let desplazamientoDescifrar = document.getElementById("entradaDesplazamiento").value;
  let textoDescifrar = document.getElementById("textoEntrada").value;
  let mostarTextoDescifrado = cipher.decode(textoDescifrar, parseInt(desplazamientoDescifrar));
  document.getElementById("textoSalida").value = mostarTextoDescifrado;
}

function limpiar() {
  document.getElementById("entradaDesplazamiento").value= 0;
  document.getElementById("textoEntrada").value="";
  document.getElementById("textoSalida").value="";
  }

  /*function copiar(textoSalida) {

    // Crea un campo de texto "oculto"
    let aux = document.createElement("textoSalida");
    
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById(textoSalida).innerHTML);
    
    // Añade el campo a la página
    document.body.appendChild(aux);
    
    // Selecciona el contenido del campo
    aux.select();
    
    // Copia el texto seleccionado
    document.execCommand("copy");
    
    // Elimina el campo de la página
    document.body.removeChild(aux);
    
    return  aux;
    }*/