'use strict';

angular.module('taxistand', ['taxistandServices', 'google-maps']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/', {templateUrl: 'partials/location-list.html', controller: LocationListCtrl }).
			otherwise({redirectTo: '/'});
	}]);