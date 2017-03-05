movieApp.config(function($routeProvider){

	$routeProvider
	.when('/nowplaying', {
		templateUrl: 'js/nowplaying/nowplaying.html',
		controller: 'nowplayingController',
	})
	.when('/popular', {
		templateUrl: 'js/popular/popular.html',
		controller: 'popularController',
	})
	.when('/topRated', {
		templateUrl: 'js/topRated/topRated.html',
		controller: 'topRatedController',
	})
	.when('/upcomming', {
		templateUrl: 'js/upcomming/upcomming.html',
		controller: 'upcommingController',
	})

})