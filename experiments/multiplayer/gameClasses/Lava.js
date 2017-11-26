var Lava = IgeUiEntity.extend({
    classId: 'Lava',

    init: function () {
        var self = this;
        IgeUiEntity.prototype.init.call(this);


        if (ige.isClient) {
            // Load the texture file
            this._lavaTexture = new IgeTexture('./../../assets/lava.gif');

            // Wait for the texture to load
            this._lavaTexture.on('loaded', function () {
                self.backgroundPattern(
                        self._lavaTexture,
                        'repeat',
                        false, // Don't track camera
                        false, // not isometric
                    )
                    // Make it as wide as the window and translate it to the bottom of the window
                    .bounds2d(window.innerWidth + 100, 100)
                    .translateTo(0, window.innerHeight / 2, 1);
            }, false, true);

        }
    },

});


if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Lava; }
