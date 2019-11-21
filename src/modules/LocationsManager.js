const remoteURL = "http://localhost:5002"

/* This module fetches the location info from the database */

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(result => result.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(result => result.json())
  },
  delete(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE"
    })
  }
}