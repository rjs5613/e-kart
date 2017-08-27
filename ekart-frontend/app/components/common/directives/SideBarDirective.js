'use strict';

require([
	'app',
	'components/common/controllers/SidebarController'
	], function(app){

	function sideBar(){
		return {
			restrict: 'E',
			templateUrl : 'components/common/views/sidebar.html',
			controller: "sidebarController"
		}
	}

	app.directive('sideBar',sideBar);

})