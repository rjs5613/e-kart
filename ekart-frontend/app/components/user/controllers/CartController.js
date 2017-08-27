'use strict';

require(['app',
	'components/user/services/UserService'
	], function(app, userService){

	function cartController($scope,userService){
		var successHandler = function(data, status){
			$scope.cartItems = data;
			$scope.size = 2;
		}
		userService.getCart().success(successHandler);
	}

	cartController.$inject = ['$scope', 'userService'];
	app.controller('cartController', cartController);

})