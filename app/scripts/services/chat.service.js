'use strict';

angular
  .module('whatsappCloneApp')
  .factory('ChatService', function($http, Upload, ENV_VAR) {
    // var base_url = ENV_VAR.apiUrl + '/conversations/';

    return {
      getChat: function(id) {
        // return $http.get(baseUrl + id + ".json");
        return $http.get("scripts/db/conversations/" + id + ".json");
      },
      sendMessage: function(data) {
        // return Upload.upload({
        //   url: base_url + id + '.json',
        //   method: 'post',
        //   data: data
        // })
      }
    };
  });
