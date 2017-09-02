'use strict';

require(['app'
	], function(app){

	function userController($scope, $uibModal){

		$scope.loggedIn=false;

	    $scope.openPopUp = function () {
			console.log('opening pop up');
			var modalInstance = $uibModal.open({
				templateUrl: 'components/user/views/sign-in.html',
			});
		}
	}

	userController.$inject = ['$scope', '$uibModal'];
	app.controller('userController', userController);

})