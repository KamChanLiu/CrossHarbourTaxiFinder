'use strict';

angular.module('taxistand', ['taxistandServices', 'google-maps']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/taxis', {templateUrl: 'partials/location-list.html', controller: LocationListCtrl }).
			otherwise({redirectTo: '/taxis'});
	}]);