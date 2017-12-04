var config = {
	include: [
		//{name: 'MyClassName', path: './gameClasses/MyClassFileName'},
		{name: 'Balloon', path: './gameClasses/Balloon'},
        {name: 'ServerNetworkEvents', path: './gameClasses/ServerNetworkEvents'}
    ]
};

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = config; }