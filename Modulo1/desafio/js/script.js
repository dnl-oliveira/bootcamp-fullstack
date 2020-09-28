// Variáveis Globais
var searchButton = null;
var searchInput = null;
var usersFound = null;
var statisticFound = null;
let countInterval = 0;
let loading = null;

window.addEventListener('load', () => {
  searchButton = document.querySelector('#searchButton');
  searchInput = document.querySelector('#searchInput');
  usersFound = document.querySelector('#usersFound');
  statisticFound = document.querySelector('#statisticFound');

  const interval = setInterval(() => {
    countInterval++;

    if (countInterval === 3) {
      loading = document.querySelector('#loading');
      loading.style.display = 'none';
      searchButton.disabled = false;
      searchInput.disabled = false;

      this.clearInterval(interval);
      return;
    }
  }, 1000);

  focusInput(searchInput);

  searchButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (searchInput.value === '') {
      usersFound.innerHTML = '';
      statisticFound.innerHTML = '';
      const notFoundUsers = document.querySelector('#notFoundUsers');
      const notFoundStatistic = document.querySelector('#notFoundStatistic');
      notFoundUsers.innerHTML = 'Nada a ser exibido';
      notFoundStatistic.innerHTML = 'Nada a ser exibido';
    } else {
      fetchUsers()
        .then((results) => {
          const Users = filterUser(results, searchInput.value);
          renderUser(Users);
          renderStatistic(Users);
        })
        .catch((error) => {
          console.group('Falha na Requisição da API');
          console.error(error);
          console.groupEnd();
        });
    }
  });
});

// function buttonClicked(event) {
//   event.preventDefault();

//   if (searchInput.value === '') {
//     usersFound.innerHTML = '';
//     statisticFound.innerHTML = '';
//     const notFoundUsers = document.querySelector('#notFoundUsers');
//     const notFoundStatistic = document.querySelector('#notFoundStatistic');
//     notFoundUsers.innerHTML = 'Nada a ser exibido';
//     notFoundStatistic.innerHTML = 'Nada a ser exibido';
//   } else {
//     fetchUsers()
//       .then((results) => {
//         const Users = filterUser(results, searchInput.value);
//         renderUser(Users);
//         renderStatistic(Users);
//       })
//       .catch((error) => {
//         console.group('Falha na Requisição da API');
//         console.error(error);
//         console.groupEnd();
//       });
//   }
// }

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
  const ApiUsers = json.results.map((user) => {
    // Utilizando destructing
    let {
      picture: { thumbnail },
      name: { first, last },
      dob: { age },
      gender,
    } = user;
    return {
      name: `${first} ${last}`,
      photo: thumbnail,
      age,
      gender,
    };
  });

  return ApiUsers;
}

function focusInput(Event) {
  Event.focus();
}

function filterUser(results, valor) {
  const users = results.filter((person) => {
    return person.name.toLowerCase().includes(valor.toLowerCase());
  });

  return users;
}

function renderUser(users) {
  let listUsersHtml = '<ul style="list-style-type: none;">';
  let countUsers = 0;

  users.forEach((person) => {
    const { name, photo, age, gender } = person;

    const ListAttributeUsers = `
           <li><img class="rounded-circle" src="${photo}" alt="${name}"/> ${name}, ${age}, ${gender}</li>
      `;

    listUsersHtml += ListAttributeUsers;
    countUsers += 1;
  });

  listUsersHtml += '</ul>';
  usersFound.innerHTML = listUsersHtml;
  const notFoundUsers = document.querySelector('#notFoundUsers');
  notFoundUsers.innerHTML = '';

  const resultsFoundUser = document.querySelector('#resultsFoundUser');
  resultsFoundUser.innerHTML = countUsers + ' usuários(s) encontrados()';
}

function renderStatistic(users) {
  let listStatisticHtml = '<ul style="list-style-type: none;">';
  let countMale = 0;
  let countFemale = 0;
  let sumAge = 0;
  let avgAge = 0;
  let countUsers = 0;
  users.forEach((person) => {
    const { age, gender } = person;

    if (gender === 'male') {
      countMale += 1;
    } else {
      countFemale += 1;
    }

    sumAge += age;
    countUsers += 1;
  });
  avgAge = sumAge / countUsers;
  avgAge = avgAge.toFixed(2);
  listStatisticHtml += `
           <li>Sexo Masculino: <b>${countMale}</b></li>
           <li>Sexo Feminino: <b>${countFemale}</b></li>
           <li>Soma das idades: <b>${sumAge}</b></li>
           <li>Média das idades: <b>${avgAge}</b></li>
           </ul>
      `;
  statisticFound.innerHTML = listStatisticHtml;

  const notFoundStatistic = document.querySelector('#notFoundStatistic');
  notFoundStatistic.innerHTML = '';
}
