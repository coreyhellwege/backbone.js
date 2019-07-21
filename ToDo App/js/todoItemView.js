// MODEL VIEW

const TodoItemView = Backbone.View.extend({
  tagName: "li",

  // Require a model to be passed when the view is intantiated
  initialize: function(options) {
    if (!(options && options.model)) throw new Error("model is not specified");

    // update the view when a change is made to the model
    this.model.on("change", this.render, this);
  },

  events: {
    "click #toggle": "onClickToggle",
    "click #delete": "onClickDelete"
  },

  onClickDelete: function() {
    this.model.destroy();
  },

  // call the toggle method
  onClickToggle: function() {
    this.model.toggle();
    // save the changes to the server
    this.model.save();
  },

  render: function() {
    // set the ID attribute to the model's ID
    this.$el.attr("id", this.model.id);

    // display completed items
    this.$el.toggleClass("completed", this.model.get("completed"));

    // use mustache template
    const template = $("#todoItemTemplate").html();
    const html = Mustache.render(template, this.model.toJSON());
    this.$el.html(html);

    return this;
  }
});
