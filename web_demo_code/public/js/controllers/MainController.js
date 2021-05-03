app.controller('MainController', ['$scope', function($scope) {
	$scope = "hi";
	$scope.addImage = function() {
		$scope.push($scope.imageInput);
	}
}])