angular.module('testService',[])

	.service('testingService', function()	{
		var savedData = {}
		
		function set(data, $scope)	{
			savedData = data;
			$scope.hides.class = "show";
			console.log($scope.hides.class);
		}

		function get()	{
			return savedData;
		}

		return	{
			set: set,
			get: get
		}

	})