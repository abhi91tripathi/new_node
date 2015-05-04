          var User = require('../app/models/User.js');  
module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
        
        
        
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});
        

        
        app.post('/users/add', function(req, res) {
        
          var user = new User();      // create a new instance of the Bear model
                user.name = req.body.name;  // set the bears name (comes from the request)

                console.log(user);
                // save the bear and check for errors
                var test=user.save(function(err) {
                   res.send(err);

            res.json({ message: 'Bear created!' });
               
                    
                });
             console.log(test);
	});

};