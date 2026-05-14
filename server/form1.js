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

    else if (req.url === "/message" && req.method === "POST") {

        const body = [];
        
        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];

            fs.writeFile("message.txt", message, (err) => {
                if (err) {
                    console.log(err);
                }

                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});