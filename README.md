## ES NECESARIO INSTALAR NODEJS
Aca se encuentra el link de descarga de la pagina oficial [official download page](https://nodejs.org/en/download/current/).

## ES NECESARIO INSTALAR REDIS
Aca se encuentra el link de descarga de la pagina oficial [official download page](https://nodejs.org/en/download/current/).

## Pasos para ejecutar

* clone the repo
* change directory
* run `npm install`
* run `npm start`
* visit http://localhost:$PORT

## Body Parameters
El API tiene como expectativa de entrada: </br>
`id` of type string </br>
`partNumber` of type int </br>
`name` of type string </br>
`fullImage` of type string </br>
`shortDescription` of type string </br>
`colors` of type string </br>
`SKUs` of type string </br>
`isMarketplaceProduct` of type string </br>
`url` of type string </br>
`monto` of type string </br>

## Heroku para test
El path para probar: https://ripley-test-isaac.herokuapp.com/
Asegurase que el metodo post este seteado con el formato `x-www-form-urlencoded`
* Agregar producto (POST): `/producto/add`
* Borrar producto (DELETE): `/producto/delete/{id}`
* Buscar producto por id (GET): `/producto/{id}`
* Traer todos los productos guardados (GET): `/users

## Usando Postman
Asegurase que el metodo post este seteado con el formato `x-www-form-urlencoded`
* Agregar producto (POST): `/producto/add`
* Borrar producto (DELETE): `/producto/delete/{id}`
* Buscar producto por id (GET): `/producto/{id}`
* Traer todos los productos guardados (GET): `/users`


Saludos Cordiales </br>
Isaac Mundo
