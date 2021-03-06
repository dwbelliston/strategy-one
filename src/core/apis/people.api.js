function search(query, cb) {
  console.log('search people', query)

  return fetch(`api/people?q=${query}`, {
    accept: "application/json"
  })
    .then(checkStatus)
    .then(parseJSON)
    .then(cb);
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  console.log('>>> response', response)
  return response.json();
}

const PeopleAPI = { search };
export default PeopleAPI;
