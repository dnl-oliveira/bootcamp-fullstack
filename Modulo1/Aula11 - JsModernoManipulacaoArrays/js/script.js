'use strinct'; // O javascript acusa mais erros.
// manipulação de arrays
window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}

function doFilter() {
  const olderThan50 = people.results.filter((person) => {
    return person.dob.age >= 50;
  });
  console.log(olderThan50);
}

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize = person.name.title.length + person.name.first.length;
  });

  console.log(mappedPeople);
}

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);
}
//retorna o objeto
function doFind() {
  const found = people.results.find((person) => {
    return (person.location.state = 'São Paulo');
  });
  console.log(found);
}
// retorna true se encontrar o dado
function doSome() {
  const found = people.results.some((person) => {
    return (person.location.state = 'São Paulo');
  });
  console.log(found);
}
// se todos atenderem a regra retorna true
function doEvery() {
  const every = people.results.some((person) => {
    return (person.location.state = 'São Paulo');
  });
  console.log(every);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return { name: person.name.first };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      //return a.name.localeCompare(b.name);
      return a.name.length - b.name.length;
    });
  console.log(mappedNames);
}
