movieApp.controller('upcommingController', function($scope, movieFactory) {
	

	movieFactory.getUpComming()
	.then(function(response) {
		$scope.movies = response.data.results
		console.log($scope.movies)

	})

	$scope.section = "Up Comming Movies"
})


movieApp.factory('movieFactory', function($http) {


    function getUpComming() {
    	var apiKey = "948f87525d1a8c74c15593d3966f0c91"
    	var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=<%KEY%>'
    	var urlN = url.replace('<%KEY%>', apiKey)
    	return $http.get(urlN)
    }

    return {

        getUpComming: getUpComming
    }

})