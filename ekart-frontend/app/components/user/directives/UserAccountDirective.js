'use strict';

require([
	'app',
	'components/user/controllers/UserController'
	], function(app){

	function userAccount(){
		return {
			restrict: 'E',
			templateUrl : 'components/user/views/user-thumb.html',
			controller: "userController"
		}
	}

	app.directive('userAccount',userAccount);

})