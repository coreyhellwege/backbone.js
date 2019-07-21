// COLLECTION VIEW

const TodoItemsView = Backbone.View.extend({
  id: "todoItemsContainer",

  // Require a model to be passed when the view is intantiated
  initialize: function(options) {
    if (!(options && options.model)) throw new Error("model is not specified");

    // listen for the events
    this.model.on("add", this.onAddTodoItem, this);
    this.model.on("remove", this.onRemoveTodoItem, this);
  },

  // handle collection events

  // add an item to the list
  onAddTodoItem: function(todoItem) {
    const view = new TodoItemView({ model: todoItem });
    this.$("#todoItems").append(view.render().$el);
  },

  // remove an item from the view
  onRemoveTodoItem: function(todoItem) {
    this.$("li#" + todoItem.id).remove();
  },

  // handle DOM events
  events: {
    "keypress #newTodoItem": "onKeyPress"
  },

  // create new item and add it to the collection
  onKeyPress: function(e) {
    // target 'enter/return' key
    if (e.keyCode == 13) {
      const $textBox = this.$("#newTodoItem");

      if ($textBox.val()) {
        const todoItem = new TodoItem({
          title: $textBox.val()
        });
        // save and add to the collection
        this.model.create(todoItem);

        // clear textbox after submit
        $textBox.val("");
      }
    }
  },

  // render the todo items using a mustache template
  render: function() {
    const template = $("#todoItemsTemplate").html();
    const html = Mustache.render(template);
    this.$el.html(html);

    return this;
  }
});
