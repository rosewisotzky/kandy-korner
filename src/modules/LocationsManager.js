const baseURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${baseURL}/locations/${id}`)
    },
    getAll() {
        return fetch(`${baseURL}/locations`).then(r=>r.json())
    }
}