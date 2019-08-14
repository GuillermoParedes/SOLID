# SOLID

### Single Responsability Principle - Principio de responsabilidad unica.


- Concepto:
  -  Una clase = Un concepto y responsabilidad
  -  Una clase debería tener sólo 1 razón para cambiar
- Cómo conseguirlo:
  -  Clases pequeñas con objetivos acotados
- Finalidad:
  -  Alta cohesión y robustez
  -  Permitir composición de clases (inyectar colaboradores)
  -  Evitar duplicidad de código

### Open Closed Principle - Principio de Abierto/Cerrado

- Concepto:
    - El Software debería estar abierto a extensión y cerrado a modificación.
    - Esto aplica tanto a nuestras clases internas, servicios, microservicios, casos de usos…
- Cómo conseguirlo:
    - Evitando depender de implementaciones específicas, haciendo uso de clases abstractas o interfaces.
- Finalidad:
    - Facilidad para añadir nuevos Casos de uso en nuestra aplicación.