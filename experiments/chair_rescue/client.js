var Client = IgeClass.extend({
	classId: 'Client',

	init: function () {
		// Load our textures
		var self = this;
		self.gameTextures = {};
		self.chairs = [];
        self.balloons = [];

        // Create the HTML canvas
        ige.createFrontBuffer(true);

        // Add physics and setup physics world
        ige.addComponent(IgeBox2dComponent)
            .box2d.sleep(true)
            .box2d.gravity(0, 1)
            .box2d.createWorld()
            .box2d.mode(0)
            .box2d.start();

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


                // Add lava
                new Lava().mount(ige.$('baseScene'));

                let chair = self.addChair();

            }
        });

	},
    addChair: function(){
        // Add Chair
        let self = this;
        let newChair = new Chair().mount(ige.$('baseScene'));
        this.chairs.push(newChair);
        newChair.mouseDown(function(){self.addBalloon(newChair)});
        return newChair;
    },
    addBalloon: function (chair) {
        // Add Balloon
        let newBalloon = new Balloon();
        this.balloons.push(newBalloon);
        newBalloon.mount(ige.$('baseScene'));
        // Above chair
        newBalloon.translateBy(0,-300,0);

        // Attach balloon to chair
        let djd = new ige.box2d.b2DistanceJointDef();
        djd.Initialize(
            newBalloon._box2dBody,
            chair._box2dBody,
            newBalloon._box2dBody.GetWorldCenter(),
            chair._box2dBody.GetWorldCenter()
        );
        ige.box2d._world.CreateJoint(djd);

    }

});



if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }
