const express = require('express')
const app = express()

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

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

