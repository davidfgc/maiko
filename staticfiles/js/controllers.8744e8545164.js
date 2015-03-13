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
				['$scope', '$timeout','InfoService', 'ServiceService',
				function ($scope, $timeout, InfoService, ServiceService) {
			$scope.display = {};
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

			$scope.getMenuClass = function () {
				var clazz = "small-4 columns rightSide";
				if ($scope.services.selected) {
					clazz += " selected";
				}
				return clazz;
			}

			$scope.getServiceItemMenuClass = function (service) {
				var res = "";
				if (service === $scope.services.selected) {
					res = "active";
				}
				return res;
			}

			$scope.updateUI = function (displayMenu, service) {
				$scope.display.menu = displayMenu;
				if (service) {
					$scope.services.selected = service;
				}
				if (!$scope.services.selected) {

				}
				// var pageStyle = window.getComputedStyle(document.getElementById("paServicios"), null);
				// var menuServicesStyle = window.getComputedStyle(document.getElementById("menuServices"));
				// console.log(menuServicesStyle.height);
				// if (pageStyle.height > menuServicesStyle.height) {
				// 	document.getElementById("menuServices").style.minHeight = pageStyle.height;
				// }
				// document.getElementById("paServicios").style.minHeight = "512px";

				document.getElementsByClassName("rightSide")[0].style.height = 
					window.getComputedStyle(document.getElementsByClassName("background")[0]).height;
			}

			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/nuestros-servicios.jpg')";
			
			// elimina la selección cada vez que se entra a la página
			$scope.services.selected = undefined;
			
			$timeout($scope.updateUI, 0);
			$scope.$watch('services.selected', function (newVal, oldVal) {
				if (newVal !== oldVal) {
					var background = document.getElementById("background");
					background.style.backgroundImage = 
						"url('static/img/services/" + $scope.services.selected.background + "')";
				}
			});

		}]);
})();