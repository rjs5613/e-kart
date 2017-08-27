'use strict';

require(['app'
	], function(app){

	function userController($scope, $location){

		$scope.loggedIn=false;

	    $scope.open = function () {
			console.log('opening pop up');
			var modalInstance = $uibModal.open({
				templateUrl: 'components/user/views/sign-in.html',
			});
		}
	}

	userController.$inject = ['$scope', '$location'];
	app.controller('userController', userController);

})