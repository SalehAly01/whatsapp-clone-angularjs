'use strict';

/**
 * @ngdoc function
 * @name whatsappCloneApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the whatsappCloneApp
 */
angular.module('whatsappCloneApp')
  .controller('AuthCtrl', AuthCtrl);

function AuthCtrl($scope, $auth, $location, $log, AuthService) {
  var vm = this;
  vm.loginUser = function() {
    $auth.submitLogin($scope.loginForm)
      .then(function(user) {
        AuthService.signIn(true);
        AuthService.getCurrentUser(user);
        $location.path('/conversations');
      }).catch(function(err) {
        alert('Wrong');
        $log.log(err);
      });
  };
}
