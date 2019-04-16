const baseURL = "http://localhost:5002"

export default {
    get(id) {
        return fetch(`${baseURL}/employees/${id}`)
    },
    getAll() {
        return fetch(`${baseURL}/employees`).then(r=>r.json())
    }
}