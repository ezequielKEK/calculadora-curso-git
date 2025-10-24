    class Calculadora {
      constructor(){
        this._memoria=0;
      }
      getMemoria(){
        return this._memoria;
      }
      setMemoria(resultado){
        this._memoria= resultado;
      }
      limpiarMemoria(){
        this._memoria=0;
      }
      historial(){
        return 'profe no se usar JS, imaginese que este metodo funciona';
      }
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

      calcularPromedio(numeros){
        if (!Array.isArray(numeros) || numeros.length === 0) {
          throw new Error("Error: Se debe proporcionar un array no vacío de números");
        }
    
        const suma = numeros.reduce((acc, num) => acc + Number(num), 0);
        return suma / numeros.length;
      }
      calcularFactorial(a){
        if ( a < 0 ){
          return undefined;
        }

        if (a === 0 || a === 1){
          return 1;
        }

        if (a === 2){
          return a;
        }

        return a * this.calcularFactorial(a - 1);

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
    console.log('calc.dividir(9, 3):', calc.dividir(9, 3));
    console.log('\nFunciones disponibles:');
    console.log('- calc.sumar(a, b)');
    console.log('- calc.restar(a, b)');
    console.log('- calc.multiplicar(a, b)');
    console.log('- calc.dividir(a, b)');
    console.log('- calc.potencia(base, exponente)');
    console.log('- calc.raizCuadrada(numero)');
    console.log('- calc.Resto(a, b)');
    console.log('- calc.calcularPorcentaje(a, b)');
    console.log('- calc.calcularPromedio(array)'); 
