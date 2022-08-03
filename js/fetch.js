'use strict';
console.log('fetch.js');

// local fetch text
// kreipiames gauti vietini faila musu root direktorijoje
fetch('one.txt')
  .then((response) => {
    console.log('response ===', response);
    // istraukti texta is atsakymo
    return response.text();
  })
  .then((data) => console.log('data ===', data))
  .catch((err) => console.log(err));

// gauta texta su fetch ikelti i h1
