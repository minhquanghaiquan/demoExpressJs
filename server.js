// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const pug = require('pug');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.set('view engine' , 'pug');
app.set('views', './views');

var todolist = ['nau an' , 'di cho', 'dau com', 'di hoc'];


app.get('/todos' , (req, res)=> {
  var q = req.query.q;
  var matched;
  if(q===undefined) {
    matched=todolist;
  }else {
    matched = todolist.filter(list=> {
    return list.toLowerCase().indexOf(q.toLowerCase()) !==-1;
    });
  }
  res.render('pugdemo.pug', {
    todolist: matched,
    value: q
  });
});

app.get('/todos/create', (req, res)=> {
  res.render('create');
});

app.post('/todos/create', (req,res)=> {
  todolist.push(req.body.todo);
  res.redirect('/todos');
});


app.listen(process.env.https://d7be4ade-c351-4ac1-89d6-bf6c569da4c0@api.glitch.com/git/demo-postmethodPORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});