/* esnext: true*/
'use strict';
import angular from "angular";
require('../css/index.css');

let app = angular.module("StarWars", []);

app.run(() => {

});

app.controller("swctrl", function ($scope, planetsService) {
	$scope.show = false;
	$scope.planetList = [];
	$scope.hide = () => $scope.show = !$scope.show;
	planetsService.getPlanets("http://swapi.co/api/planets/",  (result) => {
		$scope.planetList.push.apply($scope.planetList, result);
	});
});


app.service("planetsService", function ($http) {
	this.getPlanets = (url, cb) => {
		$http.get(url).success( (data) => {
			cb(data.results);
			if(data.next !== null) {
				this.getPlanets(data.next, cb);
			}
		});
	};
});