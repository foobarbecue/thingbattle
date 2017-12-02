var Chair = IgeUiEntity.extend({
    classId: 'Chair',

    init: function () {
        var self = this;
        IgeUiEntity.prototype.init.call(this);

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
