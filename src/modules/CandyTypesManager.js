const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/candyTypes`).then(r=>r.json())
    },
    get(id) {
        return fetch(`${baseURL}/candyTypes/${id}`)
    }
}