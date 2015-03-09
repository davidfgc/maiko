(function () {
	angular.module("maiko.controllers", [])
		.controller("ContactoController", 
				['$http', '$scope', 'ContactService',
				function ($http, $scope, ContactService) {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/home.jpg')";

			$scope.sendQuery = function () {
				$scope.contact.message = "";
				ContactService.sendQuery($scope.contact)
					.then(function(contact) {
						$scope.contact = contact;
					});
			}
		}])
		.controller("HomeController", [function () {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/home.jpg')";
		}])
		.controller("MainController", ['$scope', '$location', function ($scope, $location) {
			$scope.getItemMenuClass = function (path) {
				if ($location.path() === path) {
					return "active";
				}
			}

		}])
		.controller("QuienesSomosController", [function () {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/quienes-somos.png')";
		}])
		.controller("ServiciosController", 
				['$scope','InfoService', 'ServiceService',
				function ($scope,InfoService, ServiceService) {
			$scope.img = InfoService.img;
			$scope.services = ServiceService.services;

			$scope.changeService = function (value) {
				var index = $scope.services.values.indexOf($scope.services.selected);
				index += value;
				if (index === -1) {
					index = $scope.services.values.length -1;
				}
				else {
					index = index % ($scope.services.values.length);
				}
				$scope.services.selected = $scope.services.values[index];
			} 

			$scope.getServiceItemMenuClass = function (service) {
				var res = "";
				if (service === $scope.services.selected) {
					res = "active";
				}
				return res;
			}

			$scope.$watch('services.selected', function (newVal, oldVal) {
				if (newVal !== oldVal) {
					var background = document.getElementById("background");
					background.style.backgroundImage = 
						"url('static/img/services/" + $scope.services.selected.background + "')";
				}
			});

		}]);
})();