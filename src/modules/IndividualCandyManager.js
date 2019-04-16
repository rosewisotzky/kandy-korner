const baseURL = "http://localhost:5002"

export default {
    getAll() {
        return fetch(`${baseURL}/individualCandies`).then(r=>r.json())
    },
    get(id) {
        return fetch(`${baseURL}/individualCandies/${id}`).then(r=>r.json())
    }
}