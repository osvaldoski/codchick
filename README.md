Proyecto inyección registro dantesco media.

Descagar el repositorio desde
Git clone https://github.com/osvaldoski/codchick.git

Para iniciar el proyecto necesitas la ultima version de node v14.18.0

Instalar las dependencias correspondientes
npm install

Una vez instalado todo debes ejecutar desde la raiz del proyecto
node .\index.js

Finalmente puede modificar el codigo para ejecutar la automatizacion las veces que estimes convenientes :)


//Vulnerabilidades encontradas

//no valida campos

//script injection->los campos no validan el ingreso de solo texto y etiqueta <script/>

//no valida spam injection

//probable denegacion de servicios

//validacion de largo campos->denegacion bd

//posible baneo de mercado pago por abuso de api (nuevo cliente = nuevo pago)

