'use strict';

require(['app'
	], function(app){

	function routeProvider($routeProvider, $locationProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'components/product/views/product-list.html',
           	controller: 'productController'
        }).
        when('/about', {
            templateUrl: '/components/common/views/about.html',
        }).when('/contact',{
        	templateUrl: '/components/common/views/contact.html',
        }).when('/products/:id',{
            templateUrl: '/components/product/views/product-details.html',
            controller: 'productController'
        })
        $locationProvider.html5Mode({
		  enabled: true,
		  requireBase: false
		});
    }
	app.config(['$routeProvider','$locationProvider',routeProvider]);

})