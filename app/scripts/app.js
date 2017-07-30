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
    'ngRoute',
    'ng-token-auth'
  ])
  .config(function ($routeProvider, $locationProvider, $authProvider) {
    $authProvider.configure({
      // apiUrl: 'http://api.example.com'
    });
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/conversations', {
        templateUrl: 'views/conversations.html',
        controller: 'MainCtrl',
        resolve: {
        auth: ['$auth', function($auth) {
          return $auth.validateUser();
        }]
      }})
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'AuthCtrl',
      })
      .when('/conversations/:id', {
        templateUrl: 'views/active_chat.html',
        controller: 'MainCtrl',
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl',
        controllerAs: 'myroute'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('');
  });
  // angular.module('whatsappCloneApp').run(['$rootScope', '$location', function($rootScope, $location) {
  //   $rootScope.$on('auth:login-success', function() {
  //     $location.path('/');
  //   });
  // }]);
