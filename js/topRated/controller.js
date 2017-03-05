movieApp.controller('topRatedController', function($scope, MovieFactory) {


	MovieFactory.topRated()
	.then(function(response) {
		$scope.movies = response.data.results
		console.log($scope.movies)

	})
	
	$scope.section = "Top Rated Movies"
})


movieApp.factory('MovieFactory', function($http) {


    function topRated() {
    	var apiKey = "948f87525d1a8c74c15593d3966f0c91"
    	var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=<%KEY%>'
    	var urlN = url.replace('<%KEY%>', apiKey)
    	return $http.get(urlN)
    }

    return {

        topRated: topRated
    }

})