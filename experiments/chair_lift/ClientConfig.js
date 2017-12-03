var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
        './gameClasses/Balloon.js',
        './gameClasses/Lava.js',
        './gameClasses/Chair.js',

		/* Standard game scripts */
		'./client.js',
		'./index.js'
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }
