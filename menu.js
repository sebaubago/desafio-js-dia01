const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function mostrarMenu() {
  console.log("\n=== Menú ===");
  console.log("1. Comparar valores");
  console.log("2. Salir");
  
  rl.question("Elige una opción: ", function(opcion) {
    if (opcion === "1") {
      pedirValores();
    } else if (opcion === "2") {
      console.log("¡Hasta luego!");
      rl.close();
    } else {
      console.log("Opción no válida. Intenta de nuevo.");
      mostrarMenu();
    }
  });
}

function pedirValores() {
  rl.question("Ingresa el primer valor: ", function(valor1) {
    rl.question("Ingresa el segundo valor: ", function(valor2) {
      compararValores(valor1, valor2);
      mostrarMenu();
    });
  });
}

function compararValores(valor1, valor2) {
  if (valor1 == valor2) {
    console.log(`Los valores "${valor1}" y "${valor2}" tienen el mismo valor, pero pueden ser de diferente tipo.`);
  } else {
    console.log(`Los valores "${valor1}" y "${valor2}" son diferentes.`);
  }

  if (valor1 === valor2) {
    console.log(`Los valores "${valor1}" y "${valor2}" tienen el mismo valor y el mismo tipo.`);
  } else {
    console.log(`Los valores "${valor1}" y "${valor2}" tienen tipos diferentes.`);
  }
}

// Iniciar el menú
mostrarMenu();
