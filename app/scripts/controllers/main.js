'use strict';

function HomeCtrl($scope, TaxiStandList) {
	angular.extend($scope, {
		center: {
			latitude: 22.24, // initial map center latitude
			longitude: 114.24, // initial map center longitude
		},
		zoom: 12, // the zoom level,
		markers: []
	});

	$scope.taxiStandLocations = TaxiStandList.query();
	$scope.currentIsland = 'Hong Kong';
	$scope.currentLocation = -1;

	$scope.CreateHeader = function(island) {
		var showHeader = (island!==$scope.currentIsland);
		$scope.currentIsland = island;
		return showHeader;
	};

	$scope.changeLocation = function($index, $longitude, $latitude){
			$scope.center.longitude = $longitude;
			$scope.center.latitude = $latitude;
			$scope.zoom = 18;

			this.addTaxiMarker($longitude, $latitude);
			$scope.currentLocation = $index;
		};

	$scope.addTaxiMarker = function($longitude, $latitude) {
		$scope.markers.length = 0;

		$scope.markers.push({
				latitude: parseFloat($latitude),
				longitude: parseFloat($longitude),
				icon: 'img/taxi-icon.png'
			});

		$scope.markerLat = null;
		$scope.markerLng = null;
	};

	$scope.findMe = function () {
			navigator.geolocation.getCurrentPosition(function (position) {
				$scope.center.longitude = position.coords.longitude;
				$scope.center.latitude = position.coords.latitude;
				$scope.zoom = 18;
				$scope.$apply();
			}, function () {

			});
		};
}