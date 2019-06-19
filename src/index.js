
//Boton para realizar el cifrado
const botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", mostrarCifrado);

//Boton para realizar el descifrado
const botonDescifrar = document.getElementById("botonDescifrar");
botonDescifrar.addEventListener("click", mostrarDescifrado);

/*/Boton para limpiar
const botonLimpiar = document.getElementById("botonLimpiar");
botonLimpiar.addEventListener("click",);*/

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

/*function limpiar() {
  var ele1 = document.getElementById("textoEntrada").value;
  for (let i = 0; i < ele1.length; i++)
    ele1[i].checked = false;
  var ele2 = document.getElementById("textoSalida").value;
  for (let i = 0; i < ele2.length; i++)
    ele2[i].checked = false;
  }

function cifrar(textoCifrar, desplazamientoCifrar) {
    let palabra = "" + textoCifrar;
    let palabracifrada = "";
    for (let i = 0; i < palabra.length; i++) {
      let posicioncifrada = 0;
      let posicionoriginal = palabra.charCodeAt(i);
      if (posicionoriginal >= 65 && posicionoriginal <= 90) {
        posicioncifrada = (posicionoriginal - 65 + desplazamientoCifrar) % 26 + 65;  
      }
      else if (posicionoriginal >= 97 && posicionoriginal <= 122) {
        posicioncifrada = (posicionoriginal - 97 + desplazamientoCifrar) % 26 + 97;
      } else {
        posicioncifrada = posicionoriginal;
      }
        palabracifrada += String.fromCharCode(posicioncifrada);
      }
    return palabracifrada;
  }
  function descifrar(textoDescifrar, desplazamientoDescifrar) {
    let palabra = "" + textoDescifrar;
    let palabracifrada = "";
    for (let i = 0; i < palabra.length; i++) {
      let posicioncifrada = 0;
      let posicionoriginal = palabra.charCodeAt(i);
      if (posicionoriginal >= 65 && posicionoriginal <= 90) {
        posicioncifrada = (posicionoriginal - 65 - desplazamientoDescifrar) % 26 + 65;  
      }
      else if (posicionoriginal >= 97 && posicionoriginal <= 122) {
        posicioncifrada = (posicionoriginal - 97 - desplazamientoDescifrar) % 26 + 97;
      } else {
        posicioncifrada = posicionoriginal;
      }
        palabracifrada += String.fromCharCode(posicioncifrada);
      }
      return palabracifrada;
  }*/
