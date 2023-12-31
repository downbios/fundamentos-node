import http from 'node:http'

const users = []

const server = http.createServer((req, res) =>{
    const {method, url} = req

    if (method === 'GET' && url === '/users'){
        return res
        .setHeader('Content-type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'ian Adson',
            email: 'ian.adson@example.com.br',
        })
        return res.end('criação de usuário')
    }
        return res.end('hello word')
})

server.listen(3000)