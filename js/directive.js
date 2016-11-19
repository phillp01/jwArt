angular.module('navbarDirective',[]).directive('navbar', function()	{
	return	{
		restrict: 'E',
		templateUrl: 'templates/directives/navbar.html',
	};
});

angular.module('galleryThumbsDirective',[]).directive('thumbs', function()	{
	return	{
		restrict: 'E',
		templateUrl: 'templates/directives/galleryThumbs.html',

	};
});