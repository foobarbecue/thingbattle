var igeClientConfig = {
	include: [
		/* Your custom game JS scripts */
        './gameClasses/ClientNetworkEvents.js',
        './gameClasses/Balloon.js',
        './gameClasses/Lava.js',

		/* Standard game scripts */
		'./client.js',
		'./index.js'
	]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = igeClientConfig; }
