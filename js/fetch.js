'use strict';
console.log('fetch.js');

const h1El = document.querySelector('h1');

// local fetch text
// kreipiames gauti vietini faila musu root direktorijoje
fetch('data/two.txt11')
  .then((response) => {
    // response pirminis atsakymas kuriame yra status code, ok, headers ir pan.
    console.log('response ===', response);

    // isitiinti kad uzklausa sekminga
    // response.ok - status 200-299
    if (!response.ok) {
      throw 'there was error: ' + response.status + ' ' + response.statusText;
    }

    // istraukti texta is atsakymo
    return response.text();
  })
  .then((data) => {
    console.log('data ===', data);
    h1El.textContent = data;
  })
  .catch((err) => console.log(err));

// gauta texta su fetch ikelti i h1
// fetch('data/two.txt11')
//   .then((resp) => resp.text())
//   .then((data) => (h1El.textContent = data))
//   .catch((err) => console.log(err));

// fetch and console log user1.json
