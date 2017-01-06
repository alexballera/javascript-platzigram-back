# Practica de construcción de una APP tipo Instagram - Back End

## Instalamos Dependencias

### Dependencias
```bash
npm i -D
```

### Dependencias de Desarrollo
```bash
npm i -S standard babel-eslint
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
