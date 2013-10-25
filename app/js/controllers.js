'use strict';
/* Controllers */

function LocationListCtrl($scope, TaxiStand) {
	$scope.locations = TaxiStand.query(); 
	$scope.currentIsland = 'Hong Kong';
  $scope.currentLocation = -1;

	$scope.CreateHeader = function(island) {
	      var showHeader = (island!=$scope.currentIsland); 
	       $scope.currentIsland = island;
	      return showHeader;
	}

  angular.extend($scope, {
    center: {
      latitude: 22.280647, // initial map center latitude
      longitude: 114.154881, // initial map center longitude
    },    
    zoom: 12, // the zoom level,
    markers: []    
  });

  $scope.changeLocation = function($index, $longitude, $latitude){
      $scope.center.longitude = $longitude;
      $scope.center.latitude = $latitude;
      // $scope.zoom = 18;     

      this.addTaxiMarker($longitude, $latitude);
      $scope.currentLocation = $index;
      console.log($scope.currentLocation);
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

  $scope.findMe = function () {    
      navigator.geolocation.getCurrentPosition(function (position) {        
        $scope.markers.length = 0;
        $scope.markers.push({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude          
        });
        
        $scope.center.latitude = position.coords.latitude;
        $scope.center.longitude = position.coords.longitude;
        $scope.zoom = 15;

        $scope.$apply();
      }, function () {
          alert('Unable to find your location!');
          
          // temp fix when there is no location
          $scope.markers.length = 0;
          $scope.markers.push({
            latitude: 22.280647,
            longitude: 114.154881            
          });

        $scope.center.latitude = 22.280647;
        $scope.center.longitude = 114.154881;
        $scope.zoom = 15;

        $scope.$apply();

      });
    }
}