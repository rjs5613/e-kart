
'use strict'

require(['app'], function(app){

	function productService($http){
		var productService = {};
		productService.getAllProduct=function(){
			return $http.get('/products');
		}
		productService.getProductDetails = function(productId){
			return $http.get('/products/'+productId);
		}
		return productService;
	}

	productService.$inject = ['$http'];
	app.factory('productService', productService);
	
})