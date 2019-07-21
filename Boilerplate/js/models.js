// MODELS

// The .extend() method returns a JS constructor function which is assigned to the 'song' variable. You can optionally supply an object to the extend method to determine the model's configuration

// The 'initialize' method is automatically called by Backbone when an object of this type is instantiated

const Song = Backbone.Model.extend({
  initialize: function() {
    console.log("A new song has been added!");
  },
  // set default values
  defaults: {
    genre: "Rock"
  }
});

// To create an instance of this model we can use the 'new' operator

const song = new Song();

// Use the 'set' method to set an attribute

song.set("title", "Take it easy");

// You can pass adjacent objects to set multiple attributes at once

song.set({
  artist: "The Eagles",
  publishYear: 1973
});

// Alternatively you can set attributes when initializing a model object

const song2 = new Song({
  title: "Business",
  artist: "Eminem",
  publishYear: 2002
});

// Some ways to interact with the model:

song.toJSON(); // convert to JSON
song.get("title"); // get an attribute
song.unset("title"); // remove an attribute
song.clear(); // remove all attributes
song.has("title"); // check if it contains a given attribute

// VALIDATION

const Movie = Backbone.Model.extend({
  validate: function(attrs) {
    if (!attrs.title) return "Title is required";
  }
});

const movie = new Movie();

// Check if an object is valid

movie.isValid(); // => false

// Check the validation error

movie.validationError; // => Title is required

// INHERITENCE

// base class

const Animal = Backbone.Model.extend({
  walk: function() {
    console.log("Animal is walking");
  }
});

// secondary class (inherits the base class)

const Dog = Animal.extend({
  walk: function() {
    Animal.prototype.walk.apply(this); // call the method in the base class
    console.log("Dog is walking");
  }
});

const dog = new Dog();

dog.walk();

// CONNECTING TO THE SERVER

// set the urlRoot

const Book = Backbone.Model.extend({
  urlRoot: "/api/books"
});

// fetch a model from the server

const book = new Book({ id: 1 });

book.fetch(); // => GET /api/books/1

book.set("title", "The Alchemist");
book.save(); // => PUT/POST /api/books/1

book.destroy(); // DELETE /api/books/1

// set the idAttribute

const Country = Backbone.Model.extend({
  idAttribute: "countryId"
});

const country = new Country({ countryId: 1 });

// supply callback functions

country.fetch({
  success: function() {},
  error: function() {}
});

country.destroy({
  success: function() {},
  error: function() {}
});

// fot the save method, callback functions are wrapped with an object that is the second argument, not the first.

country.save(
  {}, // hash of attributes to set and save
  {
    success: function() {},
    error: function() {}
  }
);
