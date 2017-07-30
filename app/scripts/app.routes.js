'use strict';

angular.module('whatsappCloneApp')
  .config(function($authProvider, $routeProvider, $locationProvider, $logProvider) {

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'AuthCtrl',
      })
      .when('/conversations', {
        templateUrl: 'views/conversations.html',
        controller: 'AuthCtrl',
        resolve: {
          auth: ['$auth', function($auth) {
            return $auth.validateUser();
          }]
        }
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'AuthCtrl',
      })
      .when('/conversations/:id', {
        templateUrl: 'views/active_chat.html',
        controller: 'AuthCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  });
