//import fs from 'fs';
// import utilizando promises
import { promises as fs, write } from 'fs';
//init();
async function init() {
  try {
    await fs.writeFile('teste3.txt', 'bla bla bla 3\n');
    await fs.appendFile('teste3.txt', 'teste append file');
    const data = await fs.readFile('teste3.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

//aula 1.6.3 Escrever e ler json
writeReadJson();
async function writeReadJson() {
  try {
    const arrCarros = ['Gol', 'Palio', 'Uno'];
    const objCarro = { carros: arrCarros };
    await fs.writeFile('teste.json', JSON.stringify(objCarro));
    const data = await fs.readFile('teste.json', 'utf-8');
    var arrCarros2 = JSON.parse(data);
    console.log(data);
    arrCarros2.carros.push('Sandero');
    console.log(arrCarros2);
    await fs.writeFile('teste.json', JSON.stringify(arrCarros2));
  } catch (err) {
    console.log(err);
  }
}

/* //Promises hell
fs.writeFile('teste3.txt', 'bla bla bla 3\n')
  .then(() => {
    fs.appendFile('teste3.txt', 'teste append file')
      .then(() => {
        fs.readFile('teste3.txt', 'utf-8')
          .then((resp) => {
            console.log(resp);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
*/
//Utilizando callback
/*fs.writeFile('teste.txt', 'bla bla bla\n', function (err) {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('teste.txt', 'teste append file', (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile('teste.txt', 'utf-8', (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});

//Utilizando forma sincrona, nao recomendado pois trava o event loop, só vai para o proximo passo depois que terminar.
try {
  fs.writeFileSync('teste2.txt', 'bla bla bla 2\n');
  const data = fs.readFileSync('teste2.txt', 'utf-8');
  console.log(data);
} catch (err) {
  console.log(err);
}
*/
