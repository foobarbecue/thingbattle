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

        /*
        // Load a game texture here
        this.gameTextures.balloon = new IgeTexture('./assets/balloon.png');
        // Wait for our textures to load before continuing
        ige.on('texturesLoaded', function () {
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
                    newBalloon = new IgeUiEntity();
                    newBalloon.texture(self.gameTextures.balloon)
                        .addComponent(IgeVelocityComponent)
                        .scaleTo(1.5,1.5,1.5)
                        .velocity.y(-0.1);
                    self.balloons.push(newBalloon);
                    newBalloon.mount(baseScene);
                }
            });
        });
        */
	},
});



if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }