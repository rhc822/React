const remoteURL = "http://localhost:5002"

/* This module fetches the employee info from the database with the "get" and "getAll". The "delete" removes an item from the database. */

export default {
  get(id) {
    return fetch(`${remoteURL}/employees/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/employees`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/employees/${id}`, {
      method: "DELETE"
    })
    .then(result => result.json())
  },
  post(new) {
    return fetch(`${remoteURL}/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newEmployee)
    }).then(data => data.json())
  }
}