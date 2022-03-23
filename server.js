const express = require('express');
const path = require('path');
const pug = require('pug');
const fs = require('fs');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'pug');

const templateNames = ['NoteContent', 'LeftSideBar', 'Auth'];

const compileTemplate = (tmplName) => {
  const componentPath = `public/components/${tmplName}`;

  const comp = pug.compileFileClient(`${componentPath}/${tmplName}.pug`, {
    name: `${tmplName}`,
  });
  const templates = [];
  templates.push(comp);

  if (!fs.existsSync(`${componentPath}/compiled`)) {
    fs.mkdirSync(`${componentPath}/compiled`);
  }
  fs.writeFileSync(`${componentPath}/compiled/${tmplName}.js`, `${templates.pop()} export {${tmplName}}`);
};

templateNames.forEach((el) => {
  compileTemplate(el);
});

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening port ${SERVER_PORT}`);
});
