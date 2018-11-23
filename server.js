var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  Post = require('./api/models/postModel'), //created model loading here
  bodyParser = require('body-parser');

app.set('views', './api/views')
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('pages/index')
})

const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  (email, password, done) => {
    return done(null, { foo: 'bar' } )
  }
))

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    console.log('passport!');
    console.log(JSON.stringify(req.user));
    req.login(user, (err) => {
      console.log('logged in');
      return res.send('response: logged in');
    })
  })(req, res, next)
})

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('todo list RESTful API server started on: ' + port);
