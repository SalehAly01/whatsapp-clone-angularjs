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

function ChatCtrl($scope, $http, $routeParams, ChatService) {
  var vm = this;
  vm.title = "title";
  vm.avatar = "avatar";
  vm.messages = [];

  ChatService.getChat($routeParams.id)
    .then(function(sucess) {
      vm.title = sucess.data[0].title;
      vm.avatar = sucess.data[0].avatar;
      vm.messages = sucess.data[0].messages;
    }, function(error) {
      console.log("Something went wrong");
    });

  // ChatService.sendMessage($scope.messageSend)
  //   .then(function(success) {
  //     vm.messages = sucess.data[0].messages;
  //   }, function(error) {
  //     console.log('Something went Wrong!');
  //   });

}
