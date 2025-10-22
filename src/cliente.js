const readline = require('readline');
const Calculadora = require('./calculadora');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const calc = new Calculadora();

function mostrarMenu() {
  console.log('\n=================================');
  console.log('     CALCULADORA INTERACTIVA     ');
  console.log('=================================');
  console.log('1. Sumar');
  console.log('2. Restar');
  console.log('3. Multiplicar');
  console.log('4. Dividir');
  console.log('5. Potencia');
  console.log('6. Raíz Cuadrada');
  console.log('7. Resto');
  console.log('8. Porcentaje (a de b)');
  console.log('9. Encontrar Máximo de una lista');
  console.log('0. Salir');
  console.log('=================================');
}

function pedirNumero(mensaje) {
  return new Promise((resolve) => {
    rl.question(mensaje, (respuesta) => {
      const numero = parseFloat(respuesta);
      // Si la respuesta está vacía pero no es para pedir un número, devolvemos null
      if (respuesta.trim() === '' && !isNaN(numero)) {
        resolve(null);
      }
      resolve(numero);
    });
  });
}

async function operacionDosNumeros(operacion, nombreOperacion) {
  const num1 = await pedirNumero('Ingrese el primer número: ');
  const num2 = await pedirNumero('Ingrese el segundo número: ');
  
  try {
    const resultado = operacion(num1, num2);
    
    if (resultado === undefined) {
      console.log(`\n⚠️  La función ${nombreOperacion} aún no está implementada`);
    } else {
      console.log(`\n✓ Resultado: ${getResultadoFormateado(nombreOperacion, num1, num2, resultado)}`);
    }
  } catch (error) {
    console.log(`\n⚠️  Error: ${error.message}`);
  }
}

async function operacionUnNumero(operacion, nombreOperacion) {
  const num = await pedirNumero('Ingrese el número: ');
  
  const resultado = operacion(num);
  
  if (resultado === undefined) {
    console.log(`\n⚠️  La función ${nombreOperacion} aún no está implementada`);
  } else if (isNaN(resultado)) {
    console.log(`\n⚠️  Error: Operación inválida (resultado: NaN)`);
  } else {
    console.log(`\n✓ Resultado: √${num} = ${resultado}`);
  }
}

async function operacionConArray(operacion, nombreOperacion) {
  const numeros = [];
  let continuar = true;

  console.log('Ingrese los números uno por uno. Presione ENTER (sin escribir nada) para terminar.');

  while (continuar) {
    const input = await new Promise(resolve => {
      rl.question(`Número ${numeros.length + 1}: `, resolve);
    });

    if (input.trim() === '') {
      continuar = false;
    } else {
      const numero = parseFloat(input);
      if (!isNaN(numero)) {
        numeros.push(numero);
      } else {
        console.log('Entrada inválida. Por favor, ingrese un número.');
      }
    }
  }

  const resultado = operacion(numeros);
  console.log(`\n✓ El número máximo de la lista [${numeros.join(', ')}] es: ${resultado}`);
}

function getSimboloOperacion(nombre) {
  const simbolos = {
    'suma': '+',
    'resta': '-',
    'multiplicación': '×',
    'división': '÷',
    'potencia': '^',
    'resto': '%',
    'porcentaje': '' // El formato es especial
  };
  return simbolos[nombre] || '';
}

function getResultadoFormateado(nombre, a, b, res) {
  if (nombre === 'porcentaje') {
    return `${a} es el ${res.toFixed(2)}% de ${b}`;
  }
  const simbolo = getSimboloOperacion(nombre);
  return `${a} ${simbolo} ${b} = ${res}`;
}

async function ejecutarOpcion(opcion) {
  switch(opcion) {
    case '1':
      await operacionDosNumeros(
        (a, b) => calc.sumar(a, b),
        'suma'
      );
      break;
    
    case '2':
      await operacionDosNumeros(
        (a, b) => calc.restar(a, b),
        'resta'
      );
      break;
    
    case '3':
      await operacionDosNumeros(
        (a, b) => calc.multiplicar(a, b),
        'multiplicación'
      );
      break;
    
    case '4':
      await operacionDosNumeros(
        (a, b) => calc.dividir(a, b),
        'división'
      );
      break;
    
    case '5':
      const base = await pedirNumero('Ingrese la base: ');
      const exponente = await pedirNumero('Ingrese el exponente: ');
      const resultadoPot = calc.potencia(base, exponente);
      
      if (resultadoPot === undefined) {
        console.log('\n⚠️  La función potencia aún no está implementada');
      } else {
        console.log(`\n✓ Resultado: ${base}^${exponente} = ${resultadoPot}`);
      }
      break;
    
    case '6':
      await operacionUnNumero(
        (num) => calc.raizCuadrada(num),
        'raíz cuadrada'
      );
      break;
    case '7': 
      await operacionDosNumeros(
        (a, b) => calc.calcularResto(a, b),
        'resto'
      );
      break;
    case '8':
      await operacionDosNumeros(
        (a, b) => calc.calcularPorcentaje(a, b),
        'porcentaje'
      );
      break;
    case '9':
      await operacionConArray(
        (numeros) => calc.encontrarMaximo(numeros),
        'máximo de un array'
      );
      break;
    
    case '0':
      console.log('\n¡Hasta luego! 👋');
      rl.close();
      return false;
    
    default:
      console.log('\n⚠️  Opción inválida. Por favor intente nuevamente.');
  }
  
  return true;
}

async function iniciar() {
  let continuar = true;
  
  while (continuar) {
    mostrarMenu();
    
    const opcion = await new Promise((resolve) => {
      rl.question('\nSeleccione una opción: ', resolve);
    });
    
    continuar = await ejecutarOpcion(opcion);
  }
}

// Iniciar el cliente
console.log('Bienvenido a la Calculadora Interactiva');
iniciar();