var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
		ige.showStats(1);

		// Load our textures
		var self = this;
		this.gameTextures = {};
		this.balloons = [];

        // Create the HTML canvas
        ige.createFrontBuffer(true);

        // Start the engine
        ige.start(function (success) {
            // Check if the engine started successfully
            if (success) {
                // Add base scene data
                ige.addGraph('IgeBaseScene');

                const baseScene = ige.$('baseScene');
                console.log('adding balloon');
                newBalloon = new Balloon();
                self.balloons.push(newBalloon);
                newBalloon.mount(baseScene);

                setTimeout(function () {
					console.log('adding ANOTHER balloon (:o)');
					newBalloon = new Balloon();
					self.balloons.push(newBalloon);
					newBalloon.mount(baseScene);
                }, 1000);

            }
        });
	},
});



if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }
