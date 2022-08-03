'use strict';
console.log('http-fetch.js');

const peopleListEl = document.querySelector('#people');

const url = 'https://jsonplaceholder.typicode.com/users';

// gauti ir atspausdinti consoleje objekta
fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => console.log('dataInJs ===', dataInJs))
  .catch((err) => console.warn(err));

// ideti i html sarasa username, telefono numeri, adreso gatve ir miesta

// atvaizduoti sarasa is visu users zmoniu

// itraukti footeri i musu dokumenta is footer.html
