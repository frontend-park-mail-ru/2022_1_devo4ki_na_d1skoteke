/* eslint-disable camelcase */
const express = require('express');
const path = require('path');
const pug = require('pug');
const fs = require('fs');
const cookie = require('cookie-parser');
const uuid = require('uuid');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookie());
app.set('view engine', 'pug');

const templateNames = ['NoteContent', 'Settings', 'LeftSideBar', 'Auth'];

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

// _____________MOCKS__________________

const users = {
  'mr.erik770@mail.ru': {
    username: 'erik770',
    email: 'mr.erik770@mail.ru',
    password: 'password123',
  },
};

const NOTES = {
  notes: [
    {
      name: '1st note',
      favincon: 's3/erfgefwfwef',
      token: 'API-ion-2342341242regf3qf3f3f3wfd',
      body: 'yeaaaaaaaaaaaah its my note',
    },
    {
      name: '2nd cool note',
      favincon: 's3/erfgefwfwef',
      token: 'API-ion-2342341242regf3qf3f3f3wfd',
      body: 'yes it\'s mocks working baby',
    },
  ],
};

const ids = {};

app.post('/api/v1/users/signup', (req, res) => {
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;
  const { confirm_password } = req.body;

  if (
    !password || !email
    || !password.match(/^\S{4,}$/)
    || !email.match(/@/)
    || password !== confirm_password
  ) {
    return res.status(400).json({ ersror: 'Не валидные данные пользователя' });
  }
  if (users[email]) {
    return res.status(400).json({ error: 'Пользователь уже существует' });
  }

  const user = {
    username, email, password,
  };
  const id = uuid.v1();
  ids[id] = email;
  users[email] = user;

  res.cookie('zavorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
  return res.status(201).json({ id });
});

app.post('/api/v1/users/login', (req, res) => {
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

  const id = uuid.v1();
  ids[id] = email;

  res.cookie('zavorot', id, { expires: new Date(Date.now() + 1000 * 60 * 10) });
  return res.status(200).json({ id });
});

app.get('/api/v1/users/auth', (req, res) => {

  if (req.cookies !== undefined && req.cookies.zavorot) {
    const id = req.cookies.zavorot;
    const email = ids[id];
    if (!email || !users[email]) {
      return res.status(401).end();
    }
    return res.status(200).end();
  }

  return res.status(401).end();
});

app.get('/api/v1/users/logout', (req, res) => {
  const id = req.cookies.zavorot;
  delete ids[id];
  if (!ids[id]) {
    return res.status(200).end();
  }
  return res.status(400).end();
});

app.get('/api/v1/notes', (req, res) => {
  const id = req.cookies.zavorot;
  const email = ids[id];
  if (!email || !users[email]) {
    return res.status(401).end();
  }
  return res.json(NOTES);
});

app.get('/api/v1/user', (req, res) => {
  const id = req.cookies.zavorot;
  const userEmail = ids[id];
  const user = users[userEmail];

  if (!userEmail || !user) {
    return res.status(401).end();
  }

  return res.status(200).json({
    username: user.username,
    email: user.email,
  });
});

app.put('/api/v1/user', (req, res) => {
  const id = req.cookies.zavorot;
  const userEmail = ids[id];
  const user = users[userEmail];

  if (!userEmail || !user) {
    return res.status(401).end();
  }

  // const { avatar } = req.body;
  const { username } = req.body;
  const { email } = req.body;
  const { password } = req.body;

  user.username = username;
  user.email = email;

  if (password !== '') {
    user.password = password;
  }

  return res.status(200).end();
});

const SERVER_PORT = process.env.PORT || 3000;

app.listen(SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening port ${SERVER_PORT}`);
});
