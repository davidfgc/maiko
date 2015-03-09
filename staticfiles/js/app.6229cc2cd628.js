(function () {
	angular.module("MaikoApp", [
			'maiko.controllers',
			'maiko.services',
			'ngRoute'])
		.config(function($httpProvider) {
		    //soluciona problema de la validación de csrf de django
		    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
			$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
		})
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/partials/home',
					controller: 'HomeController'
				})
				.when('/contacto', {
					templateUrl: '/partials/contacto',
					controller: 'ContactoController'
				})
				.when('/quienes-somos', {
					templateUrl: '/partials/quienes-somos',
					controller: 'QuienesSomosController'
				})
				.when('/servicios', {
					templateUrl: '/partials/servicios',
					controller: 'ServiciosController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
})();