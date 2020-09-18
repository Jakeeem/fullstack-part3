# Getting Started

## json-server

---

1. run `npm init` in an *empty directory*  
2. add `"start": "node index.js"` to package.json  
3. add a console log message to ***index.js*** to test it works  
4. `npm start` to run ***index.js***

**Simple json-server code:**

    const http = require('http')

    const app = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World')
    })

    const PORT = 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)


## Express

---

1. run `npm install express --save` to add express to ***package.json***  
    - Dependencies can be updated using `npm update`
    - `npm install` will install all dependencies described in ***package.json***

**Simple Express server code:**

    const express = require('express')
    const app = express()

    let notes = [
        ...
    ]

    app.get('/', (req, res) => {
        res.send('<h1>Hello World!</h1>')
    })

    app.get('/api/notes', (req, res) => {
        res.json(notes)
    })

    const PORT = 3001
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT})
    })

- nodemon reloads project after changes are made (requires browser refresh)
    - `npm install --save-dev nodemon`
    - dev dependencies are only used during development
- add `"dev": "nodemon index.js"` to package.json
- Use `npm run dev` to run nodemon

## REST

---

### Representational State Transfer

- Singular things are called *resources* with associated URLs
- Create the URL by combining the name of the resource *type* with the resource's UID
- Assume the URL is www.example.com/api
- The address of a note with a UID of *10* and a resource type of *notes* would be www.example.com/api/notes/10
- This is defined as a *Uniform Interface* in REST; a consistent way of defining interfaces makes it possible for systems to cooperate.

REST route for fetching a single resource:

    app.get('/api/notes/:id', (req, res) => {
        const id = Number(req.params.id)
        const note = notes.find(note => note.id === id)

        if(note){
            res.json(note)
        } else {
            res.status(404).end()
        }
    })

## Debugging
---
The following code will print the note's value and its type to the console

    console.log(note.id, typeof note.id, id, typeof id, note.id === id)

## Rest Requests
Make `.rest` files to check requests to a URL from the comfort of VS Code!

    GET http://localhost:3001/api/notes

