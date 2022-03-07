const express = require("express");
const path = require('path');

const app = express();

const pug = require('pug');

app.set("view engine", "pug");






app.use('/note', (req, res) => {

  var bookStore = [
    {
        title: "Templating with Pug",
        author: "Winston Smith",
        pages: 143,
        year: 2017        
    },
    {
        title: "Node.js will help",
        author: "Guy Fake",
        pages: 879,
        year: 2015        
    }
];
    res.render('sidebar', {name: "Jhon", title: "Lectures for technopark", bookStore})
})


app.use('/body', (req, res) => {

  var bookStore = [
    {
        title: "Templating with Pug",
        author: "Winston Smith",
        pages: 143,
        year: 2017        
    },
    {
        title: "Node.js will help",
        author: "Guy Fake",
        pages: 879,
        year: 2015        
    }
];
    res.render('sidebar2', {name: "Jhon", title: "Lectures for technopark", bookStore})
})

app.use("/books", (req, res) => {

  var bookStore = [
    {
        title: "Templating with Pug",
        author: "Winston Smith",
        pages: 143,
        year: 2017        
    },
    {
        title: "Node.js will help",
        author: "Guy Fake",
        pages: 879,
        year: 2015        
    }
];

  res.render("books", {
    bookStore: bookStore
});

})

    

app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

const listener = app.listen(3000, () => {
    console.log("App is listening on port " + listener.address().port);
})