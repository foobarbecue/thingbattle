const tsapi = require('twitter-stream-api'),
    fs = require('fs');

var keys = {
    consumer_key : "SujXqiaODF0y7S27rHYHnU6ke",
    consumer_secret : "ngTpozdk5GhPYwzJRna8oElvfHm9d53PldYoLFZCzjd4OR1vnu",
    token : "175051201-GQhFxd5qxJhVkB9NivQWTDaD0desbIx80aG9RVkO",
    token_secret : "es5i5We70pPO91gxGNrjxC2lmdb4Oq2YH481zLDm8AkGj"
};

var Twitter = new tsapi(keys, true);

Twitter.stream('statuses/filter', {
    track: 'javascript'
});



var Server = IgeClass.extend({
	classId: 'Server',
	Server: true,

	init: function (options) {
		var self = this;
		self.balloons = [];
		self.implement(ServerNetworkEvents);
		// Add the networking component
		ige.addComponent(IgeNetIoComponent)
			// Start the network server
			.network.start(2000, function () {
				// Networking has started so start the game engine
				ige.start(function (success) {
					// Check if the engine started successfully
					if (success) {
						ige.network.on('connect', function () {});
						ige.network.on('disconnect', function () {});

						// Add the network stream component
						ige.network.addComponent(IgeStreamComponent)
							.stream.sendInterval(30) // Send a stream update once every 30 milliseconds
							.stream.start(); // Start the stream

						// Accept incoming network connections
						ige.network.acceptConnections(true);

						ige.network.define('destroyBalloon', self._destroyBalloon);
                        ige.network.define('test', self._onTest);

						// Load the base scene data
						ige.addGraph('IgeBaseScene');

                        Twitter.on('data',
							function(obj){ige.network.send('test',obj)});

                    }
				});
			});
	},

	addTwitterText: function(){

	}

    addBalloon: function() {
        let newBalloon = new Balloon();
        this.balloons.push(newBalloon);
		newBalloon.streamMode(1)
		    .mount(ige.$('baseScene'))
		    .velocity.y(-0.01);
        return newBalloon
    },

    balloonStream: function() {
        this.addBalloon();
        setTimeout(this.balloonStream.bind(this), 10000);
    },
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Server; }