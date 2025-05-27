import { log } from "console";
import {createServer, get} from "http"

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

// JSON middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
     res.write(JSON.stringify(users));
        res.end();
};

// Route handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find(user => user.id === parseInt(id));
       if (user) {
            res.write(JSON.stringify(user));
            res.end()
        } else{
            res.statusCode = 404;
            res.write(JSON.stringify({message : 'User not found'}));
            res.end();
        }
}

// Route handlder for POST /api/users

const createUserHandler = (req, res) => {
    let body = '';
    //Listen for data
    req.on('data', (chunk) => {
        body += chunk.toString();
    });
    //Listen for end
    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    })

}


// Route handler for 404 Not Found
const notFoundHandler = (req, res) => {
    res.statusCode = 404;
    res.write(JSON.stringify({message : 'Route not found'}));
    res.end();
}

const server = createServer((req, res) => {
    logger(req, res, () => {
       if (req.url === '/api/users' && req.method === 'GET') {
        getUsersHandler(req, res);
       } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET'){
        getUserByIdHandler(req, res);
       } else if(req.url === '/api/users' && req.method === 'POST'){
        createUserHandler(req, res);

       }
        else{
        notFoundHandler(req, res);
       }
    })
    
});

server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
});
