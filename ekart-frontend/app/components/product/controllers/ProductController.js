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

		$scope.getProductDetails = function(productId){
			productService.getProductDetails(productId).success(function(data, status){
				$scope.product = data;
			});
		}

	}

	productController.$inject = ['$scope','productService'];
	app.controller('productController', productController);

})