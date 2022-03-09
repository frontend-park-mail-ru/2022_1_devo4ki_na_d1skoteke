const express = require("express");
const path = require("path");

const app = express();

const pug = require("pug");
const fs = require("fs");

app.set("view engine", "pug");

const templateNames = ["NoteContent", "LeftSideBar"];
// const templateNames = ['NoteContent', 'LeftSideBar', 'Enter'];

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
  fs.writeFileSync(
    `${componentPath}/compiled/${tmplName}.js`,
    `${templates.pop()} export {${tmplName}}`
  );
};

templateNames.forEach((el) => {
  compileTemplate(el);
});



app.use(express.json());

app.use(express.static(path.resolve(__dirname, "public")));

app.use("/api/v1/note/:id", (req, res) => {
  const { id } = req.params;
  res.json({ name: `The note is ${id}`, body: `Name is ${id}` });
});

app.use("/api/v1/notes", (req, res) => {
  const body = {
    notes: [
      {
        title: "First note heheheh interesting",
        favincon: "s3/erfgefwfwef",
        token: "AP-ion-2342341242regf3qf3f3f3wfd",
      },
      {
        title: "2 note heheheh interesting",
        favincon: "s3/erfgefwfwef",
        token: "API-ion-2342341242regf3qf3f3f3wfe",
      },
      {
        title: "3 note heheheh interesting",
        favincon: "s3/erfgefwfwef",
        token: "API-ion-2342341242regf3qf3f3f3wfd",
      },
    ],
  };

  res.json(body);
});

app.listen(3000, () => {});
