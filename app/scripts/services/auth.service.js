'use strict';

angular
  .module('whatsappCloneApp').factory('AuthService', function($rootScope) {
    return {
      signedIn: false,
      signIn: function(value) {
        this.signedIn = value;
        $rootScope.$broadcast('signedIn');
      },
      getCurrentUser: function(user) {
        this.currentUser = user;
        $rootScope.$broadcast('currentUser');
      }
    };
  });
