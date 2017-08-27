'use strict';

require([
	'app',
	'components/common/controllers/HeaderController'
	], function(app){

	function applicationHeader(){
		return {
			restrict: 'E',
			templateUrl : 'components/common/views/header.html',
			controller: "headerController"
		}
	}

	app.directive('applicationHeader',applicationHeader);

})