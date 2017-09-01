'use strict';

require(['app'
	], function(app){

	function httpRequestInterceptor($q){
		var requestInterceptor = {
	        request: function(config) {
	        	if(!config.url.endsWith(".html"))
	        		config.url = "http://localhost:8080"+config.url;
	        	return config;
	        }
	    };

	    return requestInterceptor;
	}

	httpRequestInterceptor.$inject = ['$q'];
	app.factory('httpRequestInterceptor', httpRequestInterceptor);

})