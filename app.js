const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB")

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  rating: 10,
  review: "Peaches are yummy!"
});

// fruit.save()

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("Succesfully saved all the fruits to fruitsDB.");
//   }
// });

// Fruit.find(function(err, fruits){
//   if (err){
//     console.log(err);
//   } else{
//
//     mongoose.connection.close();
//
//     fruits.forEach(function(fruit){
//       console.log(fruit.name);
//     });
//   }
// });

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const watermelon = new Fruit({
  name: "Watermelon",
  rating: 10,
  review: "Love it."
})

watermelon.save();

const Person = mongoose.model("Person", personSchema);

// const person = new Person({
//   name: "Sana",
//   age: 12,
//   favouriteFruit: pineapple
// });

// person.save();

// Fruit.updateOne({_id: "61cb1608de92ef2fbcb01506"}, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err);
//   } else{
//     console.log("Succesfully updated the document.");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the all documents.");
//   }
// });

Person.updateOne({name: "John"}, {favouriteFruit: watermelon}, function(err){
  if (err){
    console.log(err);
  } else{
    console.log("Succesfully updated the document.");
  }

});
