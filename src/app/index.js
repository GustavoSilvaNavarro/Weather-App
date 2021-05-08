//ESTE SCRIPT INICIA TODA MI APLICACIÓN

//Llamo a la clase exportado que obtiene los datos de la API del clima
const { Weather } = require ('./weather'); //de esta manera importo y guardo mi clase para utilizarla de manera rapida y sencilla asi la puedo instanciar
const { UI } = require('./UI'); //Llamo a mi interfaz o mejor diccho a la clase UI
const { Store } = require('./store'); //llamo a mi clase diseñada en archivo sotre.js

//Ejecuto las clases importadas
const ui = new UI (); //de esta manera ejecuto la clase exportada la empiezo a instanciar y al ejecutarla recibe dos parametros lo guardo en una constante
const store = new Store (); //llamo la clase
const { city, countryCode } = store.getLocationData (); //traigo los valores del store tanto del city como del countryCode
const weather = new Weather (city, countryCode);

//Llamo a mis archivos de css
require('./index.css'); //de esta forma cargo mis archivos CSS con webpack ya que uso reglas de webpack no lo pongo en el html

//Inicio mi app llamando el DOM

async function fetchWeather () { //funcion que me ayudara a obetenr el clima la ejecuto cuando el contenido a sido cargado
    const data = await weather.getWeather (); //recordar que este es un metod asincrono en el otro js por lo que toma tiempo, debo poner el async y await aqui digo al obtener los datos de la clase exportado lo llamo usando el metodo descrito de getweather
    console.log(data);
    ui.render (data);
}

//Añado otro evento cuando presiono el boton del formulario
document.querySelector('#w-change-btn').addEventListener('click', changeTemp);

//funcion para cmabiar y city y countryCode y llamar los datos actualizados
function changeTemp (e) { //quiero que el botn tenga evento click y ejecute la funcion qeu es basicamente obtener el valor de lo escrito
    const city = document.querySelector('#city').value;
    const countryCode = document.querySelector('#countryCode').value;
    weather.changeLocation(city, countryCode); //aca solo cambio los nombres o propiedades de city y coutryCode pero para cmabiar en la app del clima debo llamar los datos de nuevo con fetch

    store.setLocationData(city, countryCode);//Además voy a guardar los datos que introduzca en el local storage del navegador
    
    fetchWeather(); //cuando cambio el city y countryCode llamo de nuevo los datos por lo que debo ejecutar la función de nuevo

    document.querySelector('#w-form').reset();
    e.preventDefault();
};

//Lamo el contenido que esta en UI
document.addEventListener ('DOMContentLoaded', fetchWeather); //capturo el evento llamado DOMcontent para saber cuando el contenido se ah caragdo