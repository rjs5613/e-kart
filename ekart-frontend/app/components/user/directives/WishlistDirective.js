'use strict';

require([
	'app',
	'components/user/controllers/WishlistController'
	], function(app){

	function wishList(){
		return {
			restrict: 'E',
			templateUrl : 'components/user/views/wishlist-thumb.html',
			controller: "wishlistController"
		}
	}

	app.directive('wishList',wishList);

})