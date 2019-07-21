// render a list of models
$(document).ready(function() {
  // fetch collection from the server
  const todoItems = new TodoItems();
  todoItems.fetch();

  // pass them to the view
  const todoItemsView = new TodoItemsView({ model: todoItems });

  // render them
  $("body").append(todoItemsView.render().$el);
});
