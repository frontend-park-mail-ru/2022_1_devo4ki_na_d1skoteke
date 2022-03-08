const express = require('express');
const path = require('path');

const app = express();

const pug = require('pug');
const fs = require('fs');

app.set('view engine', 'pug');

// app.set('view engine', 'pug');

const templateNames = ['NoteContent', 'LeftSideBar'];

const compileTemplate = (tmplName) => {
  // const tmplName = 'NoteContent';
  const componentPath = `public/components/${tmplName}`;

  const comp = pug.compileFileClient(`${componentPath}/${tmplName}.pug`, {
    name: `${tmplName}`,
  });
  const templates = [];
  templates.push(comp);

  if (!fs.existsSync(`${componentPath}/compiled`)) {
    fs.mkdirSync(`${componentPath}/compiled`);
  }
  fs.writeFileSync(
    `${componentPath}/compiled/${tmplName}.js`,
    `${templates.pop()} export {${tmplName}}`,
  );
};

templateNames.forEach((el) => {
  compileTemplate(el);

})


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
  res.render('sidebar', { bookStore });
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
  res.render('sidebar2', {
    name: 'Jhon',
    title: 'Lectures for technopark',
    bookStore,
  });
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

app.use('/api/v1/note/:id', (req, res) => {
  const { id } = req.params;
  res.json({ name: `The note is ${id}`, body: `Name is ${id}` });
});

app.use('/api/v1/notes', (req, res) => {
  const body = {
    notes: [
      {
        title: 'First note heheheh interesting',
        favincon: 's3/erfgefwfwef',
        token: 'AP-ion-2342341242regf3qf3f3f3wfd',
      },
      {
        title: '2 note heheheh interesting',
        favincon: 's3/erfgefwfwef',
        token: 'API-ion-2342341242regf3qf3f3f3wfe',
      },
      {
        title: '3 note heheheh interesting',
        favincon: 's3/erfgefwfwef',
        token: 'API-ion-2342341242regf3qf3f3f3wfd',
      },
    ],
  };

  // res.body = ();
  res.json(body);
});

app.listen(3000, () => {
});
