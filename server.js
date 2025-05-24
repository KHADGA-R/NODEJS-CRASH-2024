import http from 'http';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404;
   // res.writeHead(500, {'Content-Type': 'application/json'})
    //res.end(JSON.stringify({ message: 'Server Error'}));

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1> Hello World </h1>`);
});


server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})

