require('dotenv').config({path:__dirname+'/sample.env'});
const mongoose = require('mongoose');
const express = require("express");
const app = express();

console.log(__dirname+'/sample.env')
console.log(process.env.MONGO_URL);

mongoose.connect(process.env.MONGO_URL,{
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

const personSchema = new mongoose.Schema({
  name:{
    type: String,
    require: true
  },
  age: Number,
  favoriteFoods: [String]
});

const Person = mongoose.model('Person',personSchema);



const createAndSavePerson = function(done) {
  const User1 = new Person({
    name : 'Dat',
    age : 21,
    favoriteFoods : ['KFC','Eatable things']
  });

  User1.save();
};

arrayOfPeople = [
  {name : 'user1',age : 20 ,favoriteFoods : ['chicken','fish']},
  {name : 'user2',age : 21 ,favoriteFoods : ['chicken','fish']},
  {name : 'user3',age : 22 ,favoriteFoods : ['chicken','fish']},
];

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
};
const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
