###### Install NodeJS
    https://nodejs.org/es/

Install Nodemon (Cambios en tiempo de ejecución)
```
npm install -g nodemon
nodemon app
```

Declaración de variables con:
var name -> se puede declarar e inicializar varias veces
let name -> solo se crea, inicializa una sola vez, pero su valor se puede asignar varias veces, ES MAS SEGURO let

'module' and 'process' es un objeto global disponible en toda la aplicación
```
Module {
    id: '.',
    path: '/Users/JohnM/Documents/John/Courses/Udemy/Node - De cero a experto/03-bases-node',
    exports: {},
    parent: null,
    filename: '/Users/JohnM/Documents/John/Courses/Udemy/Node - De cero a experto/03-bases-node/app.js',
    loaded: false,
    children: [],
    paths: [
        '/Users/JohnM/Documents/John/Courses/Udemy/Node - De cero a experto/03-bases-node/node_modules',
        '/Users/JohnM/Documents/John/Courses/Udemy/Node - De cero a experto/node_modules',
        '/Users/JohnM/Documents/John/Courses/Udemy/node_modules',
        '/Users/JohnM/Documents/John/Courses/node_modules',
        '/Users/JohnM/Documents/John/node_modules',
        '/Users/JohnM/Documents/node_modules',
        '/Users/JohnM/node_modules',
        '/Users/node_modules',
        '/node_modules'
    ]
}
```

Nota: process.argv contiene los parametros por defecto que se envian en el llamado por consola de una archivo js.

Para crear el package.json e iniciar node
```
npm init
```

Instalar paquetes del package.json
```
npm install
```

El paquete 'yargs' me permite recibir parametros de entrada, definir ayudas y capturar los parametros especificamente por nombre
```
npm install yargs --save
``` 
(--save se usa para definir paquetes que son requeridos)

Instalar un paquete
```
npm install --save-dev nodemon
``` 
(--save-dev se usa para definir paquetes que son requeridos solo para el desarrollo)
```
npm install yargs --save
``` 
(--save se usa para definir paquetes que son requeridos)

Desinstalar un paquete
```
npm uninstall nodemon
```

NOTA: Nunca subir el node_modules a un repositorio, usar un .gitignore

###### Run the exercise 3
```
cd 03-bases-node/
npm install
node app create --base 50 --limit 50
node app list --base 50 --limit 50
```

## To-Do (04-ToDo)

```
# Iniciamos un proyecto de NodeJS e instalamos todas las dependencias
npm install

# Ejecutamos la aplicación
node app crear -d "Comer"
node app listar
node app actualizar -d "Comer" -c true
node app borrar -d "Comer"
```

## Clima Mundo (05-clima-mundo)

```
# Iniciamos un proyecto de NodeJS e instalamos todas las dependencias
npm install

# Registrarse para obtener API key
https://rapidapi.com/dev132/api/city-geo-location-lookup

# Ejecutamos la aplicación
```