'use strict';

/**
 * @ngdoc overview
 * @name whatsappCloneApp
 * @description
 * # whatsappCloneApp
 *
 * Main module of the application.
 */
angular
  .module('whatsappCloneApp', [
    'ngAnimate',
    'ngCookies',
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
