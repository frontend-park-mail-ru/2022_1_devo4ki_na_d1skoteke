const express = require('express');
const routes = require('./routes/routes')

const app = express();

app.set('view engine', 'pug');
app.use('/', routes);
// const pug = require('pug');

// app.get('/', (req, res) => {
//   // const compFunc = pug.compileFile('Enter.pug');
//   // console.log(compFunc);
//   res.render('Enter.pug', {
//     ENTER_TYPE: 'login',
//     inputForms: [
//       {
//         labelname: 'Email',
//         type: 'email',
//         name: 'email',
//         placeholder: 'Enter email',
//       },
//       {
//         labelname: 'Password',
//         type: 'password',
//         name: 'password',
//         placeholder: 'Enter password',
//       },
//     ],
//   });
// });

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  console.log(`Server listening port ${SERVER_PORT}`);
});

// ////////////////////////////
// export const pug = require('pug');
//
// const http = require('http');
// const fs = require('fs');
// const debug = require('debug');
//
// const SERVER_PORT = 3000;
//
// const log = debug('server');
// const staticPattern = /^[/]public/;
//
// const getMimeType = (filename) => {
//   switch (filename.split('.').pop()) {
//     case 'js':
//       return 'javascript';
//     case 'css':
//       return 'css';
//     default:
//   }
//   return 'err';
// };
//
// http.createServer((req, res) => {
//   log(req.url);
//
//   if (req.url === '/') {
//     fs.readFile(`${__dirname}/public/index.html`, (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(200, { 'Content-Type': 'text/html' });
//       res.write(data);
//       res.end();
//     });
//   } else if (staticPattern.test(req.url)) {
//     fs.readFile(`${__dirname}${req.url}`, (err, data) => {
//       if (err) {
//         throw err;
//       }
//       res.writeHead(200, { 'Content-Type': `text/${getMimeType(req.url)}` });
//       res.write(data);
//       res.end();
//     });
//   }
// }).listen(SERVER_PORT);
