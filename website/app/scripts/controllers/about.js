'use strict';

/**
 * @ngdoc function
 * @name rhas3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the rhas3App
 */
angular.module('rhas3App')
  .controller('AboutCtrl', function ($scope, $http, $log, config) {
    $scope.brightness = 100;

    //Get brightness from server
    $http({
      method : 'GET',
      url : config.api + '/system/display/brightness'
    }).then(function succes(response) {
      $scope.brightness = response.data.brightness;
    }, function error(response) {
      $log.log(response);
    });

    //When brightness change post request to server
    $scope.$watch(function() {
      return $scope.brightness;
    }, function(newValue, oldValue) {
      $http({
        method : 'POST',
        data: { brightness: $scope.brightness },
        url : config.api + '/system/display/brightness'
      }).then(function succes(response) {
        $log.log(response);
      }, function error(response) {
        $log.log(response);
      });
    });
  });
