'use strict';

angular
  .module('whatsappCloneApp')
  .factory('ConversationsService', function($http, ENV_VAR) {

    return {
      getConversations: function(){
        // return $http.get(baseUrl + "/conversations.json");
        return $http.get('scripts/db/conversations.json');
      },
      // getChat: function(id){
      //   return $http.get(baseUrl + "/conversations/" + id + ".json");
      // }
    };
  });
