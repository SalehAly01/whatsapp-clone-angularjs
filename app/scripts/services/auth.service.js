'use strict';

angular
  .module('whatsappCloneApp').factory('AuthService', function($auth, $location, $log, $rootScope) {
    return {
      loginUser: function(loginForm) {
        $auth.submitLogin(loginForm)
          .then(function() {
            $location.path('/conversations');
          }).catch(function(response) {
            $log.error(response);
          });
      },
      logOutUser: function() {
        $auth.signOut()
          .then(function() {
            $location.path('/');
          }).catch(function(response) {
            $log.error(response);
          });
      }
    };
  });
