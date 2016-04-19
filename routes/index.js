// Twitter ToDo index js - MAY NOT USE
var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET home page. This is going to go to task page instead */
// get the index page, but redirect to the tasks page
router.get('/', function(req, res, next) {
  res.render('index');
});

// Twitter stuff
router.get('/auth/twitter', passport.authenticate('twitter'));

router.get('/auth/twitter/callback', passport.authenticate('twitter', {
  successRedirect : 'tasks',
  failureRedirect : '/'
}));

module.exports = router;
