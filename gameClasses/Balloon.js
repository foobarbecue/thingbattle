var Balloon = IgeUiEntity.extend({
    classId: 'Balloon',

    init: function () {
        var self = this;
        IgeUiEntity.prototype.init.call(this);

        // Setup the entity
        self.addComponent(IgeVelocityComponent);

        if (ige.isClient) {
            // Load the texture file
            this._balloonTexture = new IgeTexture('./assets/balloon.svg');

            // Wait for the texture to load
            this._balloonTexture.on('loaded', function () {
                self.texture(self._balloonTexture)
                    .dimensionsFromTexture()
                    .velocity.y(-0.01);
            }, false, true);

            this.mouseDown(function(){this.explode()})
        }

    },
    explode: function(){
        this.destroy()
    }
});


if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Balloon; }
