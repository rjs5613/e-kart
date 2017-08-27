
'use strict'

require(['app'], function(app){

	function productService($http){
		var productService = {};
		productService.getAllProduct=function(){
			return $http.get('http://localhost:8080/products');
		}
		productService.getProductDetails = function(productId){
			return $http.get('http://localhost:8080/products/'+productId);
		}
		return productService;
	}

	productService.$inject = ['$http'];
	app.factory('productService', productService);
	
})