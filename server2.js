import { log } from "console";
import {createServer} from "http"

const PORT = process.env.PORT;

const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Jane'},
    {id: 3, name: 'Bob'},
    {id: 4, name: 'Alice'},
    {id: 5, name: 'Mike'},
    {id: 6, name: 'Sarah'},
    {id: 7, name: 'Tom'},
    {id: 8, name: 'Sara'},
    {id: 9, name: 'Jack'},
    {id: 10, name: 'Jill'},
    {id: 11, name: 'Joe'},
    {id: 12, name: 'Jenny'},
    {id: 13, name: 'Jared'},
    {id: 14, name: 'Jasmine'},
    {id: 15, name: 'Jesse'},
    {id: 16, name: 'Jade'},
    {id: 17, name: 'Jasper'},
    {id: 18, name: 'Jasmine'},
    {id: 19, name: 'Jared'},
    {id: 20, name: 'Jasmine'}
];

//Logger middleware - usually this would be in separate file
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
        if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        const id = req.url.split('/')[3];
        const user = users.find(user => user.id === parseInt(id));
        res.setHeader('Content-Type', 'application/json');
        if (user) {
            res.write(JSON.stringify(user));
            res.end()
        } else{
            res.statusCode = 404;
            res.write(JSON.stringify({message : 'User not found'}));
            res.end();
        }
        
    } else {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 404;
        res.write(JSON.stringify({message : 'Route not found'}));
        res.end();
    }
    })
    
});

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
});
