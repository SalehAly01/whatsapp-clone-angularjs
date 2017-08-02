'use strict';

/**
 * @ngdoc function
 * @name whatsappCloneApp.controller:ConversationsCtrl
 * @description
 * # ConversationsCtrl
 * Controller of the whatsappCloneApp
 */
angular.module('whatsappCloneApp')
  .controller('ConversationsCtrl', ConversationsCtrl);

function ConversationsCtrl($scope, $http, ConversationsService) {
  var vm = this;
  vm.conversations = [];

  ConversationsService.getConversations()
    .then(function(sucess) {
      vm.conversations = sucess.data
    }, function(error) {
      toastr.error('Something went wrong', 'Error');
    });
}
