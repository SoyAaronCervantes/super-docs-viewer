# DocViewer
DocViewer es una applicación que permite ver documentos en PNG.
La página está hecha con Angular, Angular Material y Firebase, donde se ocuparon únicamente
3 servicios de Firebase: Firestore, Storage y Hosting.

# Solution
La forma de solucionar el Task fue pensado en 2 partes:
 - La primera parte fue crear una aplicación que el usuario pudiera navegar entre los documentos
y desde esa lista poder navegar a un documento en específico.
 - La segunda parte fue hacer que el usuario pudiera guardar y agregar nuevas anotaciones
en el documento. Aquí tuve una idea más hacia el desarrollo movil y me base en la navegación de Google Maps.
Ya que esta ocupa muchos botones FAB, para interacturar con la applicación, ya sea en Webapp o Mobile App
 
# Pros & Cons

## Pros
 - La aplicación al estar conectada a Firestore, tenemos una actualización inmediata de las nuevas annotaciones,
esto también nos da una ventaja, porque solo necesitamos el Id de documento al que estamos agregando las anotaciones,
para poder agregar una nueva.
 - Las anotaciones se pueden integrar con imágenes y texto, la idea era poder hacer las dos funcionalidades en una misma anotación.
Al conocer las referencias de las imagenes de Firebase Storage, es más fácil obtener las imagenes desde ahí
 - Las imagenes / documentes se les puede hacer zoom in y zoom out.

## Cons
En los cons, no era dificil la implementación, pero si era un poco tedioso.
Eso, sumando que me enfermé, no me dió el tiempo necesario para poder acabar la aplicación.

A continuación enlisto, las cosas que faltaron en la aplicación
 - No se puede visualizar las anotaciones
 - No se puede editar las anotaciones
 - No se puede eliminar las anotaciones
 - No se puede hacer el offset entre documentos y tampoco la paginación


## Challenges
 - Dentro de lo más dificil fue la implementación de las anotaciones con imagenes,
nunca había trabajado con los FormData y Angular Material no es muy friendly para ese tipo de campos.
Entonces tuve que utilizar una biblioteca de terceros, para poder apoyarme a la hora de subir archivos.


 - El otro challenge fue Angular Material y sus temas, no recordaba lo dificil que era implementar un color,
o querer obtener el valor de una variable. Tuve que pasar el proyecto de CSS a SCSS a la mitad del desarrollo.
Al final, obte por ocupar el Builder de Material 3, pero no pude implementar el Dark Mode, porque no me dió tiempo,
y aparte te dan los archivos en CSS, para que sea una fácil implementación, pero yo los necesitaba en SCSS, por Angular Material

# Roadmap
  - Mostrar las annotaciones en la imagen
  - Obtener las coordenadas, cuando se hace click dentro de la imagen
  - Escalar las coordenadas, para que se ajusten al zoom y por default, siempre almacenar, las coordenadas cuando el tamaño de la imagen es 100%
  - Hacer el offset entre documentos
  - Implementar el Dark Mode
