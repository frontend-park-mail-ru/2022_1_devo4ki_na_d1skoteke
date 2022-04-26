const fs = require('fs');
const pug = require('pug');

const templateNames = ['NoteContent', 'Settings', 'LeftSideBar', 'Auth'];

const compileTemplate = (tmplName) => {
  const componentPath = `src/components/${tmplName}`;
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
