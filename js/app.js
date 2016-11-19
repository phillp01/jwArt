angular.module('jwArt', ['ngRoute', 'RouteControllers','navbarDirective','galleryThumbsDirective','testService','wu.masonry']);
 
angular.module('jwArt').config(function($routeProvider) {
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })

    .when('/gallery', {
    	templateUrl: 'templates/gallery.html',
    	controller: 'GalleryController'
    })

    .when('/singleimage', {
    	templateUrl: 'templates/singleimage.html',
    	controller: 'SingleImageController'
    })

    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'contactController'
    })
});