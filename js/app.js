angular.module('jwArt',['ngRoute','RouteControllers']);

angular.module('jwArt').config(function($routeProvider)	{
	$routeProvider.when('/',	{
		templateUrl:'templates/home.html',
		controller:'HomeController'
	})
});