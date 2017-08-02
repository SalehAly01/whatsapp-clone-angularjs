'use strict';

/**
 * @ngdoc function
 * @name whatsappCloneApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * Controller of the whatsappCloneApp
 */
angular.module('whatsappCloneApp')
  .controller('ChatCtrl', ChatCtrl);

function ChatCtrl($scope, $http, $routeParams, ChatService, toastr) {
  var vm = this;
  vm.title = "";
  vm.avatar = "";
  vm.messages = [];

  ChatService.getChat($routeParams.id)
    .then(function(sucess) {
      vm.title = sucess.data[0].title;
      vm.avatar = sucess.data[0].avatar;
      vm.messages = sucess.data[0].messages;
    }, function(error) {
      toastr.error('Something went wrong', 'Error');
    });

  // ChatService.sendMessage($scope.messageSend)
  //   .then(function(success) {
  //     vm.messages = sucess.data[0].messages;
  //   }, function(error) {
  //     toastr.error('Something went wrong', 'Error');
  //   });

}
