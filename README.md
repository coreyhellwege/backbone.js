# Backbone.js

[Documentation](https://backbonejs.org)

- A lightweight library for structuring JavaScript.
- Follows the MVC pattern, but it's closer to MV as Views are treated more like MVC Controllers.
- Provides routers which can be used for developing single page applications.
- Works perfectly for developing client applications over a set of REST API's.

Backbone's only hard dependency is [Underscore.js](http://underscorejs.org)

#### Benefits of Single page applications:

- Fast and smoothe UX
- All necessary code is retrieved initially
- Resources are dynamically loaded onto the same page, on demand

## Backbone Components

- <b>Events:</b> To give an object the ability to publish/subscribe to events
- <b>Models:</b> Include application data and associated logic
- <b>Collections:</b> An ordered set of models
- <b>Views:</b> To render models and listen for DOM/model events
- <b>Routers:</b> Responds to address changes in the browser and invokes handlers to present different views

---

## Models

Models are like containers for application data.

They're different from plain JavaScript objects in the sense that they have some kind of trace tracking mechanism and publish events when their state changes.

Models have the ability to send AJAX requests to the server to synchronise the data on the client with a server.

Writing JQuery AJAX calls is not necessary, you can simply call methods on your models. The models take care of all low level AJAX calls.

The attributes property of model objects is a hash. If you need to have a JSON representation of your Backbone model you can convert it into JSON by calling the `.toJSON()` method.

Backbone applications often use models that are synchronized with a persistent store using a RESTful API on the server.

<img src="./Assets/ConnectingToServer.png">

Models support three operations to work with the Persistence Store:

1. fetch() - GET
2. save() - POST/PUT
3. destroy() - DELETE

These methods are asynchronous and accept a success and error callback.

Backbone relies on the `urlRoot` of your models to construct the URL to the corresponding endpoint. If you don't specify the root and call one of the operations to sync with the server you will get an 'URL is not defined' error.

By convention Backbone assumes that your models have an attribute called ID which is used for uniquely identifying them.

All models have two ID's:

1. Persistent ID - assigned by the server
2. Client ID (cid) - assigned by backbone

The client ID is a temporary identifier that backbone uses to keep track of objects.

---

## Collections

There's two ways to pass objects into a collection:

1. Pass the initial array of models when creating the collection
2. Call the `.add()` method on an instantiated collection

By default the `.add()` method adds the given model to the end of the collection. You can use the second argument to specify the index at which you'd like to insert the model.

Underscore provides two useful methods for searching collections:

1. `.where()`
2. `.findWhere()`

When calling the `.filter()` method Underscore iterates through every model in the collection for you.

Similarly to the `.filter()` method, the `.each()` method expects a callback function that will be executed at each iteration.

Backbone collections, similar to models, are often retrieved from a persistence store residing in the server.

Backbone uses JQuery to make AJAX calls, and as a result you can pass additional arguments to the API.

---

## Views

Views are responsible for rendering content, and handling model and DOM events. In Backbone, Views are more like controllers in the typical MVC sense.

The `.render()` method is where we implement the rendering logic.

`this.$el` is a case JQuery object which contains the view's DOM element.

It's convention to return a reference to the view at the end of the `.render()` method.

When instantiating the view you specify the DOM element which the view should attach to by setting the `el` property to a JQuery selector string. If you don't specify one, Backbone will automatically assign an empty div to view.

You can use declare the following properties:

- `tagName` to specify which type of HTML element to be created.
- `className` to specify a class
- `id` to to specify an ID
