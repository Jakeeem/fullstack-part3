const http = require('http')

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        date: new Date().toString(),
        important: true
    },
    {
        id: 2,
        content: "Browser can only execute JS",
        date: new Date().toString(),
        important: false
    },
    {
        id: 2,
        content: "GET and Post are the most important HTML methods",
        date: new Date().toString(),
        important: true
    }
]

const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(notes))
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

