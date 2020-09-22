var a = 10;
var b = 10;

if (a > b) {
  console.log(a + ' é maior que ' + b);
} else {
  if (a < b) {
    console.log(a + ' é menor que ' + b);
  } else {
    console.log(a + ' é igual a ' + b);
  }
}

var dia = 1;
var resposta;
switch (dia) {
  case 1:
    resposta = 'Domingo';
    break;
  case 2:
    resposta = 'Segunda';
    break;
  case 3:
    resposta = 'Terça';
    break;
  case 4:
    resposta = 'Quarta';
    break;
  case 5:
    resposta = 'Quinta';
    break;
  case 6:
    resposta = 'Sexta';
    break;
  case 7:
    resposta = 'Sábado';
    break;
  default:
    resposta = 'Dia inválido';
}
console.log(resposta);

a = 6;
b = 7;
//operador ternario
var resp = a > b ? 'maior' : a < b ? 'menor' : 'igual';
console.log(resp);

// Estruturas de repetição
var numeroAtual = 1;
var somatorio = 0;
// while
while (numeroAtual <= 10) {
  somatorio += numeroAtual;
  numeroAtual++;
}
console.log('A soma é: ' + somatorio);

somatorio = 0;
numeroAtual = 1;
// do while
do {
  somatorio += numeroAtual;
  numeroAtual++;
} while (numeroAtual <= 10);

console.log('A soma é: ' + somatorio);
somatorio = 0;
// for
for (numeroAtual = 1; numeroAtual <= 10; numeroAtual++) {
  somatorio += numeroAtual;
}

console.log('A soma é: ' + somatorio);
