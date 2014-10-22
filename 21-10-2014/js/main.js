angular.module('myApp',[])
    .controller('firstController', function($scope, $rootScope, persons){
        $scope.testing = 'world';
        $scope.fetch = function(){
//            $http.get('data.json').success(function(data){
////            console.log(data );
//                $scope.persons = data;
//            });
            persons.getPerson(function(data){
                $scope.persons = data;
            });
        };
    })
    .service('persons', function($http){
       return {
           getPerson: function (callBack) {
               $http.get('data.json').success(callBack)
           }
       };
    });
