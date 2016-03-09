(function() {
  'use strict';

  angular.module('note-app.controllers', []);

  //require controllers
  require('./controllers/note-ctrl');

  window.app = angular.module('note-app', [
    'note-app.controllers',
    'ngMaterial',
    'ui.router'
  ]);

  window.app.config(['$stateProvider', '$urlRouterProvider',
    '$mdThemingProvider', '$locationProvider', function($stateProvider,
      $urlRouterProvider, $mdThemingProvider, $locationProvider) {

        //when a non-existent state is entered
        $urlRouterProvider.otherwise('/404');

        $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('pink');

      // Now set up the states
      $stateProvider
        .state('home', {
          url: '/',
          controller: 'noteCtrl',
          templateUrl: 'views/home.html',
        })

        .state('edit-note', {
          url: '/note/{id}',
          controller: 'noteCtrl',
          templateUrl: 'views/note-modal.html',
        });

        $locationProvider.html5Mode(true);
    }]);
})();
