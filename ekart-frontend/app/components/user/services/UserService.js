
'use strict'

require(['app'], function(app){

	function userService($http){
		var userService = {};
		userService.getWishList=function(userID){
			return $http.get('http://localhost:8080/products');
		}

		userService.getCart=function(userID){
			return $http.get('http://localhost:8080/products');
		}
		return userService;
	}

	userService.$inject = ['$http'];
	app.factory('userService', userService);
	
})