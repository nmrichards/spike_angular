toDoApp.controller('ToDoController', function() {

  var self = this;

  self.todos = [{text:'ToDo1', completed: false}, {text:'ToDo2', completed: true}];

  self.addToDo = function(todo){
    self.todos.push({text: todo, compeleted: false});
  }

  self.removeToDo = function(){
    self.todos.pop();
  }
});
