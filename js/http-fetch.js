'use strict';
console.log('http-fetch.js');

const peopleListEl = document.querySelector('#people');

const url = 'https://jsonplaceholder.typicode.com/users';

// gauti ir atspausdinti consoleje objekta
fetch(url)
  .then((resp) => resp.json())
  .then((dataInJs) => {
    console.log('dataInJs ===', dataInJs);
    // addItemToList(dataInJs);
    dataInJs.forEach(addItemToList);
  })
  .catch((err) => console.warn(err));

// http(url).then((data) => {
//   console.log('data ===', data);
// });

// ideti i html sarasa username, telefono numeri, adreso gatve ir miesta
function addItemToList(item) {
  const liEl = document.createElement('li');
  liEl.textContent = `Username: ${item.username}. Tel: ${item.phone}. Street: ${item.address.street}, ${item.address.city}`;
  peopleListEl.append(liEl);
}
// atvaizduoti sarasa is visu users zmoniu

// itraukti footeri i musu dokumenta is footer.html
fetch('data/footer.html')
  .then((resp) => resp.text())
  .then((footerHtml) => document.body.insertAdjacentHTML('beforeend', footerHtml));

// https://reqres.in/api/users?page=1
// pasissiusti vartotoju masyva
// sugeneruoti graziu korteliu pavidalus user cardus
// 3 per ploti. css aprasyti style.css
