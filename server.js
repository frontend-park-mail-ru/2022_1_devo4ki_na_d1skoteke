const express = require('express');
const path = require('path');

const app = express();

const pug = require('pug');
const fs = require('fs');

app.set('view engine', 'pug');

// app.set('view engine', 'pug');

const compileTemplate = () => {
  const tmplName = 'NoteContent';
  const componentPath = `public/components/${tmplName}`;

  const comp = pug.compileFileClient(`${componentPath}/${tmplName}.pug`, { name: `${tmplName}` });
  const templates = [];
  templates.push(comp);

  if (!fs.existsSync(`${componentPath}/compiled`)) {
    fs.mkdirSync(`${componentPath}/compiled`);
  }
  fs.writeFileSync(`${componentPath}/compiled/${tmplName}.js`, `${templates.pop()} export {${tmplName}}`);
};

compileTemplate();

app.use('/note', (req, res) => {
  const bookStore = [
    {
      title: 'Templating with Pug',
      author: 'Winston Smith',
      pages: 143,
      year: 2017,
    },
    {
      title: 'Node.js will help',
      author: 'Guy Fake',
      pages: 879,
      year: 2015,
    },
  ];
  res.render('sidebar', { name: 'Jhon', title: 'Lectures for technopark', bookStore });
});

app.use('/body', (req, res) => {
  const bookStore = [
    {
      title: 'Templating with Pug',
      author: 'Winston Smith',
      pages: 143,
      year: 2017,
    },
    {
      title: 'Node.js will help',
      author: 'Guy Fake',
      pages: 879,
      year: 2015,
    },
  ];
  res.render('sidebar2', { name: 'Jhon', title: 'Lectures for technopark', bookStore });
});

app.use('/books', (req, res) => {
  const bookStore = [
    {
      title: 'Templating with Pug',
      author: 'Winston Smith',
      pages: 143,
      year: 2017,
    },
    {
      title: 'Node.js will help',
      author: 'Guy Fake',
      pages: 879,
      year: 2015,
    },
  ];

  res.render('books', {
    bookStore,
  });
});

app.use('/yyy', (req, res) => {
  res.render('yyy', { title: 'ffff' });
});

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

const listener = app.listen(3000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});
