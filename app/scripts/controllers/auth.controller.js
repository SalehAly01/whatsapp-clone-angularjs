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

function AuthCtrl($scope, $auth, $log, AuthService, toastr) {
  var vm = this;

  $auth.validateUser().then(
    function(resp) {
      if (resp.configName === "default") {
        $scope.user = resp;
      } else {
        $scope.user = null;
      }
    }
  );

  vm.loginUser = function() {
    AuthService.loginUser($scope.loginForm)
  };

  vm.logOutUser = function() {
    AuthService.logOutUser()
  };

}
