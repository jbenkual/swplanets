'use strict';
import angular from "angular";
require('../css/index.css');

let app = angular.module("twitterClone", []);

app.controller("TweetCtrl", function ($scope) {
	$scope.tweet = '';

	$scope.invalidTweetLength = function () { 
		return $scope.tweet.length === 0 || $scope.remainingCharacters() < 0;
	}

	$scope.remainingCharacters = function () {
		return 140 - $scope.tweet.length;
	}
});