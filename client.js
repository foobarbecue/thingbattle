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
                // ige.addComponent(IgeEditorComponent);

                self.uiScene = new IgeScene2d()
                    .id('uiScene')
                    .depth(1)
                    .ignoreCamera(true)
                    .mount(ige.$('baseScene'));

                ige.$('vp1')
                    .addComponent(IgeMouseZoomComponent)
                    .mouseZoom.enabled(true)
                    .scene(ige.$('baseScene'))
                    .mount(ige);


                const toolbarWidth = 85;
                const toolbarButtonHeight = 100;
                const numButtons = 4;
                const toolbarHeight = toolbarButtonHeight * numButtons;

                ige.ui.style('#toolbar', {
                    'backgroundColor': 'gray',
                    'position': 'absolute',
                    'top': window.innerHeight / 2 - toolbarHeight / 2,
                    'height': toolbarHeight,
                    'border': '1px solid black',
                    'left': 0,
                    'width': toolbarWidth,
                });

                ige.ui.style('toolbarButton', {
                    'width': toolbarWidth,
                    'height': toolbarButtonHeight,
                    'backgroundColor': '#ccc'
                });

                const toolbar = new IgeUiElement()
                    .id('toolbar')
                    .mount(self.uiScene);

                new IgeUiButton()
                    .styleClass('toolbarButton')
                    .value('Clickem')
                    .mouseUp(function(){console.log('clic\'d')})
                    .mount(toolbar);


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
