'use strict';

angular
  .module('whatsappCloneApp')
  .factory('ConversationsService', function($http, ENV_VAR) {
    // var base_url = ENV_VAR.apiUrl ;

    return {
      getConversations: function() {
        // return $http.get(baseUrl + "/conversations.json");
        return $http.get('scripts/db/conversations.json');
      }
    };
  });
