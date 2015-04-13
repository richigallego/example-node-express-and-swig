var passport = require('passport'),
	TwitterStrategy = require('passport-twitter').Strategy;
var twitterConnection = function (server){
	passport.use(new TwitterStrategy({
		consumerKey : 'syuXSU6dOVJ8WvdGCZ0sXKrxT',
		consumerSecret : 'WDhnRj3GY6tPu2qonG2roUoykQa5PIEYZXtNYD0KTgJfYnXUmJ',
		callbackURL : 'http://localhost:8000/auth/twitter/callback'
	},function (accesToken, RefreshToken, profile, done){
		done(null, profile);
	}))

	server.get('/auth/twitter', passport.authenticate('twitter'));
	server.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect : '/',
																			failureRedirect : '/error'}));
};

module.exports = twitterConnection;