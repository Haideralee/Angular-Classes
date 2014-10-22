// if array in key than we use key in keys array loop
// if object in key than we use (key,value) in keys object loop

angular.module('todoApp', [])
    .controller('TodoController', ['$scope', function($scope) {
//            $scope.items = {
//                title: 'lorem',
//                age: 20,
//                type: 'M'
//            };
        $scope.items = [
                            {name:'John', phone:'555-1276'},
                            {name:'Mary', phone:'0900-786-01'},
                            {name:'Mike', phone:'555-4321'},
                            {name:'Adam', phone:'555-5678'},
                            {name:'Julie', phone:'555-8765'}
                        ];
        $scope.item1 = false;
        $scope.item2 = false;
        $scope.item3 = false;

        $scope.addItem = function(){
            if(!$scope.name || !$scope.phone) return;
            $scope.items.push({name:$scope.name, phone:$scope.phone});
            $scope.name = '',
            $scope.phone = '';
        };
        $scope.removeThis = function(item){
//                console.log(_self);
            var index = $scope.items.indexOf(item);
            $scope.items.splice(index,1);
        }

    }]);
