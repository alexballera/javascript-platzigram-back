# Practica de construcción de una APP tipo Instagram - Back End

## Instalamos Dependencias

### Dependencias
```bash
npm i -D rethinkdb co bluebird uuid-base62
```

### Dependencias de Desarrollo
```bash
npm i -S standard babel-eslint ava
```
## Standard (Linter)
[https://github.com/feross/standard](https://github.com/feross/standard)

## Babel Eslint
[https://github.com/babel/babel-eslint](https://github.com/babel/babel-eslint)

Agregar un script en **package.json** para utilizar **standard** y como **babel-eslint** como parser a ES6

```javascript
"scripts": {
  "lint": "standard"
},
"standard": {
  "parser": "babel-eslint"
}
```

## Test
### Instalamos AVA
[https://github.com/avajs/ava](https://github.com/avajs/ava)

```javascript
"scripts": {
  "lint": "standard",
  "test": "npm run lint && ava"
}
```

## Base de Datos Retthinkdb
[https://www.rethinkdb.com/](https://www.rethinkdb.com/)

## Instalación Ubuntu
[https://www.rethinkdb.com/docs/install/ubuntu/](https://www.rethinkdb.com/docs/install/ubuntu/)

```bash
source /etc/lsb-release && echo "deb http://download.rethinkdb.com/apt $DISTRIB_CODENAME main" | sudo tee /etc/apt/sources.list.d/rethinkdb.list
```

```bash
wget -qO- https://download.rethinkdb.com/apt/pubkey.gpg | sudo apt-key add -
```

```bash
sudo apt-get update
```

```bash
sudo apt-get install rehinkdb
```

## Levantamos la base de Datos

```bash
rethinkdb
```

y en el navegador ingrasamos en **[http://localhost:8080](http://localhost:8080)**

## Utilizaremos co para simular async/await en es2015
[https://github.com/tj/co](https://github.com/tj/co)

## Utilizaremos bluebird para el manejo de las promesas
[http://bluebirdjs.com/docs/getting-started.html](http://bluebirdjs.com/docs/getting-started.html)

## Encriptar
Utilizamos el modulo crypto de **node**  
Ejecutamos desde la terminal:  
```bash
$ node
> crypto = require('crypto')
> shasum = crypto.createHash('sha256')
> shasum.update('foo123')
> shasum.digest('hex')
```
y así obtenemos el password encriptado  

# "Video 13 Implementado modulo de listar imagenes por usuario"
