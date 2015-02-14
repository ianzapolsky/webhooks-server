var _     = require('underscore');
var app   = require('express')();
var spawn = require('child_process').spawn;
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/', function(req, res){
  if (req.body.ref === 'refs/heads/master') {
    // Exec deploy script
    var deploySh = spawn('sh', [ 'replace.sh' ], {
      cwd: '/home/ubuntu/alumnus-django',
      env:_.extend(process.env, { PATH: process.env.PATH + ':/usr/local/bin' })
    });
  }
  res.send('hello world');
});

app.listen(4001);

