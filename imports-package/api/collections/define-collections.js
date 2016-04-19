//// Define the Collections collection. 
import { ReactiveDict } from 'meteor/reactive-dict';

var shell = function () {
  var db = MongoInternals.defaultRemoteCollectionDriver().mongo.db;

  db.collectionNames( 
    function(error, results) {
      if (error) throw new Meteor.Error(500, "failed");
      console.log('results',results);
    }
  );
};

// shell();

export const Collections = new ReactiveDict();
Collections.set('first' , { fields:['ok','hi'] });
Collections.set('second', { fields:[] });
