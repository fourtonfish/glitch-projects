var express = require('express'),
    exphbs  = require('express-handlebars'),
    http = require('http'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express(),
    server = http.Server(app),
    user = {
      name: process.env.NAME,
      authorization: process.env.AUTHORIZATION,
      exclude_projects: process.env.EXCLUDE.split(',')
    }

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {
request('https://api.glitch.com/boot?authorization=' + process.env.AUTHORIZATION, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var data = JSON.parse(body);
    console.log(data);
    var projects = [];
  
    for (var project in data.projects){
      if (!user.exclude_projects.includes(data.projects[project].domain)){
        projects.push(data.projects[project]);
      }
    }

    res.render('home', {
      name: user.name,
      avatar: data.user.avatarUrl,
      projects: projects,
      this_project: process.env.PROJECT_NAME
    });
  }
})  

});

app.use(express.static(__dirname + '/public'));

app.set('port', process.env.PORT || 3011);
app.set('ip', '127.0.0.1');

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is running on port ' + listener.address().port);
});
