var Chair = IgeEntityBox2d.extend({
    classId: 'Chair',

    init: function () {
        var self = this;
        IgeEntityBox2d.prototype.init.call(this);

        self.box2dBody({
            type: 'dynamic',
            linearDamping: 0.0,
            angularDamping: 0.5,
            allowSleep: true,
            bullet: false,
            gravitic: true,
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

        // Setup the entity
        self.addComponent(IgeVelocityComponent);

        if (ige.isClient) {
            // Load the texture file
            this._chairTexture = new IgeTexture('../../assets/chair.svg');

            // Wait for the texture to load
            this._chairTexture.on('loaded', function () {
                self.texture(self._chairTexture)
                    .dimensionsFromTexture()
            }, false, true);

        }

    }
});


if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Chair; }
