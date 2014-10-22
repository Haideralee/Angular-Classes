angular.module('myApp',['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/',{
                controller:'homeCrtl',
                templateUrl:'views/home.html'
            })
            .when('/about',{
                controller:'aboutCrtl',
                templateUrl:'views/about.html'
            })
            .when('/contact',{
                controller:'contactCrtl',
                templateUrl:'views/contact.html'
            })
    }])
    .controller('homeCrtl', function($scope, titles){
        $scope.title = 'This is a Home';
        var fetch = function(){
                titles.getPerson(function(data){
                $scope.titles = data;
            });
        };
        fetch();
    })
    .controller('aboutCrtl', function($scope, titles){
        $scope.title = 'This is a Home';
        var fetch = function(){
            titles.getPerson(function(data){
                $scope.titles = data;
            });
        };
        fetch();
    })
    .controller('contactCrtl', function($scope, titles){
        $scope.title = 'This is a Home';
        var fetch = function(){
            titles.getPerson(function(data){
                $scope.titles = data;
            });
        };
        fetch();
    })
//    .controller('firstController', function($scope, $rootScope, persons){
//        $scope.testing = 'world';
//        $scope.fetch = function(){
////            $http.get('data.json').success(function(data){
//////            console.log(data );
////                $scope.persons = data;
////            });
//            persons.getPerson(function(data){
//                $scope.persons = data;
//            });
//        };
//    })
    .service('titles', function($http){
       return {
           getPerson: function (callBack) {
               $http.get('data.json').success(callBack)
           }
       };
    });
