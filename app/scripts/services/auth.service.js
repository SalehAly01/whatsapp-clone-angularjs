'use strict';

angular
  .module('whatsappCloneApp').factory('AuthService', function($auth, $location, $log, $rootScope, toastr) {
    return {
      loginUser: function(loginForm) {
        $auth.submitLogin(loginForm)
          .then(function() {
            $location.path('/conversations');
            toastr.success('Welcome back!', 'Toastr fun!');
          }).catch(function(response) {
            $log.error(response);
          });
      },
      logOutUser: function() {
        $auth.signOut()
          .then(function() {
            $location.path('/');
            toastr.info('We will miss you!');
          }).catch(function(response) {
            $log.error(response);
          });
      }
    };
  });
