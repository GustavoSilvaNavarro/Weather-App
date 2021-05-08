//MANIPULA EL DOM O LA LOGICA DE MI APP

export class UI { //creo mi clase UI basicamente estan todos mis metodos que voy a utilizar mis funciones y debo exportarlas para leerlas en js principal
    constructor () { //creo un constructor encargado de seleccionar las partes de html que tiene id que voy a usar para llamar (creo un objeto formado por todo el elemento html que eh selecionado con los id)
        this.location = document.querySelector('#weather-location');
        this.description = document.querySelector('#weather-description');
        this.string = document.querySelector('#weather-string');
        this.humidity = document.querySelector('#weather-humidity');
        this.wind = document.querySelector('#weather-wind');
    }

    render (weather) {
        this.location.textContent = weather.name + '/' + weather.sys.country; //le digo que desde el dato que esta guardado en weather al h1 de m html de location le voy a poner el texto o modificar con text Content las propiedades e name y sys
        this.description.textContent = weather.weather[0]['description']; //busco el dato del API para ponerlo en el html 
        this.string.textContent = weather['main']['temp'] + ' °C'; //como es un objeto el API hay dos formas de acceder a sus elementos con [] o con . como en la parte superior agrego el simbolo ya que ese no cmabia
        this.humidity.textContent = 'Humidity: ' + weather['main']['humidity'] + ' %';
        this.wind.textContent = 'Wind: ' + weather['wind']['speed'] + ' m/s';
    }
}