function checkStatus(response) {
  if(response.status == 500)
    throw new Error(response.statusText)

  return response
}

export function request(method, endpoint, body, {success, error} = {null, null}) {
  return fetch(endpoint, {
    method: method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(checkStatus)
    .then(success)
    .catch(error)
}

export let asyncAction = (fn) => (actionParams) => (dispatch, getState) => fn(dispatch, getState(), actionParams)
