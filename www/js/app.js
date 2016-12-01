// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ionic.ion.headerShrink', 'ion-floating-menu'])
angular.module('dietasja', ['backand'])


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

.config(function (BackandProvider) {
  BackandProvider.setAppName('dietasja');
  BackandProvider.setAnonymousToken('0150a110-2d07-4122-a227-a5653cae8448');
})

.controller('AppCtrl', function($scope, TodoService) {
  $scope.todos = [];
  $scope.input = {};
 
  function getAllTodos() {
    TodoService.getTodos()
    .then(function (result) {
      $scope.todos = result.data.data;
    });
  }
 
  $scope.addTodo = function() {
    TodoService.addTodo($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our todos, not super cool
      getAllTodos();
    });
  }
 
  $scope.deleteTodo = function(id) {
    TodoService.deleteTodo(id)
    .then(function (result) {
      // Reload our todos, not super cool
      getAllTodos();
    });
  }
 
  getAllTodos();
})

.service('TodoService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'todos/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
 
  function getUrlForId(id) {
    return getUrl() + id;
  }
 
  getTodos = function () {
    return $http.get(getUrl());
  };
 
  addTodo = function(todo) {
    return $http.post(getUrl(), todo);
  }
 
  deleteTodo = function (id) {
    return $http.delete(getUrlForId(id));
  };
 
  return {
    getTodos: getTodos,
    addTodo: addTodo,
    deleteTodo: deleteTodo
  }
});

function MyCtrl($scope, $ionicHistory) {
  $scope.myGoBack = function() {
    $ionicHistory.goBack();
  };
}

