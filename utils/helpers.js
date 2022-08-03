function http(url) {
  return fetch(url)
    .then((resp) => {
      if (!resp.ok)
        throw new Error(
          'there was error: ' + resp.status + ' ' + resp.statusText + ' geting ' + url
        );
      return resp.json();
    })
    .catch((err) => console.warn(err));
}
