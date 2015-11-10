# PM2 for Meteor
## Porgrammatically use PM2 in Meteor
		// Connect or launch PM2
		pm2.connect(function(err) {
			// Get all processes running
		  pm2.list(function(err, process_list) {
		  	console.log(process_list);
		     // Disconnect to PM2
		     pm2.disconnect(function() { process.exit(0) });
		   });
		});
  
## Start another App with PM2
		pm2.connect(function(){
			pm2.start('/opt/nodejs/ninjaApp/main.js', {name: 'ninjaApp'}, function(err){
				if (err) throw new Error(err);
			})
		}) ...
## Read more
[here](https://keymetrics.io/2014/07/02/manage-processes-programmatically-with-pm2/)