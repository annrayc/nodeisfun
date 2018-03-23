console.log('Starting app.');

//load built in modules

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

fs.appendFile('greetings.txt', 'Hello ' + user.username + '!', function(err){
  if(err){
    console.log('unable');

  }
});


fs.appendFile('greetings.txt', 'Hello' + user.username + '! , You are'+ notes.age, function(err){
  if(err){
    console.log('unable');

  }
});
//console.log(user);