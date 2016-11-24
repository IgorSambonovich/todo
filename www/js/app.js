// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic.ion.headerShrink', 'ion-floating-menu', 'ngCordova'])



app.controller('MainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.abreEsq  = function() {
    $ionicSideMenuDelegate.toggleLeft()
    }
})
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
      StatusBar.overlaysWebView(false);
      StatusBar.backgroundColorByHexString('#387ef5');
    }
  });
})


myApp.controller('MyCtrl', function ($scope,$ionicScrollDelegate,$location) {
  $scope.scrollTo = function(target){
    $location.hash(target);   //set the location hash
    var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
    handle.anchorScroll(true);  // 'true' for animation
  };
});

app.config(function($stateProvider) {
    $stateProvider
    .state('index', {
        url: '/',
        templateUrl: 'index.html'
    })
})

function MyCtrl($scope, $ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}
