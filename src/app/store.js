//ESTE SCRIPT STORE ALAMCENA DATOS EN EL STORAGE

//Deseo que cada vez que abra mi pagina me muestre la ultima ciudad visitada para eso debo almacenar los datos en el local storage
export class Store {
    constructor () { //creo mi objeto
        this.city;
        this.countryCode;
        this.defaultCity = 'Ushuaia'; //estos default los coloco en caso de que el usuaro este visitando por primera vez para que le aparezca ya que no ah tipeado ninguna ciudad anteriormente
        this.defaultCountry = 'ar';
    }

    getLocationData () { //permite obtener los datos, es decir será llamado cada vez que yo quiera llamar los datos
        if(localStorage.getItem ('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        
        if(localStorage.getItem('countryCode') === null) {
            this.countryCode = this.defaultCountry;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
    
        return { //debo retornar el valor para que otras partes del codigo puedan leerlo
            city: this.city,
            countryCode: this.countryCode
        }
    
    }

    setLocationData (city, countryCode) { //esto permite guardar el dato osea sera llamado cada vez que cambie el dato solo guarda el ultimo dato recordar eso no es como push que me guardaba una lista
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}