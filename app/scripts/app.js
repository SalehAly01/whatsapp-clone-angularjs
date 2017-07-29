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
      .when('/conversations', {
        templateUrl: 'views/conversations.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/conversations/:id', {
        templateUrl: 'views/active_chat.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
