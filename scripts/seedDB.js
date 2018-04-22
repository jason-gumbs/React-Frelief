const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactfrelief",
  {
   
  }
);



const resourceSeed = [
  {
      address : "1119 McDaniel St SW",
      category : "Food & Water",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "We'll be giving out water containers with one free fill up while supplies last. This Saturday 9-3",
      name : "Helping Hand LLC",
      offering : "Free Water and Containers",
      phone : "770-555-5555",
      state : "GA",
      zip : "30310"
    },
     {
      address : "2658 Green Meadows Ln NE",
      category : "Shelter",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Got a couple couches and plenty of floor space for anyone who needs a place to sleep if you were displaced by the recent tornado, just give me a call!",
      name : "James John",
      offering : "Couches and Floors to Sleep On!",
      phone : "678-555-5555",
      state : "GA",
      zip : "30319"
    },
     {
      address : "750 Kirkwood Ave SE",
      category : "Clothing",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "I was going to donate these but I figured if someone wants to come pick them up they're free!",
      name : "Sally Smith",
      offering : "Extra Jackets and Blankets",
      phone : "404-555-5555",
      state : "GA",
      zip : "30316"
    },
    {
      address : "700 Grant Terrace",
      category : "Food & Water",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "My garden yielded a lot of extra produce this season and I can't use it all in time by myself. If you're hungry or in need of fresh produce come on by!",
      name : "Lam Barker",
      offering : "Plenty of Fresh Produce",
      phone : "770-777-7777",
      state : "GA",
      zip : "30315"
    },
    {
      address : "1955 Monroe Dr NE",
      category : "Medical",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "This Saturday from 8-2PM we will be providing free flu shots on a first come first serve basis, while supplies last.",
      name : "American Red Cross",
      offering : "Free Flu Shots",
      phone : "(404) 876-3302",
      state : "GA",
      zip : "30324"
    },
     {
      address : "3144 Martin Luther King Jr Drive",
      category : "Clothing",
      city : "Atlanta",
      date: new Date(Date.now()),
      description : "Extra sweaters and T-shirts up for grab if needed..",
      name : "Shadae",
      offering : "Sweaters and T-shirts",
      phone : "3055462324",
      state : "Georgia",
      zip : "30311"
    },
     {
      address : "809 Pond St NW",
      category : "Tech",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Need a charge? I have some outlets on the side of my house if you'd like to come and charge your devices",
      name : "Sam Wane",
    offering : "Public Outlets",
      phone : "(678) 333-3333",
      state : "GA",
      zip : "30314"
    },
     {
      address : "781 Peachtree St Nw",
      category : "Food & Water",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "We'll be giving out food and water for those in need and anyone who is hungry",
      name : "Saint Mark United Methodist Church",
      offering : "Free Lunch This Sunday!",
      phone : "(404) 873-2636",
      state : "GA",
      zip : "30308"
    },
   {
      address : "1405 Clifton Rd",
      category : "Childrens Health",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Saturday 9-3 we'll be administering free small pox vaccines while supplies last",
      name : "Children's Healthcare of Atlanta",
      offering : "Free Chicken Pox Vaccine",
      phone : "(404) 785-5437",
      state : "GA",
      zip : "30329"
    },
    {
      address : "1056 NW Center St",
      category : "Shelter",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "If your power went out and need a warm place to stay come on over. I've got my generator running and plenty of blankets",
      name : "Guy Shannon",
      offering : "Power Generator Running",
      phone : "(404) 888-8888",
      state : "GA",
      zip : "30318"
    },
     {
      address : "1015 Burns Dr SW",
      category : "Clothing",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "I'm getting rid of a lot of children's clothes ages 5-13, hopefully it can help you if you need!",
      name : "Sally Hamburg",
      offering : "Getting Rid of Children's Clothes",
      phone : "(770) 000-0000",
      state : "GA",
      zip : "30310"
    },
     {
      address : "319 Oak Hill Lane",
      category : "Food & Water",
      city : "Canton",
      date : new Date(Date.now()),
      description : "Cases of water for free",
      name : "Jim Kirkland",
      offering : "Free Water",
      phone : "(770) 888-8888",
      state : "GA",
      zip : "30115"
    },
     {
      address : "13680 Arnold Mill Rd",
      category : "Survival",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Free camping/survival gear",
      name : "Military Survival",
      offering : "Free survival gear",
      phone : "770-111-1111",
      state : "Ga",
      zip : "33023"
    },
     {
      address : "700 S Eugenia Pl NW",
      category : "Food & Water",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Free Water",
      name : "John",
      offering : "Free Water",
      phone : "770-333-3333",
      state : "GA",
      zip : "30318"
    },
     {
      address : "1469 Fairbanks St SW",
      category : "Clothing",
      city : "Atlanta",
      date : new Date(Date.now()),
      description : "Free Help",
      name : "Change",
      offering : "Help",
      phone : "770-444-4444",
      state : "GA",
      zip : "30310"
    }
 
  
 
];

db.Resource
  .remove({})
  .then(() => db.Resource.collection.insertMany(resourceSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
