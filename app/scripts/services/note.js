(function() {
  'use strict';

  angular.module('note-app.services')
    .factory('Note', ['$window', function($window) {
      return {
        saveNote: function(note) {
          $window.localStorage.setItem('note' + localStorage.length, note);
        },
        getNote: function() {
          $window.localStorage.getItem('note');
        },
        removeNote: function() {
          $window.localStorage.removeItem('note');
        }
      };
    }]);
})();
