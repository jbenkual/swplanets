/* esnext: true*/
'use strict';
import angular from "angular";
require('../css/index.css');

let app = angular.module("StarWars", []);

app.controller("swctrl", function ($scope, $http) {
	$scope.planetList = [];
	let count = 0;
	$scope.getData = (url) => {
		console.log("loading info");
		$http.get(url).success( (data) => {
			console.log(data);
			$scope.planetList.push.apply($scope.planetList, data.results);
			if(data.next !== "null") {
				$scope.getData(data.next);
			}
		});
	};

	$scope.getData("http://swapi.co/api/planets/");

});