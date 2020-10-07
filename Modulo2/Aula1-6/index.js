//commomJS
//const operacoes = require('./operation.js').default;
//const division = require('./operation2.js').default;

//ES6 Module - Incluir no packge.json o "type": "module"
import operacoes from './operation.js';
import division from './operation2.js';
import { multiplicacao, resto } from './operacoesNomeadas.js';

console.log(operacoes.sum(2, 3));
console.log(operacoes.minus(2, 3));
console.log(division(10, 2));
console.log(multiplicacao(10, 5));
console.log(resto(10, 3));
