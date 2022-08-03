function fetchMe(url) {
  return fetch(url)
    .then((resp) => {
      if (!resp.ok) throw 'there was error: ' + response.status + ' ' + response.statusText;
      return resp.json();
    })
    .catch((err) => console.warn(err));
}
