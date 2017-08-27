'use strict';
define([
		'angular',
		'angularRoute',
        'jquery',
        'bootstrap',
        'components/user/directives/CartDirective',
        'components/user/directives/UserAccountDirective',
        'components/user/directives/WishlistDirective',
		'components/common/directives/HeaderDirective',
        'components/common/directives/SideBarDirective',
		'components/product/controllers/ProductController'

	], function(angular, productController){

	var app = angular.module('myApp', ['ngRoute']);

	function routeProvider($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'components/product/views/product-list.html',
           	controller: 'productController'
        }).
        when('/about', {
            templateUrl: 'components/common/views/about.html',
        }).when('/contact',{
        	templateUrl: 'components/common/views/contact.html',
        }).when('/products/:id',{
            templateUrl: 'components/product/views/product-details.html',
        })
    }
	app.config(['$routeProvider',routeProvider]);

    return app;
})