# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [0.5.0] - 2025-10-23

### Añadido
- Función `calcularPromedio(numeros)` para obtener el promedio de una lista de números.
- Opción para "Promedio" en el menú interactivo.
- Tests unitarios para la función `calcularPromedio`.

## [0.4.0] - 2025-10-22

### Añadido
- Función `calcularPorcentaje(a, b)` para obtener el porcentaje de un número sobre otro.
- Opción para "Porcentaje" en el menú interactivo.
- Tests unitarios para la función `calcularPorcentaje`, incluyendo manejo de división por cero.

## [0.3.0] - 2025-10-21

### Añadido
- Función `calcularResto(a, b)` para obtener el módulo de una división.
- Opción para "Resto" en el menú interactivo.
- Tests unitarios para la función `calcularResto`, incluyendo manejo de errores.

## [0.2.0] - 2025-10-04

### Añadido
- Cliente interactivo con menú en loop (`cliente.js`)
- Interfaz de consola con readline para mejor experiencia de usuario
- Mensajes de error para funciones no implementadas
- Formato mejorado de resultados con símbolos matemáticos

## [0.1.0] - 2025-10-04

### Añadido
- Clase `Calculadora` con 6 métodos básicos
- Función `sumar()` completamente implementada
- Suite de tests con 25 casos de prueba
- Mini framework de testing personalizado
- Estructura base del proyecto
- Documentación inicial en código
- Exportación de módulo para Node.js

### Estructura inicial
- `calculadora.js` - Clase principal con funciones
- `calculadora.test.js` - Suite completa de tests
- Tests para todas las operaciones (suma, resta, multiplicación, división, potencia, raíz cuadrada)
- Casos de prueba para números positivos, negativos, decimales y casos especiales