var ServerNetworkEvents = {
    _destroyBalloon: function (data, clientId) {
		console.log('Client test command received from client id "' + clientId + '" with data:', data);
		ige.$(data).destroy(); // TODO close massive security hole
	},
	_onTest: function(data){
    	console.log('server got test')
	}
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = ServerNetworkEvents; }