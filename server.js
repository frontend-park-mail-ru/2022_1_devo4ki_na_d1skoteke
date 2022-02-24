'use strict';

const http = require('http');
const fs = require('fs');
const debug = require('debug');

const SERVER_PORT = 3000;

const log = debug('server');
const staticPattern = new RegExp('^[\/]static');

const getMimeType = (filename) => {
    switch (filename.split('.').pop()) {
        case 'js':
            return 'javascript'
        case 'css':
            return 'css'
    }
}

http.createServer(function(req, res) {
    log(req.url);
    
    if (req.url === '/') {
        fs.readFile(`${__dirname}/index.html`, function(err, data) {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data); 
            res.end();
        });
    } else if (staticPattern.test(req.url)) {
        fs.readFile(`${__dirname}${req.url}`, function (err, data) {
            if (err) {
                throw err; 
            }
            res.writeHead(200, { 'Content-Type': `text/${getMimeType(req.url)}` });
            res.write(data);
            res.end();
        });
    }
}).listen(SERVER_PORT);
