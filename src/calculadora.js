class Calculadora {
  sumar(a, b) {
    return a + b;
  }

  restar(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    return a / b;
  }

  potencia(base, exponente) {
    return Math.pow(base, exponente);
  }

  raizCuadrada(numero) {
    return Math.sqrt(numero);
  }

  calcularResto (a, b){
    if (b === 0) {
      throw new Error("Error: El divisor (b) no puede ser 0");
    }
    return a % b;
  }

  calcularPorcentaje(a, b) {
    if (b === 0) {
      throw new Error("Error: No se puede calcular el porcentaje sobre cero (b no puede ser 0)");
    }
    return (a / b) * 100;
  }

  encontrarMaximo(numeros) {
    if (!numeros || numeros.length === 0) {
      throw new Error("Error: El array de números no puede estar vacío");
    }
    return Math.max(...numeros);
  }
}

// Exportar para usar en tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Calculadora;
}

// Para usar en consola de Node.js
const calc = new Calculadora();

console.log('=== Calculadora Simple ===');
console.log('Ejemplo de uso:');
console.log('calc.sumar(5, 3):', calc.sumar(5, 3));
console.log('calc.restar(10, 6):', calc.restar(10, 6));
console.log('calc.multiplicar(2, 3):', calc.multiplicar(2, 3));
console.log('\nFunciones disponibles:');
console.log('- calc.sumar(a, b)');
console.log('- calc.restar(a, b)');
console.log('- calc.multiplicar(a, b)');
console.log('- calc.dividir(a, b)');
console.log('- calc.potencia(base, exponente)');
console.log('- calc.raizCuadrada(numero)');
console.log('- calc.Resto(a, b)');
console.log('- calc.calcularPorcentaje(a, b)');
console.log('- calc.encontrarMaximo(array)');