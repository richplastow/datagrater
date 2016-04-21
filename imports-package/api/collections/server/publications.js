//// Define publications for the Collections collection. 
import { Random      } from 'meteor/random';
import { ReactiveVar } from 'meteor/reactive-var'
import { Promise     } from 'meteor/promise' // for Fiber
const Fiber = Promise.Fiber; // or `Fiber = Npm.require('fibers');`

Meteor.startup( () => {

  //// Get a handle on the Mongo database and driver. 
  const db          = MongoInternals.defaultRemoteCollectionDriver().mongo.db
  //  , mc          = MongoInternals.NpmModules.mongodb.module.MongoClient
      , dbName      = db.databaseName //@todo use this
      , url         = db.options.url // eg 'mongodb://127.0.0.1:3001/meteor'
      , driver      = new MongoInternals.RemoteCollectionDriver(url)
      , collections = new ReactiveVar([]) // contains `{name:'Coll', fields:[]}`
  ;

  //// Analyse each Mongo collection. 
  db.collectionNames( (error, results) => {
    if (error) throw new Meteor.Error(500, 'failed');
    results.forEach( (result) => {

      //// A Fiber is needed to avoid a ‘Can't wait without Fiber’ error. 
      Fiber( () => {
        const fields = [] // contains `{ key:'foo',types:['object','boolean'] }`
            , items  = []
        ;
        driver.open(result.name).find({}).forEach( (item) => { //@todo limit the sample
          Object.keys(item).forEach( (key) => {
            const type = typeof item[key];
            if (! fields[key]) {
              const field = { key:key, types:[ type ] };
              fields[key] = field;
              fields.push(field);
            } else if (-1 === fields[key].types.indexOf(type) ) {
              fields[key].types.push(type);
            }
          });
          items.push(item);
        });

        const documents = [];
        items.forEach( (item) => {
          const doc = { fields:[] };
          fields.forEach( (field) => {
            doc.fields.push({
              value: item[ field.key ]
            });
          });
          documents.push(doc);
        });

        const tmp = collections.get();
        tmp.push({
          name:      result.name,
          fields:    fields,
          documents: documents,
        });
        collections.set(tmp);

      }).run();
    });

  });

  //// Publish the Collections collection as a reactive data source. 
  Meteor.publish('Collections', function() {
    const self = this;

    //// Uncomment this block to add sample collections. 
    // ([
    //   { name:'first' , fields:[{key:'hi',types:['number']},{key:'ok',types:['string']}] },
    //   { name:'second', fields:[] },
    //   { name:'third' , fields:[{key:'abc',types:['object','boolean']}] },
    // ]).forEach( (collection) => {
    //   self.added('Collections', Random.id(), collection);
    // });

    //// Uncomment this block to read collections directly from config. 
    // config.collections.forEach( (collection) => {
    //   console.log(collection);
    //   self.added('Collections', Random.id(), collection);
    // });

    //// Publish the collections found above. @todo make reactive
    collections.get().forEach( (collection) => {
      // console.log(collection);
      self.added('Collections', Random.id(), collection);
    });

    self.ready();
  });


});
