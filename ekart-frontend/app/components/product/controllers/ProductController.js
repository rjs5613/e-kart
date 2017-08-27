'use strict';

require(['app',
		'components/product/services/ProductService',
		'components/product/directives/productThumbnail'
	], function(app){

	function productController($scope,productService){
		var successHandler = function(data, status){
			$scope.products = data;
		}
		productService.getAllProduct().success(successHandler);
	}

	productController.$inject = ['$scope','productService'];
	app.controller('productController', productController);

})