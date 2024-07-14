(function () {
	angular.module("MaikoApp", [
			'maiko.controllers',
			'maiko.services',
			'ngRoute'])
		.config(['$locationProvider', function($locationProvider) {
			$locationProvider.hashPrefix('');
		  }])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'partials/home',
					controller: 'HomeController'
				})
				.when('/blog', {
					templateUrl: 'partials/blog',
				})
				.when('/contacto', {
					templateUrl: 'partials/contacto',
					controller: 'ContactoController'
				})
				.when('/quienes-somos', {
					templateUrl: 'partials/quienes-somos',
					controller: 'QuienesSomosController'
				})
				.when('/servicios', {
					templateUrl: 'partials/servicios',
					controller: 'ServiciosController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
})();