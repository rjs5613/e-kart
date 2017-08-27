'use strict';

require(['app',
	'components/user/services/UserService'
	], function(app){

	function wishlistController($scope,userService){
		var successHandler = function(data, status){
			$scope.wishListItems = data;
			$scope.size = 2;
		}
		userService.getWishList().success(successHandler);
	}

	wishlistController.$inject = ['$scope','userService'];
	app.controller('wishlistController', wishlistController);

})