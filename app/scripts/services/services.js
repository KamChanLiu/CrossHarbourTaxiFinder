'user strict';

angular.module('taxiStandServices', ['ngResource']).
	factory('TaxiStandList', function($resource){
		return $resource('data/taxistands.json', {}, {
			query: {method:'GET', params:{taxiStandId:'taxiStandList'}, isArray:true}
		});
	});