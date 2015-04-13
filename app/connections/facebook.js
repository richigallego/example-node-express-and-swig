var passport = require('passport'),
	FacebookStrategy = require('passport-facebook').Strategy;
var facebookConnection = function (server){
	passport.use(new FacebookStrategy({
		clientID : '880248925355438',
		clientSecret : '389d093b2efe45f03a8adf03d538db75',
		callbackURL : 'http://localhost:8000/auth/facebook/callback'
	},function (accesToken, RefreshToken, profile, done){
		done(null, profile);
	}))

	server.get('/auth/facebook', passport.authenticate('facebook'));
	server.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect : '/',
																			  failureRedirect : '/error'}));
};

module.exports = facebookConnection;