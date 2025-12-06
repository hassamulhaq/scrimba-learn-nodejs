import http from "node:http"

const PORT = 8080
const server = http.createServer((req, res) => {
    res.end('Hello from node server')
});

server.listen(PORT, () => {
    console.log("Hi")
})
