import http from 'http';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    //res.setHeader('Content-Type', 'text/html');
    //res.statusCode = 404;
   // res.writeHead(500, {'Content-Type': 'application/json'})
    //res.end(JSON.stringify({ message: 'Server Error'}));
    
    try{
        //Check if the request method is GET
        if (req.method === 'GET'){
            if (req.url === '/'){
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end('<h1>Homepage</h1>');
            } else if (req.url === '/about'){
                res.writeHead(200, {'Content-Type' : 'text/html'});
                res.end('<h1>About</h1>');
            } else{
                res.writeHead(404, {'Content-Type' : 'text/html'});
                res.end(`<h1>Not Found</h1>`);
            }
        } else {
            throw new Error('Method not allowed');
        }

    } catch (error){
        res.writeHead(500, {'Content-Type' : 'text/plain'});
        res.end('Server Error');

    }

});


server.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}`)
})

