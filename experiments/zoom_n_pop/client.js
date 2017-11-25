var Client = IgeClass.extend({
	classId: 'Client',

	init: function () {
		ige.showStats(1);

		// Load our textures
		var self = this;
		self.gameTextures = {};
		self.balloons = [];

        // Create the HTML canvas
        ige.createFrontBuffer(true);

        // Start the engine
        ige.start(function (success) {
            // Check if the engine started successfully
            if (success) {
                // Add base scene data
                ige.addGraph('IgeBaseScene');
                ige.$('vp1')
                    .addComponent(IgeMouseZoomComponent)
                    .mouseZoom.enabled(true)
                    .scene(ige.$('baseScene'))
                    .mount(ige);
                console.log('adding lava');
                new Lava().mount(ige.$('baseScene'));
                self.balloonStream();
            }
        });

	},

    addBalloon: function() {
        let newBalloon = new Balloon();
        this.balloons.push(newBalloon);
        newBalloon.mount(ige.$('baseScene'));
    },

    balloonStream: function() {
        this.addBalloon();
        setTimeout(this.balloonStream.bind(this), 10000);
    },


});



if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }
