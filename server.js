var http = require('http');

var server = http.createServer(function(req, res) {
    res.setHeader('Content-Type', 'text/html;charset=utf8');
    
    if (req.url == '/about') {
        res.write('<h1>About</h1>')
        res.write('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>')
    } else {
        res.write('<h1>Välkommen till Pix medlemmen James Frihs hemsida</h1>');
        res.write('<p>Klicka <a href="/about">här</a> för att veta mer</p>');
    }

    res.end();
    
});

server.listen(8080);

console.log("Server running on port 8080");