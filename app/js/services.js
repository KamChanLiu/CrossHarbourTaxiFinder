'use strict';

angular.module('taxistandServices', ['ngResource']).
	factory('TaxiStand', function($resource){
		return $resource('data/taxistands.json', {}, {
			query: {method:'GET', params:{taxiStandId:'taxiStands'}, isArray:true}
		});
	});