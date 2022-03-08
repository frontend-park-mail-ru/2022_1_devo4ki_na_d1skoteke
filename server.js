const express = require('express');
const path = require('path');
const fs = require('fs');
const pug = require('pug');
const uuid = require('uuid').v4;
const cookie = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookie());

app.set('view engine', 'pug');

const compileTemplate = () => {
  const tmplName = 'Auth';
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

const users = {
  'mr.erik770@mail.ru': {
    nickname: 'erik770',
    email: 'mr.erik770@mail.ru',
    password: 'password',
  },
};
const ids = {};

app.post('/signup', (req, res) => {
  const { nickname } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  if (
    !password || !email
    || !password.match(/^\S{4,}$/)
    || !email.match(/@/)
  ) {
    return res.status(400).json({ error: 'Не валидные данные пользователя' });
  }
  if (users[email]) {
    return res.status(400).json({ error: 'Пользователь уже существует' });
  }

  const id = uuid();
  const user = {
    nickname, email, password,
  };
  ids[id] = email;
  users[email] = user;

  res.cookie('zavorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
  return res.status(201).json({ id });
});

app.post('/login', (req, res) => {
  const { password } = req.body;
  const { email } = req.body;
  if (!password || !email) {
    return res.status(400).json({ error: 'Не указан E-Mail или пароль' });
  }
  if (!users[email]) {
    return res.status(400).json({ error: 'Нет пользователя с таким email' });
  }
  if (users[email].password !== password) {
    return res.status(400).json({ error: 'Не верный пароль' });
  }

  const id = uuid();
  ids[id] = email;

  res.cookie('zavorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
  return res.status(200).json({ id });
});

app.get('/notes', (req, res) => {
  const id = req.cookies.zavorot;
  const email = ids[id];
  if (!email || !users[email]) {
    return res.status(401).end();
  }

  return res.json(users[email]);
});
const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening port ${SERVER_PORT}`);
});
