let http = require('http');

let server = http.createServer();
server.listen(8080, () => {
    console.log('server is running port 8080');
});