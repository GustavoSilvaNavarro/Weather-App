//ESTE ESCRIPT SERA EL ENCARGADO DE PEDIR LOS DATOS DEL CLIMA AL API 
export class Weather { //exporto mi nueva clase que es un constructor de objetos
    constructor (city, countryCode) { //creo mi objeto con tres elementos
        this.apikey = '06708ac74255ee89df16b9a7a3c439a5'; // como la info la voy a obtener del API pongo mi API key para poderlo utlizar este viene de openweathermap para poder hacer tatas peticiones como quiera
        this.city = city;
        this.countryCode = countryCode;
    }

    //super importante revisar le https siempre ponerlo asi sino a veces no puede funcionar
    async getWeather() { //metodo que lo voy a utilizar cada vez que yo quiera obtener los datos de una determinada ciudad
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`; //al final agreo el &units=metric para convertir lo datos en el sistema metrico //guardo el url de la API poniendo el &appid = apikey para que funcione el API
        const response = await fetch(URI);//Metodo en javascript que nos permite hacer peticiones // pero esto va a tomar tiempo para tomar datos es codigo asincrono lo manejo con async y await
        const data = await response.json();//para que pueda leer la funcion fetch debo enviarle los datos ya convertido en JSOn para eso los convierto como tambien toma tiempo le coloco el await
        return data; //retorno el dato almacenado
    }

    changeLocation (city, countryCode) { //con este metodo cambio estas dos propiedades que las van a recibir del usuario cuando envie su formulario
        this.city = city;
        this.countryCode = countryCode;
    }
}