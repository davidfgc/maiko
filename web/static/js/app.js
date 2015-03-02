(function () {
	angular.module("MaikoApp", [
			'maiko.controllers',
			'ngRoute'])
		.config(['$routeProvider', function($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: '/partials/home',
					controller: 'HomeController'
				})
				.when('/quienes-somos', {
					templateUrl: '/partials/quienes-somos',
					controller: 'QuienesSomosController'
				})
				.otherwise({
					redirectTo: '/'
				});
		}]);
})();