'use strict';
/* Controllers */

function LocationListCtrl($scope, TaxiStand) {
	$scope.locations = TaxiStand.query();

	$scope.currentIsland = 'Hong Kong';
	$scope.CreateHeader = function(island) {
	      var showHeader = (island!=$scope.currentIsland); 
	       $scope.currentIsland = island;
	      return showHeader;
	}

  angular.extend($scope, {
    center: {
      latitude: 22.24, // initial map center latitude
      longitude: 114.24, // initial map center longitude
    },    
    zoom: 12, // the zoom level,
    markers: []
  });

  $scope.changelocation = function($longitude, $latitude){
      $scope.center.longitude = $longitude;
      $scope.center.latitude = $latitude;
      $scope.zoom = 18;

      this.addTaxiMarker($longitude, $latitude);          
  }

  $scope.addTaxiMarker = function($longitude, $latitude) {
    $scope.markers.length = 0;

    $scope.markers.push({
        latitude: parseFloat($latitude),
        longitude: parseFloat($longitude),
        icon: 'img/taxi-icon.png'
    });

    $scope.markerLat = null;
    $scope.markerLng = null;    
  }
}