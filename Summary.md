# Getting Started

## json-server

---

1. run `npm init` in an *empty directory*  
2. add `"start": "node index.js"` to package.json  
3. add a console log message to ***index.js*** to test it works  
4. `npm start` to run ***index.js***

**Simple Server code:**

    const http = require('http')

    const app = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World')
    })

    const PORT = 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)

---

## Express

---

run `npm install express --save` to add express to ***package.json***