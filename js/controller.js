// angular.module('RouteControllers', ['ngAnimate','ngTouch'])
angular.module('RouteControllers', [])

	.controller('HomeController', function($scope)	{
		$scope.title = "Welcome To JW Art";
	})

	.controller('GalleryController', function ($scope, $location, testingService) {

		$scope.hides = {};

		// Set of Photos
		$scope.photos = [
			{id:'12',artist:'James Woodall', thumbnail: 'img/thumbs/barSceneCropped.jpg', src: 'img/barSceneCropped.jpg', desc: 'Bar Scene', collection: 'Batman Superheroes', medium: 'Acrylic on canvas', size: 'Mahoosive', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'1',artist:'James Woodall',thumbnail:'img/thumbs/batman.jpg', src: 'img/batman.jpg', desc: 'Batman Psychadelic', collection: 'Batman Classic', medium: 'Acrylic on canvas', size: 'Nicely Sized', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'2',artist:'James Woodall',thumbnail:'img/thumbs/bobafet.jpg',src: 'img/bobafet.jpg', desc: 'Boba Fet Psychadelic',collection: 'Star Wars Psych', medium: 'Acrylic on canvas', size: 'Good', availability: 'Original available', price:'£999',thumbSize:'50'},
			{id:'9',artist:'James Woodall',thumbnail:'img/thumbs/catWoman.jpg',src: 'img/catWoman.jpg', desc: 'Cat Woman',collection: 'Batman Cat Woman Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'4',artist:'James Woodall',thumbnail:'img/thumbs/catWoman2.jpg',src: 'img/catWoman2.jpg', desc: "Michelle Pffeifer's Cat Woman",collection: 'Batman Cat Woman Classic', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'5',artist:'James Woodall',thumbnail:'img/thumbs/catWomanCallMeCropped.jpg',src: 'img/catWomanCallMeCropped.jpg', desc: 'Cat Woman - Call me',collection: 'Batman Cat Woman Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'6',artist:'James Woodall',thumbnail:'img/thumbs/joker.jpg',src: 'img/joker.jpg', desc: "Jack Nicholson's Joker",collection: 'Batman Joker Classic', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'7',artist:'James Woodall',thumbnail:'img/thumbs/jokerHeathCropped.jpg',src: 'img/jokerHeathCropped.jpg', desc: "Heath Ledger's Joker" ,collection: 'Batman Joker Classic', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'75'},
			{id:'8',artist:'James Woodall',thumbnail:'img/thumbs/jokerSketch.jpg',src: 'img/jokerSketch.jpg', desc: 'The Joker - Sketch',collection: 'Batman Joker Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'3',artist:'James Woodall',thumbnail:'img/thumbs/jokerGolfCropped.jpg',src: 'img/jokerGolfCropped.jpg', desc: 'The Joker - Golfer',collection: 'Batman Joker Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'10',artist:'James Woodall',thumbnail:'img/thumbs/michaelangeloCropped.jpg',src: 'img/michaelangeloCropped.jpg', desc: 'TMNT - Michaelangelo',collection: 'TMNT Turtles', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'11',artist:'James Woodall',thumbnail:'img/thumbs/penguin.jpg',src: 'img/penguin.jpg', desc: 'Batman - The Penguin',collection: 'Batman Penguin Classic', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'13',artist:'James Woodall',thumbnail:'img/thumbs/rogues.jpg',src: 'img/rogues.jpg', desc: 'Rogues Gallary',collection: 'Batman Joker Penguin Halequin Ridler Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'14',artist:'James Woodall',thumbnail:'img/thumbs/spiderman.jpg',src: 'img/spiderman.jpg', desc: 'Spiderman',collection: 'Spderman', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'50'},
			{id:'15',artist:'James Woodall',thumbnail:'img/thumbs/wonderWoman.jpg',src: 'img/wonderWoman.jpg', desc: 'Wonder Woman',collection: 'Wonder Woman Sketch', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
			{id:'16',artist:'James Woodall',thumbnail:'img/thumbs/yoda.jpg',src: 'img/yoda.jpg', desc: 'Yoda Psychadelic',collection: 'Star Wars Psych Yoda', medium: 'Acrylic on canvas', size: 'Average', availability: 'Original available', price:'£999',thumbSize:'25'},
		];

		$scope.viewPic = function(selectedPic)	{
		
			testingService.set(selectedPic, $scope);
			$location.path("/singleimage");

		}
		
	})

	.controller('SingleImageController', function ($scope, testingService) {
		console.log ("Controller Run");
		
		$scope.imageDetails = {};
		$scope.imageDetails = testingService.get();

	})

	.controller('contactController', function ($scope) {

		console.log ("Controller Run");
		
		$scope.submitContactForm = function()	{

			console.log("RUN HERE");

			if ($scope.contactForm.$valid)	{

				$scope.fullName = $scope.contact.fullName;

				console.log ($scope.fullName);
				
			}
		}

	});


