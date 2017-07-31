'use strict';

angular.module('whatsappCloneApp')
  .config(function($authProvider, $logProvider, $qProvider, ENV_VAR) {
    $logProvider.debugEnabled(true);
    $qProvider.errorOnUnhandledRejections(false);
    $authProvider.configure([{
      default: {
        apiUrl: ENV_VAR.apiUrl,
        storage: 'window.sessionStorage'
      }
    }]);
  });
