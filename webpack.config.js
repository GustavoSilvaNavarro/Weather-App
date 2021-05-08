const path = require('path'); //llamo a modulo path para usar el __dirname
const HtmlWebpackPlugin = require('html-webpack-plugin'); // llamo a modulo para usar el html-webpack-plugin

module.exports = { //codigo de webpack para configurar mi carpeta con codigo de producción
    entry: './src/app/index.js', //mi entrada de donde jalo mi archivo para llevarlo a carpeta de codigo de produccion y este al enlazarse con todos los demas los jalo tmabien
    
    output: { //al tomar los datos de la entrada los debo llevar a una carpeta o 
        path: path.join(__dirname, 'dist'), //le doy la dirección de donde crear la carpeta de nombre dist
        filename: 'bundle.js' //y le dijo que dentro de esa carpeta cree archivo de nombre 'bundle.js'
    },
    
    devServer:{ //creo un servidor porporcionado por webpack
        port: 3000, //le configuro el puerto

    },

    module: { //como voy a usar CSS quiero configurar mi CSS para cargarlo, debo usar herramienta modules para llamarlos
        rules: [ //y coloco las reglas a utilizar
            { //dentro de reglas cada regla configurada es un objeto de javascript
                test: /\.css$/, //digo testea todos mis archivos que termina con css
                use: [ //para cargarlo vas a usar los dos modulos css-loader y style-css me sirve para llamar el codigo y convertirlo
                    'style-loader',
                    'css-loader',
                ],
            },
        ],
    },

    plugins: [ //esto permite copiar un archivo html de un directorio a otro pero le debo decir donde esta el archivo html a copiar
        new HtmlWebpackPlugin ({
            template: './src/index.html', //aqui le digo donde esta el archivo html que debe copiar
        }),
    ],
};