 

angular.module("todos")
.controller("todoCtrl", function($scope){

    $scope.todos = [ 
        "create a todo list", 
        "update this",
        "remove things from list",
        "show completed stuff"
    ];

    $scope.addTodo = function(){
        $scope.todos.push($scope.newTodo);
        $scope.newTodo = "";
    }

    $scope.removeTodo = function(todo){
        $scope.todos = $scope.todos.filter(function(cur){
            return cur !== todo;
        })
        
    }

    $scope.startEdit = function(todo, index){
        $scope.editedTodo = todo;
        $scope.index = index;
        $scope.editing = true;
    }

    $scope.modifyTodo = function(todo){
        $scope.todos[$scope.index] = todo;
        $scope.editing = false;
    }

});