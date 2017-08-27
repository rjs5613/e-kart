'use strict';

require([
	'app',
	'components/user/controllers/CartController'
	], function(app){

	function userCart(){
		return {
			restrict: 'E',
			templateUrl : 'components/user/views/cart-thumb.html',
			controller: "cartController"
		}
	}

	app.directive('userCart',userCart);

})