'use strict';

require(['app'], function(app){

	function productThumbnail(){
		return {
			restrict: 'E',
			templateUrl : 'components/product/views/product-thumbnail.html'
		}
	}

	app.directive('productThumbnail',productThumbnail);

})