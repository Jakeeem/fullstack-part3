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
        id: 3,
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

// REST route for fetching single resource
app.get('/api/notes/:id', (req, res) => {
    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)

    if(note){
        res.json(note)
    } else {
        res.status(404).end()
    }
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

