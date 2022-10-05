# Prueba de Wingsoft para el puesto de Desarrolador FullStack
# Ingeniero en Computacion Fernando Pacheco
## Correo: fercho0281@gmail.com

## Descipcion:
Pequeno sistema para la getion de un Blog de publicaciones.

## Frameworks Utilizados:
- ### ReactJs en su version 18.2.0.
- https://reactjs.org/
- ### NestJs en su version 9.0.0 (basado en node y express con typeStript).
- https://docs.nestjs.com/

## Consideraciones Generales para que el sistema funcione correctamente:
- version de node utilizada 16.13.4.
- la base de datos utilizada es MySql.
- hacer instalacion de las dependencias en el proyecto frontend y el backend mediante el comando npm i en su respectiva carpeta mediante la consola.
- hacer la restauracion de la copia de de la base de datos desde el archivo backup.sql.
- por parte de proyecto de backend se debe configurar un archivo .env con los valores sencibles necesarios tales como el host de la bsase de datos y sus credenciales, asi como el app key para la encriptacion jwt, en el archivo .env.example puede tomar referencia de todos los valores necesarios para la configuracion del proyecto, dicho archivo debe estar al mismo nivel que el archivo de ejemplo antes nombrado.
- para inicializar cada proyecto se debe abrir una consola en la raiz de cada uno y correr el seguiente comando para ambos npm run start.
- el proyecto del backend funciona en la siguiente direccion http://localhost:3001.
- el proyecto del frontend funcciona en la siguiente direccion http://localhost:3000.

## Consideraciones para el uso de los usuarios:
- las contrasenas de los usuarios estan encriptadas mediante un hash por lo tanto en la base de datos no se mostrara su correspodiente valor correcto.
- los usuarios existente en la plataforma son los siguientes con sus correspondientes contrasenas:
- correo: admin@correo.com contrasena: admin123456 (administador del sistema).
- correo: user1@correo.com contrasena: 123456
- correo: user2@correo.com contrasena: 123456
- correo: user3@correo.com contrasena: 123456