const http = require('http');
const url = require('url');
const fs = require('fs');

let fsData = fs.readFileSync('./dev-data/data.json', 'utf8')
   JSON.parse(fsData)
    //res.end(data);


const server = http.createServer((req, res) => {
    console.log(req.url)
    const pathname = req.url //url.parse(req.url).pathname;
    if (pathname === '/' || pathname === '/overview') {
        res.end('This is overview page');

    }else if (pathname === '/product') {
        res.end('This is product page');
    } else if (pathname === '/dorri') {
        res.end('He is the BEST');

    } else if (pathname === '/api') {
        fs.readFile('./dev-data/data.json', 'utf8', (err, data) => {
            res.writeHead(200, { 'Content-type': 'application/json' });
            res.end(data);
        });
    }

    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-header': 'amir-dorri'
        });
        res.end('<h2>Page not found!</h2>');
    }


});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server started on port 8080');
});