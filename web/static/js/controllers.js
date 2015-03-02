(function () {
	angular.module("maiko.controllers", [])
		.controller("HomeController", [function () {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/home.jpg')";
		}])
		.controller("MainController", [function () {
		}])
		.controller("QuienesSomosController", [function () {
			var background = document.getElementById("background");
			background.style.backgroundImage = "url('static/img/quienes-somos.png')";
		}]);
})();