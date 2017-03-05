movieApp.controller('nowplayingController', function($scope, NowFactory) {



    NowFactory.nowPlaying()
    .then(function(response) {
        $scope.movies = response.data.results
        console.log($scope.movies)

    })

    $scope.section = "Now Playing"
})


movieApp.factory('NowFactory', function($http) {

    function nowPlaying() {
        var apiKey = "948f87525d1a8c74c15593d3966f0c91"
        var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=<%KEY%>'
        var urlN = url.replace('<%KEY%>', apiKey)
        console.log(urlN);
        return $http.get(urlN)
    }

    return {
        nowPlaying: nowPlaying
    }
})




   
