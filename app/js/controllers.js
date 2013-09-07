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
    zoom: 12, // the zoom level
  });

  $scope.changelocation = function($longitude, $latitude){
      $scope.center.longitude = $longitude;
      $scope.center.latitude = $latitude;
      $scope.zoom = 18;
  }
}