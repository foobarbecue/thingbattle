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

						ige.network.define('destroyBalloon', self._destroyBalloon)

						// Load the base scene data
						ige.addGraph('IgeBaseScene');
						self.balloonStream();

                    }
				});
			});
	},

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