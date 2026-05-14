const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    if (req.url === '/' && req.method === 'GET') {

        fs.readFile('messages.txt', (err, data) => {
            let messages = '';
            if (!err) {
                messages = data.toString();
            }
            // convert text lines into HTML
            const formattedMessages = messages
                .split('\n')
                .filter(msg => msg.trim() !== '')
                .map(msg => `<p>${msg}</p>`)
                .join('');

            res.setHeader('Content-Type', 'text/html');

            res.end(`
                <html>
                <head>
                    <title>Messages App</title>
                </head>
                <body>
                    <h1>All Messages</h1>
                    ${formattedMessages}
                    <hr>
                    <form action="/message" method="POST">
                        <input 
                            type="text" 
                            name="message" 
                            placeholder="Enter message"
                        />
                        <button type="submit">
                            Add Message
                        </button>
                    </form>
                </body>
                </html>
            `);
        });
    }
    else if (req.url === '/message' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
     
            const message = decodeURIComponent(
                parsedBody.split('=')[1]
            );
    
            fs.readFile('messages.txt', (err, data) => {
                let oldMessages = '';
                if (!err) {
                    oldMessages = data.toString();
                }

                const updatedMessages =
                    `${message}\n${oldMessages}`;

                fs.writeFile(
                    'messages.txt',
                    updatedMessages,
                    (err) => {
                        res.statusCode = 302;
                        res.setHeader('Location', '/');
                        res.end();
                    }
                );
            });
        });
    }

    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});