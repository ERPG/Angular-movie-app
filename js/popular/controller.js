movieApp.controller('popularController', function($scope, PopularFactory) {

	PopularFactory.getPopular()
    .then(function(response) {
        $scope.movies = response.data.results
        console.log($scope.movies)

    })
	
	$scope.section = "Popular Movies"
})

movieApp.factory('PopularFactory', function($http) {


    function getPopular() {
    	var apiKey = "948f87525d1a8c74c15593d3966f0c91"
    	var url = 'https://api.themoviedb.org/3/movie/popular?api_key=<%KEY%>'
    	var urlN = url.replace('<%KEY%>', apiKey)
    	return $http.get(urlN)
    }

    return {

        getPopular: getPopular
    }

})