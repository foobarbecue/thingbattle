var Balloon = IgeEntityBox2d.extend({
    classId: 'Balloon',

    init: function () {
        var self = this;
        IgeEntityBox2d.prototype.init.call(this);

        // Setup the entity
        self.addComponent(IgeVelocityComponent);

        // // Setup the box2d physics properties
        self.box2dBody({
            type: 'dynamic',
            linearDamping: 0.0,
            angularDamping: 0.5,
            allowSleep: true,
            bullet: false,
            gravitic: false,
            fixedRotation: false,
            fixtures: [{
                density: 1,
                filter: {
                    categoryBits: 0x0100,
                    maskBits: 0xffff
                },
                shape: {
                    type: 'circle'
                }
            }]
        });


        if (ige.isClient) {
            // Load the texture file
            this._balloonTexture = new IgeTexture('../../assets/balloon.svg');

            // Wait for the texture to load
            this._balloonTexture.on('loaded', function () {
                self.texture(self._balloonTexture)
                    .dimensionsFromTexture()
            }, false, true);

            this.mouseDown(function(){this.explode()});
        }

    },
    explode: function(){ // Would like to call this "pop" but seems like a bad idea
        this.destroy();

    },
    // tick: function(ctx){
    //     // Apply lifting force each tick
    //     this._box2dBody.ApplyForce(
    //         new ige.box2d.b2Vec2(0,-1), //force
    //         new ige.box2d.b2Vec2(0,0)    //point
    //     )
    //     IgeEntity.prototype.tick.call(this, ctx)
    // }
});


if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Balloon; }
