// MODEL

const TodoItem = Backbone.Model.extend({
  defaults: {
    completed: false
  },

  // connect to the API
  urlRoot: "https://jsonplaceholder.typicode.com/todos",

  // validation
  validate: function(attrs) {
    if (!attrs.title) return "Title is required";
  },

  // update the state of the model
  toggle: function() {
    this.set("completed", !this.get("completed"));
  }
});
