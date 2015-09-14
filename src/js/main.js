'use strict';
import angular from "angular";
require('../css/index.css');

let app = angular.module("twitterClone", []);

app.controller("TweetCtrl", function () {
	this.tweet = '';

	this.invalidTweetLength = function () { 
		return this.tweet.length === 0 || this.remainingCharacters() < 0;
	}

	this.remainingCharacters = function () {
		return 140 - this.tweet.length;
	}
});