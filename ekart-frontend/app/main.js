require.config({  
	baseUrl: '/', 
     waitSeconds: 0,
    paths: {
        'angular': 'bower_components/angular/angular.min',
        'angularRoute': 'bower_components/angular-route/angular-route.min',
        'app' : 'app',
        "jquery": "bower_components/jquery/dist/jquery.min",
        "bootstrap": "bower_components/bootstrap/dist/js/bootstrap.min",
        "bootstrap-ui": "bower_components/angular-bootstrap/ui-bootstrap.min",
        "bootstrap-ui-tpl": "bower_components/angular-bootstrap/ui-bootstrap-tpls.min"
    },
    shim: { 
    	angular: {
            exports: 'angular',
            deps: ['jquery']
        },
    	'angularRoute':{
    		deps : ['angular']
    	},
        "bootstrap": {
            deps: ["jquery"]
        },
        "bootstrap-ui": {
            deps: ["angular"]
        },
        "bootstrap-ui-tpl": {
            deps : ["bootstrap-ui"]
        }
    },
    deps: ['app']
});

require([
    'angular',
    'app'
    ], function(angular, app) {
        var $html = angular.element(document.getElementsByTagName('html')[0]);
        angular.element().ready(function() {
            angular.bootstrap(document, ['myApp']);
        });
    }
);