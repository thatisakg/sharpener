const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");

        res.end(`
            <form action="/message" method="POST">
                <label>Enter Message:</label>
                <input type="text" name="message" />
                <button type="submit">Send</button>
            </form>
        `);
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});