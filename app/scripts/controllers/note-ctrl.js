(function() {
  'use strict';

  angular.module('note-app.controllers')
    .controller('noteCtrl', ['$scope', '$stateParams', '$state', function($scope, $stateParams, $state) {

      //array to hold all notes
      $scope.notes = [];

      //for each of the notes in the localStorage
       for ( var note in localStorage) {
          // parse JSON string and add to notes array
         var newNote = JSON.parse(localStorage[note]);
         $scope.notes.push(newNote);
       }

      //create new notes
      $scope.addNote = function() {
        var aNote = {
          //set localStorage.length to id to have a unique parameter
          id: localStorage.length,
          title: $scope.note.title,
          content: $scope.note.content
        };
        //save note into localStorage
        localStorage.setItem('note' + localStorage.length, JSON.stringify(aNote));
        //push the new note to the notes array
        $scope.notes.push(aNote);

        //clear the form
        $scope.note = {
          title: "",
          content: ""
        };
      };

      //edit a note
      $scope.editANote = function() {
        var updateNote = {
          title: $scope.editNote.title,
          content: $scope.editNote.content
        };
        //save updated note using the id
        localStorage.setItem('note' + $stateParams.id, JSON.stringify(updateNote));
        //redirect back to the home page
        $state.go('home');
      };

      //delete a note
      $scope.deleteNote = function(index, note) {
        //delete a note using its id
        localStorage.removeItem('note' + note.id);
        //remove from array
        $scope.notes.splice(index, 1);
      };

      //get a note
      $scope.getNote = function() {
       var aNote = JSON.parse(localStorage.getItem('note' + $stateParams.id));
        $scope.editNote = aNote;
     };
    }]);
})();
