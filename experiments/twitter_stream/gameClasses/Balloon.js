var Balloon = IgeUiEntity.extend({
    classId: 'Balloon',

    init: function () {
        var self = this;
        IgeUiEntity.prototype.init.call(this);

        // Setup the entity
        self.addComponent(IgeVelocityComponent);
        if (ige.isClient) {
            // Load the texture file
            this._balloonTexture = new IgeTexture('../../assets/balloon.svg');

            // Wait for the texture to load
            this._balloonTexture.on('loaded', function () {
                self.texture(self._balloonTexture)
                    .dimensionsFromTexture()
            }, false, true);

            self.mouseDown(function(){self.explode()});

        };

    },
    explode: function(){ // Would like to call this "pop" but seems like a bad idea
        ige.network.send('destroyBalloon', this.id());

    }
});


if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Balloon; }
