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
  
  Person.find({name : personName} ,function(err,personFound) {
    if (err) return console.log(err);
    done(null,personFound)
  })
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods : food}, function (err,personFound){
    if (err) return console.log(err);
    done(null,personFound)
  })
};

var findPersonById = function(personId, done) {
  Person.findById(personId, function (err, data) {
    if (err) return console.log(err);
    done(null, data);
  });
};

const findEditThenSave = function(personId, done) {
  const foodToAdd = "hamburger";
  Person.findById(personId, function(err,data){
    if (err) return console.log(err);
    person.favoriteFoods.push(foodToAdd);

    person.save((err,updatePerson)=>{
      if (err) return console.log(err);
      done(null,updatePerson);
    });
  })
  
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;
  Person.findOneAndUpdate(
    {name : personName}, 
    person.age = ageToSet, 
    {new : true}, 
    function (err,data){
      if (err) return console.log(err);
      done (null,data)
    })
};

const removeById = (personId, done) => {
  Person.findByIdAndRemove(personId,function(err,data){
    if(err) return console.log(err);
    done (null,data)
  })
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
