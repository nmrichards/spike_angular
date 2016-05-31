toDoApp.controller('ToDoController', ['ToDoFactory', function(ToDoFactory) {
  var self = this;

  self.todos = [];

  self.addToDo = function(todoText) {
    self.todos.push(new ToDoFactory(todoText));
  };

  self.removeToDo = function() {
    self.todos.pop();
  }
}]);


toDoApp.factory('ToDoFactory', function() {
  var Todo = function(todoText){
    this.text = todoText;
    this.completed = (typeof completed !== 'undefined') ? completed : false;
  };
  return Todo;
});

Todo.prototype.complete = function() {
    this.completed = true;
  };
  return Todo;
});
