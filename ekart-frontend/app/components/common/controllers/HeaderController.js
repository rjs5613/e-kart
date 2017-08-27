'use strict';

require(['app'
	], function(app){

	function headerController($scope, $location){
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}

	headerController.$inject = ['$scope', '$location'];
	app.controller('headerController', headerController);

})