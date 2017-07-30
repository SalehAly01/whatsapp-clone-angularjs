'use strict';

angular.module('whatsappCloneApp')
  .config(function($routeProvider, $locationProvider, $authProvider, ENV_VAR) {
    $authProvider.configure({
      apiUrl: ENV_VAR.baseUrl
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
        }
      })
      .when('/sign_in', {
        templateUrl: 'views/sign_in.html',
        controller: 'AuthCtrl',
      })
      .when('/conversations/:id', {
        templateUrl: 'views/active_chat.html',
        controller: 'MainCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('');
  });
