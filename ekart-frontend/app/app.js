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
		'components/product/controllers/ProductController',
        'components/common/interceptors/HttpRequestInterceptor',
        'components/Route'

	], function(angular, productController,httpRequestInterceptor){

	var app = angular.module('myApp', ['ngRoute']);

    function httpRequestInterceptor($httpProvider){
        $httpProvider.interceptors.push('httpRequestInterceptor');
    }
    app.config(['$httpProvider','$locationProvider',httpRequestInterceptor]);

    return app;
})