'use strict';

/**
 * @ngdoc function
 * @name rhas3App.controller:TabCtrl
 * @description
 * # TabCtrl
 * Controller of the rhas3App
 */
angular.module('rhas3App')
  .controller('TabCtrl', function ($scope) {
    $scope.tabs = [
      {
        title : 'Overview',
        class : 'green',
        url: 'main',
      },
      {
        title : 'Verlichting',
        class : 'yellow',
        url: 'about',
      },
      {
        title : 'Klimaat',
        class : 'blue'
      },
      {
        title : 'Overview',
        class : 'green'
      },
      {
        title : 'Verlichting',
        class : 'yellow'
      },
      {
        title : 'Klimaat',
        class : 'blue'
      },
      {
        title : 'Overview',
        class : 'green'
      },
      {
        title : 'Verlichting',
        class : 'yellow'
      },
      {
        title : 'Klimaat',
        class : 'blue'
      }
    ];
  });
