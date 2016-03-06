'use strict';

/**
 * @ngdoc overview
 * @name rhas3App
 * @description
 * # rhas3App
 *
 * Main module of the application.
 */
angular
  .module('rhas3App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial',
    'chart.js'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tab/:tab', {
        templateUrl: function(urlattr){
          return 'views/' + urlattr.tab + '.html';
        },
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/tab/main'
      });
  }).constant('config', {
    api: 'http://localhost:3000',
  });
