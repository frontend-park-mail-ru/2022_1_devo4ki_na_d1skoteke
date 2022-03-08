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

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));



app.use('/api/v1/note/:id', (req, res) => {
  const id = req.params.id;
  res.json({name: `somerandomshitname${id}`, body: `somarandombody${id}`});
})

app.use('/api/v1/notes', (req, res) => {


  const body = {
    notes: [
      {
        name: "hehe 1 note",
        favincon: "s3/erfgefwfwef",
        token: "API-ion-2342341242regf3qf3f3f3wfd"
      },
      {
        name: "hehe 2 note",
        favincon: "s3/erfgefwfwef",
        token: "API-ion-2342341242regf3qf3f3f3wfd"
      },
      {
        name: "hehe 3 note",
        favincon: "s3/erfgefwfwef",
        token: "API-ion-2342341242regf3qf3f3f3wfd"
      }
    
    ]
    }

  res.json(body);
})

const listener = app.listen(3000, () => {
  console.log(`App is listening on port ${listener.address().port}`);
});

