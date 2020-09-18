# Getting Started

## json-server

---

run `npm init` in an *empty directory*  
add `"start": "node index.js"` to package.json  
add a console log message to ***index.js*** to test it works  
`npm start` to run ***index.js***

**Simple Server code:**

    const http = require('http')

    const app = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Hello World')
    })

    const PORT = 3001
    app.listen(PORT)
    console.log(`Server running on port ${PORT}`)

