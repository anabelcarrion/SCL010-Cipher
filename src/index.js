let alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789,.";
let desplazamientoDescifrar = document.getElementById("numero2");
let textoDescifrar = document.getElementById("textoDescifradoIngreso");

//bontones de la pagina de inicio donde se selecciona que se quiere hacer
const botonSeleccionarCifrar = document.getElementById("botonSeleccionCifrar");
botonSeleccionarCifrar.addEventListener("click", seleccionPaginaCifrar);

function seleccionPaginaCifrar() {
  document.getElementById("pagina-inicio").style.display = "none";
  document.getElementById("pagina-cifrar").style.display = "block";
}
const botonSeleccionarDescifrar = document.getElementById("botonSeleccionDescifrar");
botonSeleccionarDescifrar.addEventListener("click", seleccionPaginaDescifrar);

function seleccionPaginaDescifrar() {
  document.getElementById("pagina-inicio").style.display = "none";
  document.getElementById("pagina-descifrar").style.display = "block";
}

//botones para regresar a la pagina de inicio
const botonVolverC = document.getElementById("botonVolverC");
botonVolverC.addEventListener("click", botonRegresarPagina1);

function botonRegresarPagina1() {
  document.getElementById("pagina-cifrar").style.display = "none";
  document.getElementById("pagina-inicio").style.display = "block";
}
const botonVolverD = document.getElementById("botonVolverD");
botonVolverD.addEventListener("click", botonRegresarPagina2);

function botonRegresarPagina2() {
  document.getElementById("pagina-descifrar").style.display = "none";
  document.getElementById("pagina-inicio").style.display = "block";
}

//Funcion para cifrar una palabara
function cifrar(textoCifrar, desplazamientoCifrar) {
  let palabra = "" + textoCifrar;
  let palabracifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    let posicionoriginal = alfabeto.indexOf(palabra.substr(i, 1));
    let posicioncifrada = (posicionoriginal + desplazamientoCifrar) % 39;
    palabracifrada += alfabeto.substr(posicioncifrada, 1);
  }
  return palabracifrada;
}
//Funcion para mostrar el texto a cifrar
function mostrarCifrado() {
  let desplazamientoCifrar = document.getElementById("numero1").value;
  let textoCifrar = document.getElementById("textoCifrarIngreso").value.toUpperCase();
  let mostarTextoCifrado = cifrar(textoCifrar, parseInt(desplazamientoCifrar));
  document.getElementById("textoCifrarDevuelto").value = mostarTextoCifrado;
}
//Boton para realizar el cifrado
const botonCifrar = document.getElementById("botonCifrar");
botonCifrar.addEventListener("click", mostrarCifrado);

//Funcion para realizar descifrado
function descifrar(textoDescifrar, desplazamientoDescifrar) {
  let palabra = "" + textoDescifrar;
  let palabracifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    let posicionoriginal = alfabeto.indexOf(palabra.substr(i, 1));
    let posicioncifrada = (posicionoriginal - desplazamientoDescifrar) % 39;
    palabracifrada += alfabeto.substr(posicioncifrada, 1);
  }
  return palabracifrada;
}
//Funcion para mostrar el texto a descifrar
  function mostrarDescifrado() {
  let desplazamientoDescifrar = document.getElementById("numero2").value;
  let textoDescifrar = document.getElementById("textoDescifradoIngreso").value.toUpperCase();
  let mostarTextoDescifrado = descifrar(textoDescifrar, parseInt(desplazamientoDescifrar));
  document.getElementById("textoDescifradoDevuelto").value = mostarTextoDescifrado;
}
//Boton para realizar el cifrado
const botonDescifrar = document.getElementById("botonDescifrar");
botonDescifrar.addEventListener("click", mostrarDescifrado);