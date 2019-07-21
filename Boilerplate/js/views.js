// VIEWS

const Song = Backbone.model.extend();

const Songs = Backbone.Collection.extend({
  model: Song
});

const SongView = Backbone.View.extend({
  tagName: "li",
  className: "song",
  id: "1234",
  attributes: {
    genre: "Jazz"
  },
  events: {
    click: "onClick"
  },

  onClick: function() {
    console.log("Listen clicked");
  },

  render: function() {
    this.$el.html(this.model.get("title") + "<button>Listen</button>");
    return this;
  }
});

// create an instance of a model

const song = new Song({ title: "Love Lost" });

// create a collection

const songs = new Songs([
  new Song({ title: "Here Comes the Sun" }),
  new Song({ title: "Come Together" }),
  new Song({ title: "Maxwell's Silver Hammer" })
]);

// declare an instance of the view for a song

const songView = SongView({ el: "#songs", model: song }); // specify the DOM element and model

// another way, using the JQuery selector and HTML method

$("#songs").html(songView.render().$el);

// declare an instance of the view for a collection of songs

const SongsView = Backbone.View.extend({
  render: function() {
    const self = this;
    this.model.each(function(song) {
      // references and iterates through the collection
      const songView = new SongView({ model: song });
      self.$el.append(songView.render().$el);
    });
  }
});

const songsView = new SongsView({ el: "#songs", model: songs });
songsView.render();
