// COLLECTIONS

const Car = Backbone.Model.extend();

const Cars = Backbone.Collection.extend({
  model: Car
});

// pass an array of models when creating a collection

const cars = new Cars([
  new Car({ make: "Ford", country: "USA", year: 2017 }),
  new Car({ make: "BMW", country: "Germany", year: 2003 }),
  new Car({ make: "Audi", country: "Germany", year: 2010 })
]);

// add a model to an instantiated collection

cars.add(new Car({ make: "Volkswagen" }));

cars.add(new Car({ make: "Chevrolet" }), { at: 0 }); // insert at a given index

// remove a model from a collection

cars.remove(cars.at(1)); // remove at index

cars.at(0); // returns a model at the given index

// search for models in a collection

const germanCars = cars.where({ country: "Germany" }); // returns an array

const firstGermanCar = cars.findWhere({ country: "Germany" }); // returns only the first instance

const oldCars = cars.filter(function(car) {
  return car.get("year") < 2015;
});

console.log(oldCars);

cars.each(function(car) {
  console.log(car);
});
