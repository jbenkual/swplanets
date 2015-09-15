'use strict';
import angular from "angular";
require('../css/index.css');

let app = angular.module("twitterClone", []);

app.controller("TweetCtrl", function ($scope, $http) {
	$scope.tweet = '';

	$scope.invalidTweetLength = () => $scope.tweet.length === 0 || $scope.remainingCharacters() < 0;
	$scope.remainingCharacters = () => 140 - $scope.tweet.length;

	$scope.getIMG = () => {
		$http.get("https://www.reddit.com/r/perfectloops.json").success( (data) => {
			let item =  data.data.children[Math.floor(Math.random() * data.data.children.length-1)+1].data;
			$scope.LOOP = item.url;
		});
	};

	$scope.tweetList = [];
	$scope.sendTweet = () => {
		$scope.tweetList.unshift($scope.tweet);
		if($scope.tweet.match(/(?:\b|^)\#perfectloop(?:\b|$)/)) {
			$scope.getIMG();
			//console.log("test!");
		}
	};
	$scope.tweet = '';

	$scope.LOOP = "http://i.imgur.com/6dMSUzb.gif";

	$scope.tweetsEmpty = () => $scope.tweetList.length <= 0;

	$scope.hide = true;
});

app.directive('myEnter', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if(event.which === 13) {
                scope.$apply(function (){
                    scope.$eval(attrs.myEnter);
                });

                event.preventDefault();
            }
        });
    };
});