//// Define publications for the Collections collection. 
import { Random } from 'meteor/random';

Meteor.publish('Collections', function() {
  const self = this;

  //// Get a handle on the Mongo database. 
  const db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  //// Add an object to 'Collections' for each real Mongo collection. 
  db.collectionNames( (error, results) => {
    if (error) throw new Meteor.Error(500, 'failed');
    results.forEach( (raw) => {
      const collection = { name: raw.name, fields:['@todo'] }
      self.added('Collections', Random.id(), collection);
      console.log('collection',collection);
    });
  });

  //// Uncomment this block to add sample collections. 
  // ([
  //   { name: 'first' , fields:['ok','hi'] },
  //   { name: 'second', fields:[] },
  //   { name: 'third' , fields:['abc'] }
  // ]).forEach( (collection) => {
  //   self.added('Collections', Random.id(), collection);
  // });

  self.ready();
});
