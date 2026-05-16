const http = require('http');
const routes = require('./routes');

routes.otherFunction(); // This will call the anotherFunction from routes.js

const server = http.createServer(routes.requestHandler);

server.listen(3000, () => {
    console.log('Server running on port 3000');
});