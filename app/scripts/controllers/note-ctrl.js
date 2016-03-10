(function() {
  'use strict';

  angular.module('note-app.controllers')
    .controller('noteCtrl', ['$stateParams', '$state', 'Note',
      function($stateParams, $state, Note) {

      var vm = this;
      //array to hold all notes
      vm.notes = [];

      //for each of the notes in the localStorage
       for ( var note in localStorage) {
          // parse JSON string and add to notes array
         var newNote = JSON.parse(localStorage[note]);
         vm.notes.push(newNote);
       }

      //create new notes
      vm.addNote = function() {
        var aNote = {
          //set localStorage.length to id to have a unique parameter
          id: localStorage.length,
          title: vm.note.title,
          content: vm.note.content
        };
        //save note into localStorage
        Note.saveNote(JSON.stringify(aNote));
        //push the new note to the notes array
        vm.notes.push(aNote);

        //clear the form
        vm.note = {
          title: "",
          content: ""
        };
      };

      //edit a note
      vm.editANote = function() {
        var updateNote = {
          id: $stateParams.id,
          title: vm.editNote.title,
          content: vm.editNote.content
        };
        //save updated note using the id
        localStorage.setItem('note' + $stateParams.id, JSON.stringify(updateNote));
        //redirect back to the home page
        $state.go('home');
      };

      //delete a note
      vm.deleteNote = function(index, note) {
        //delete a note using its id
        localStorage.remove('note' + note.id);
        //remove from array
        vm.notes.splice(index, 1);
      };

      //get a note
      vm.getNote = function() {
       var aNote = JSON.parse(localStorage.getItem('note' + $stateParams.id));
        vm.editNote = aNote;
     };
    }]);
})();
