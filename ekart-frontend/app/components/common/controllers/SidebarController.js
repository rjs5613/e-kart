'use strict';

require(['app'
	], function(app){

	function sidebarController($scope, $location){
	    $scope.isActive = function (viewLocation) { 
	        return viewLocation === $location.path();
	    };
	}

	sidebarController.$inject = ['$scope', '$location'];
	app.controller('sidebarController', sidebarController);

})