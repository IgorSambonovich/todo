var app = angular.module('angularjs-starter', []);

app.controler('Controle', function($scope, $location, $anchorScroll){
    $scope.scrollTo = function(id) {
        $location.hash(id);
        console.log($location.hash());
        $anchorScroll;
    };
});