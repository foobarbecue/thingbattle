var Client = IgeClass.extend({
	classId: 'Client',

	init: function () {
		ige.addComponent(IgeEditorComponent);
		// Load our textures
		var self = this;
		self.tweets = [];

		// Enable networking
		ige.addComponent(IgeNetIoComponent);

		// Create the HTML canvas
		ige.createFrontBuffer(true);

		// Load the textures we want to use
		this.textures = {
			ship: new IgeTexture('../../assets/balloon.svg')
		};

		ige.on('texturesLoaded', function () {
			// Ask the engine to start
			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Start the networking (you can do this elsewhere if it
					// makes sense to connect to the server later on rather
					// than before the scene etc are created... maybe you want
					// a splash screen or a menu first? Then connect after you've
					// got a username or something?
					ige.network.start('http://localhost:2000', function () {
						// Setup the network stream handler

                        ige.network.define('test', self.addTweet);
						// Load the base scene data
						ige.addGraph('IgeBaseScene');
					});
				}
			});
		});
	},
    addTweet: function(data) {
		var self = this;
        console.log('adding tweet');
        let newTweet = new IgeFontEntity()
            .depth(1)
            .width(ige.$('baseScene').width())
            .height(ige.$('baseScene').height())
            .textAlignX(0)
            .colorOverlay('#ffffff')
            .nativeFont('10pt Arial')
            // .nativeStroke(6)
            // .nativeStrokeColor('#666666')
            .textLineSpacing(0)
            .center(0)
            .middle(0)
			.text(data.text)
			.mount(ige.$('baseScene'));


        ige.client.tweets.push(newTweet);
        newTweet.mount(ige.$('baseScene'))
            // .velocity.y(-0.01);
    },
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }